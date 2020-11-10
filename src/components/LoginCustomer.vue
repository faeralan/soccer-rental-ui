<template>

  <section class="src-components-login-customer">

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 col-xl-4 form-box mt-5">
          
          <!-- CUSTOMER LOGIN FORM -->
          <form novalidate autocomplete="off" class="p-3 mt-3 mb-3 text-left" @submit.prevent="send()">
            <h4 class="text-black text-left ml-3">Iniciar Sesión</h4>
            <hr>
            <div v-if="error" class="alert alert-danger">
              Los datos ingresados son incorrectos.
            </div>
            <div class="form-group col-12">
                <label for="username">Correo electrónico</label>
                <input 
                  type="text"
                  id="username"
                  class="form-control"
                  v-model="$v.f.username.$model"
                >
                <div v-if="$v.f.username.$error && $v.f.username.$dirty" class="alert alert-danger mt-1">
                  <div v-if="$v.f.username.required.$invalid">- Este campo es requerido</div>
                </div>
            </div>
            <div class="form-group  col-12">
                <label for="password">Contraseña</label>
                <input 
                  type="password"
                  id="password"
                  class="form-control"
                  v-model="$v.f.password.$model"
                >
                <div v-if="$v.f.password.$error && $v.f.password.$dirty" class="alert alert-danger mt-1">
                  <div v-if="$v.f.password.required.$invalid">- Este campo es requerido</div>
                  
                </div>
            </div>
            <div class="form-group col-4">
                  <input 
                      type="submit"
                      :disabled="false"
                      class="btn btn-success mt-4"
                      value="Enviar"
                  >
            </div>

            
          
          </form>
          <div class="text-center">
                <a class="reg-link" href="/register-customer">¿Aún no estás registrado? Registrate acá.</a>            
          </div>
          <br>
          <div class="text-center mb-3">
                <a class="log-link" href="/login-owner">Soy dueño.</a>
          </div>
        </div>
      </div>
    </div>

  </section>

</template>

<script>

import { required } from '@vuelidate/validators'

  export default  {
    name: 'src-components-login-customer',
    props: [],
    components: {
      
    },
    mounted () {
      if(this.$store.state.isLoggedCustomer){
        this.$router.push('/home')
      }
      this.resetForm()
    },
    data () {
      return {
          f: this.resetForm(),
          url : 'https://evening-hollows-89542.herokuapp.com/login',
          error: false
      }
    },
    validations: {
      f: {
        username: { 
          required
        },
        password: { 
          required
        }
      }
    },
    methods: {
        sendDataFormAxios(data) {   
          this.axios.post(this.url, data, {'content-type': 'application/json'})
            .then(res => {
              if (res.data) {
                
                sessionStorage.setItem('customer',res.data.token)
                this.$store.dispatch('getStatusCustomer', true);
                this.$router.push('/home')
              }
            })
            .catch(error => {
              console.log(error)
              this.error = true             
            })
        },
        send() {
            this.$v.$touch()
            if(!this.$v.$invalid) {
              let form = {
                email: this.$v.f.username.$model,
                password: this.$v.f.password.$model,
                owner: false
              }
              this.sendDataFormAxios(form)
            }
        },
        resetForm() {
      
            return {
               username: '',
               password : ''
            }
        }
    },
    computed: {
      
    }
}


</script>

<style scoped lang="css">
  .src-components-login-customer {
    min-height: 600px;
    background: url(../assets/slide6.jpg);
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

  form h4 {
    color: rgb(228, 227, 227);
    font-weight: 500;
  }

  .reg-link, .log-link {
    color: rgb(209, 207, 207);
    text-decoration: none;
  }

  .reg-link:hover, .log-link:hover {
    color: rgb(255, 255, 255);
    text-decoration: none;
  }
</style>
