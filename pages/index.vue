<template>
  <div>
  <section id="main-slider" class="modern-hero">
      <div class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
              <div class="item active">
                  <div class="container">
                      <div class="row">
                          <div class="col-sm-12">
                              <div class="carousel-content center centered">
                                  <h2 class="boxed animation animated-item-1 hero-title">Bem vindo à Clinalamo</h2>
                                  <br>
                                  <a class="btn btn-md animation hero-btn" href="#about-us">Sobre Nós</a>
                                  <br>
                                  <a class="btn btn-md animation hero-btn hero-btn-secondary" href="#" data-toggle="modal" data-target="#myModalHorizontal">Marcações Online</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div><!--/.item-->
          </div><!--/.carousel-inner-->
      </div><!--/.carousel-->
  </section><!--/#main-slider-->


  <div id="content-wrapper">

    <section id="about-us" class="white">
      <div class="container">
          <div class="gap"></div>
          <div class="row">
              <div class="col-md-12">
                  <div class="center gap section-heading">
                      <h2 class="main-title">Sobre Nós</h2>
                      <hr>
                  </div>
              </div>
          </div>
          <div class="row">
              <div class="col-md-12 about-description" v-html="details.description">
              </div>
          </div>
          <div class="row">
                <div class="col-md-4 col-xs-12">
                    <div class="tile-progress center tile-cyan modern-card">
                        <div class="tile-header">
                            <h3 class="upperCase">Marcações Online</h3>
                        </div>
                        <div class="tile-footer">
                            <h4>
                                <span class="onlineAppointments pct-counter text-white counter">{{details.online_appointments}}</span>
                            </h4>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-xs-12">
                    <div class="tile-progress center tile-cyan modern-card">
                        <div class="tile-header">
                            <h3 class="upperCase">Médicos</h3>
                        </div>
                        <div class="tile-footer">
                            <h4>
                                <span class="doctorsCount text-white pct-counter counter">{{details.doctors}}</span>
                            </h4>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-xs-12">
                    <div class="tile-progress center tile-cyan center modern-card">
                        <div class="tile-header">
                            <h3 class="upperCase">Especialidades</h3>
                        </div>
                        <div class="tile-footer">
                            <h4>
                                <span class="specialitiesCount text-white pct-countercounter">{{details.specialities}}</span>
                            </h4>
                        </div>
                    </div>
                </div>
            </div><!--/.row-->
        </div>
    </section>


          <section id="testimonial-carousel" class="divider-section">
          <div class="gap"></div>
            <div class="container">
                <div class="row">
                    <div class="center gap  section-heading">
                          <h2 class="main-title">O que dizem sobre nós</h2>
                          <hr>
                          <div class="gap"></div>
                      </div>
                    <div class='col-md-offset-2 col-md-8'>
                        <div class="carousel slide" data-ride="carousel" id="quote-carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#quote-carousel" data-slide-to="0" class="active"></li>
                                <li data-target="#quote-carousel" data-slide-to="1"></li>
                                <li data-target="#quote-carousel" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="item active">
                                    <blockquote>
                                        <div class="row">
                                            <div class="col-sm-9">
                                                <p>Atendimento simpático muito próximo do centro histórico com uma boa variedade de especialistas e acordos.</p>
                                                <small>José Eduardo</small>
                                            </div>
                                        </div>
                                    </blockquote>
                                </div>
                                <div class="item">
                                    <blockquote>
                                        <div class="row">
                                            <div class="col-sm-9">
                                                <p>Excelência na qualidade e no atendimento.</p>
                                                <small>Amilcar Custódio</small>
                                            </div>
                                        </div>
                                    </blockquote>
                                </div>
                                <div class="item">
                                   <blockquote>
                                       <div class="row">
                                           <div class="col-sm-9">
                                               <p>Bons profissionais e sempre dispostos a ajudar.</p>
                                               <small>Ricardo Santos</small>
                                           </div>
                                       </div>
                                   </blockquote>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="gap"></div>
          </div>
        </section>
      </div>
</div>
</template>



<script>
import { db } from '~/plugins/firebase.js';


export default {
  data () {
    return {
      details: {}
     }
   },
  async asyncData({ params, error }) {



    let item = {},
        specialitiesItem = {},
        doctorsItem = {};


    let about =  await db.collection("aboutUs").get().then((querySnapshot) => {
         querySnapshot.docs.map(doc => {
           item = doc.data();
         });

         return item;
      });

    let specialitiesSize =  await db.collection("specialities").get().then((querySnapshot) => {
          return querySnapshot.size;
        });

    let doctorsSize =  await db.collection("doctors").get().then((querySnapshot) => {
          return querySnapshot.size;
        });


      return Promise.all([about, specialitiesSize, doctorsSize]).then(values => {
         return {
           details: {
             description: values[0].description,
             online_appointments: 33 || 0,
             specialities: values[1] || 0,
             doctors: values[2] || 0
           }
          }

          this.$nuxt.$loading.finish();
       });


  },
  head () {
    return {
    title: 'Clinálamo - Clínica Médica Dos Álamos Lda',
    link: [
      { rel: 'canonical', href: 'http://clinalamo.pt/' }
    ],
   }
 },
 mounted() {
   //do something after mounting vue instance
   $(".tile-progress .tile-header").matchHeight();
   var footerHeight = jQuery("#footer-wrapper").outerHeight();
   jQuery("#content-wrapper").css("margin-bottom", footerHeight);

   var windowsHeight = jQuery(window).height();
   var navHeight = jQuery("navbar-fixed-top").outerHeight();
   var newHeight = windowsHeight + 30;

   jQuery("#main-slider").css("height", newHeight + "px");
   jQuery("#single-page-slider").css("min-height", windowsHeight / 3 + "px")

   $("#main-slider .carousel-content").flexVerticalCenter({
     cssAttribute: "padding-top",
     verticalOffset: '160px'
   });

   if (
     $(document).height() - $(window).height() - $(window).scrollTop() <
     1000
   ) {
     $("#footer-wrapper").css("z-index", "4");
   } else {
     $("#footer-wrapper").css("z-index", "1");
   }

   jQuery("a[href*=\\#]:not([href=\\#])").click(function() {
     if (
       location.pathname.replace(/^\//, "") ==
         this.pathname.replace(/^\//, "") &&
       location.hostname == this.hostname
     ) {
       var target = $(this.hash);
       target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
       if (target.length) {
         $("html,body").animate(
           {
             scrollTop: target.offset().top
           },
           1000
         );
         return false;
       }
     }
   });
 },
 methods: {
   fetchDescription(id, i) {
     this.types_selected = i ? this.exams_details.exams[i] : this.exams_details.exams[0];
   },
   toggleClassInfo(type){
     this.infoSelected = type === 'info';
     this.contentSelected = !this.infoSelected;
   }
 }
}
</script>

<style>
.backstretch:before {
    content: "";
    background-image: none !important;
    background-color: rgba(0, 0, 0, 0.4);
    min-width: 100%;
    height: 100%;
    position: absolute;
    display: block;
    z-index: -1;
}

</style>
