<template>

  <section class="src-components-register-success">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 col-xl-4 form-box mt-5 mb-5">
          
         <!-- REGISTER SUCCESS -->
          <h2 class="mt-3">¡Registro exitoso!</h2>
          <hr>
          <div class="text-center mb-3">
                <a class="reg-link" href="/home">Ir a la pantalla principal.</a>
          </div>

        </div>
      </div>
    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-register-success',
    props: [],
    mounted () {
      this.redirect()
    },
    data () {
      return {

      }
    },
    methods: {
      redirect(){
        setTimeout(() => {
          this.$router.push('/home')
        }, 3000)  
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
    .src-components-register-success {
    min-height: 600px;
    background: url(../assets/slide8.jpg);
    background-size: cover;
    background-repeat: no-repeat;
  }

  form label {
    color: white;
  }

  .container .form-box {
    background: rgba(0,0,0,0.2);
    border-radius: 10px;
  }

  h2 {
    color: white;
  }

  form h4 {
    color: rgb(228, 227, 227);
    font-weight: 500;
  }

  .reg-link {
    color: rgb(209, 207, 207);
    text-decoration: none;
  }

  .reg-link:hover {
    color: rgb(255, 255, 255);
    text-decoration: none;
  }
</style>
