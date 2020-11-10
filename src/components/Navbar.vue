<template>

  <section class="src-components-navbar">
    <nav v-if="!$store.state.isLoggedCustomer" class="navbar fixed-top navbar-expand-lg navbar-light bg-info" :class="{change_color: scrollPosition > 50}">
      <a class="font-italic navbar-brand" href="#" :class="{change_color: scrollPosition > 50}">Juego Limpio</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          
          
        </ul>
        <span class="navbar-text">
          <li class="nav-item">
            <a class="nav-link login-btn mr-15" href="/register-customer" :class="{change_btn: scrollPosition > 50}">Registrate</a>
          </li>
        </span>
        <span class="navbar-text">
          <li class="nav-item">
            <a class="nav-link login-btn" href="/login-customer" :class="{change_btn: scrollPosition > 50}">Iniciar Sesión</a>
          </li>
        </span>
      </div>
    </nav>


    <nav v-else-if="$store.state.isLoggedCustomer" class="navbar fixed-top navbar-expand-lg navbar-light bg-info" :class="{change_color: scrollPosition > 50}">
      <a class="font-italic navbar-brand" href="#" :class="{change_color: scrollPosition > 50}">Juego Limpio</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          
          
        </ul>
        <span class="navbar-text">
          <li class="nav-item">
            <a class="nav-link login-btn" href="/login-customer" :class="{change_btn: scrollPosition > 50}">Cerrar Sesión</a>
          </li>
        </span>
      </div>
    </nav>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-navbar',
    props: [],
    mounted () {
      window.addEventListener('scroll', this.updateScroll);
    },
    data () {
      return {
        scrollPosition: null
      }
    },
    methods: {
       updateScroll() {
         this.scrollPosition = window.scrollY
        //  console.log(this.scrollPosition)
       },
       
      
    },
    computed: {
     
    }
}


</script>

<style scoped lang="css">
  li{
    list-style: none;
  }
  .login-btn{
    padding: 10px 25px;
    /* height: 42px; */
    background-color: rgba(255, 255, 255, 0.1) !important;
    border-color: #ebf7ea;
    color:#FFF !important;

    border-radius: 25px;
    border: 1px solid #ebf7ea;
    background-color: transparent;
    font-size: 16px;
    font-weight: 400;
    
  }
  .login-btn:hover{
        background-color: rgba(255, 255, 255, 0.4) !important;
  }
  .navbar-brand{
    color: #FFF !important;
  }
  .navbar{
    background-color: rgba(255, 255, 255, 0.1) !important;
  }
  .change_color {
       background-color:#EEE !important;
       color: #333 !important;
   }



  .change_btn{
    background-color: rgba(238, 238, 238, 0.1) !important;
    border-color: #333;
    color:#333 !important;
  }
  .change_btn:hover{
        background-color: rgba(187, 186, 186, 0.637) !important;
  }

  .mr-15{
    margin-right: 15px;
  }
  
</style>
