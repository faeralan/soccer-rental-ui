<template>

  <section class="src-components-register-success">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 col-xl-4 form-box mt-5 mb-5">
          
         <!-- REGISTER SUCCESS -->
          <h2 class="mt-3">¡Registro exitoso!</h2>
          <hr>
          <h5 class="mt-3">Ya podés iniciar sesión.</h5>
          <br>
          <div class="text-center mb-3 col-12">
                <a class="reg-link float-left ml-5 mb-3" href="/login-customer">Soy cliente.</a>
                <a class="reg-link float-right mr-5 mb-3" href="/login-owner">Soy Dueño.</a>
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
      
    },
    data () {
      return {

      }
    },
    methods: {
      
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

  h2, h5{
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
