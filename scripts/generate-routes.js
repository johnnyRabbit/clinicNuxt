const firebase = require('firebase/app');
require('firebase/firestore');

const { normalizeSlug } = require('../utils/slug');

const settings = { timestampsInSnapshots: true };

function getFirebaseConfig() {
  return {
    apiKey: process.env.FIREBASE_API_KEY || 'YOUR_FIREBASE_API_KEY',
    authDomain: process.env.FIREBASE_AUTH_DOMAIN || 'YOUR_FIREBASE_AUTH_DOMAIN',
    databaseURL: process.env.FIREBASE_DATABASE_URL || 'YOUR_FIREBASE_DATABASE_URL',
    projectId: process.env.FIREBASE_PROJECT_ID || 'YOUR_FIREBASE_PROJECT_ID',
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET || 'YOUR_FIREBASE_STORAGE_BUCKET',
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || 'YOUR_FIREBASE_MESSAGING_SENDER_ID'
  };
}

function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(getFirebaseConfig());
  }
  firebase.firestore().settings(settings);
}

async function buildSpecialitiesRoutes(db) {
  const routes = [];
  const snapshot = await db.collection('specialities').get();

  snapshot.docs.forEach((doc) => {
    const data = doc.data();
    const slug = normalizeSlug(data.name || '');
    const isSpeciality = data.name !== 'Análises Clínicas' && (data.section === 'Especialidades' || data.section === 'Ambas');

    routes.push(`${isSpeciality ? '/especialidades/' : '/estetica/'}${slug}`);
  });

  return routes;
}

async function buildExamRoutes(db) {
  const routes = [];
  const snapshot = await db.collection('exams_types').get();

  snapshot.docs.forEach((doc) => {
    const data = doc.data();
    const slug = normalizeSlug(data.name || '');
    routes.push(`/exames/${slug}`);
  });

  return routes;
}

async function generateRoutes() {
  initFirebase();
  const db = firebase.firestore();

  const [specialities, exams] = await Promise.all([
    buildSpecialitiesRoutes(db),
    buildExamRoutes(db)
  ]);

  return [...specialities, ...exams];
}

module.exports = generateRoutes;
