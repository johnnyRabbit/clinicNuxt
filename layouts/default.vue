<template>
  <div>
      <header class="navbar navbar-inverse navbar-fixed-top modern-header" role="banner">
          <div class="container">
              <div class="navbar-header">
                  <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                      <span class="sr-only">Toggle navigation</span>
                      <i class="fa fa-bars"></i>
                  </button>
                   <a class="navbar-brand" href="/">
                     <img class="logo-default" src="~/assets/logo-comp.png" width="250" alt="logo">
                   </a>
              </div>
              <div class="collapse navbar-collapse">
                  <ul class="nav navbar-nav navbar-right" itemtype="http://www.schema.org/SiteNavigationElement">
                      <li v-on:click="closeMenu"><nuxt-link class="nav-item" to="/">Início</nuxt-link></li>
                      <li v-on:click="closeMenu" itemprop="name"><a itemprop="url" href="#" data-toggle="modal" data-target="#myModalHorizontal">Marcações Online</a></li>
                      <li v-on:click="closeMenu"><nuxt-link class="nav-item" to="/especialidades/">Especialidades</nuxt-link></li>
                      <li v-on:click="closeMenu"><nuxt-link class="nav-item" to="/exames/">Exames</nuxt-link></li>
                      <li v-on:click="closeMenu"><nuxt-link class="nav-item" to="/analises-clinicas/">Análises Clínicas</nuxt-link></li>
                      <li v-on:click="closeMenu"><nuxt-link class="nav-item" to="/estetica/">Estética</nuxt-link></li>
                      <li v-on:click="closeMenu"><nuxt-link class="nav-item" to="/contactos/">Contactos</nuxt-link></li>
                  </ul>
              </div>
          </div>
      </header><!--/header-->
    <main class="modern-main">
      <nuxt/>
    </main>
    <div>
      <OnlineAppointments/>
    </div>
    <div id="footer-wrapper" class="modern-footer-wrapper">
        <footer id="footer" class="modern-footer">
            <div class="container">
              <div class="schedule">
                <div class="col-sm-6" style="margin-bottom: 15px">
                  <span class="footer-information" style="margin-bottom: 5px; font-weight:bold">Horário de Funcionamento</span><br/>
                  <span>Segunda à Sexta-feira</span><br/>
                  <span>Manhã das 10:00h às 12:30h</span><br/>
                  <span>Tarde das 14:00h às 20h</span><br/>
                </div>
                <div class="col-sm-6" style="margin-bottom: 15px">
                  <span class="footer-information" style="margin-bottom: 5px; font-weight:bold">Contactos</span><br/>
                  <span class="fa fa-home" style="margin-right: 10px;"></span>
                  <span>Rua António José Couvinha, Lote 16 - R/C Esq.º  Urbanização dos Álamo 7005-296 Évora  Portugal </span><br/>
                  <span class="fa fa-phone" style="margin-right: 10px;"></span><span>266 745 990</span><br/>
                  <span class="fa fa-fax" style="margin-right: 10px;"></span><span>266 745 999</span><br/>
                  <span class="fa fa-mobile" style="margin-right: 10px;"></span><span>926 649 111</span><br/>
                  <span class="fa fa-envelope" style="margin-right: 10px;"></span><span>clinalamo@gmail.com</span><br/>
                  <span class="fa fa-facebook" style="margin-right: 10px;"></span> <a href="https://www.facebook.com/clinalamo.lda" target="_blank">Clinálamo</a> <br/>
                </div>

              </div>
                <div class="row">
                    <div class="col-sm-6">
                        &copy; 2018 <a target="_blank" href="#" title="Smartable Ways">SmartableWays</a>.
                        Todos os Direitos Reservados. | <nuxt-link class="nav-item" to="/politica-de-privacidade/">Política de Privacidade</nuxt-link>
                    </div>
                    <div class="col-sm-6">
                        <ul class="pull-right">
                            <li><a id="gototop" class="gototop" href="#"><i class="fa fa-chevron-up"></i></a></li><!--#gototop-->
                        </ul>
                    </div>
                </div>
            </div>
        </footer><!--/#footer-->
    </div>
  </div>
</template>

<script>
import OnlineAppointments from '~/components/OnlineAppointments.vue'
export default {
  components: {
    OnlineAppointments
  },
  methods: {
    closeMenu() {
      $('.navbar-toggle').click();
    }
  }
}
</script>

<style>

</style>
