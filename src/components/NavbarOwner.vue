<template>

  <section class="src-components-navbar-owner">
    <nav class="navbar navbar-expand-lg navbar-light bg-info">
      <a class="font-italic navbar-brand" href="#">Juego Limpio</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          
          
        </ul>
        <span class="navbar-text">
          <li class="nav-item">
            <a class="nav-link login-btn mr-15" href="/admin/index">ABM Canchas</a>
          </li>
        </span>
        <span class="navbar-text">
          <li class="nav-item">
            <a class="nav-link login-btn" href="/login-customer">Editar Usuario</a>
          </li>
        </span>
        <span class="navbar-text">
          <li class="nav-item">
            <a class="nav-link login-btn" href="#" @click="logout()">Cerrar Sesión</a>
          </li>
        </span>
      </div>
    </nav>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-navbar-owner',
    props: [],
    mounted () {
      
    },
    data () {
      return {

      }
    },
    methods: {
      logout(){
          sessionStorage.removeItem('owner')
          this.$store.dispatch('getStatusOwner', false);
          this.$router.push('/')
       }
    },
    computed: {
      

    }
}


</script>

<style scoped lang="css">
  .src-components-navbar-owner {

  }
  li{
    list-style: none;
  }
  .navbar{
    background-color: #ebf7ea !important;
  }
</style>
