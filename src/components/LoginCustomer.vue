<template>

  <section class="src-components-login-customer">

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 col-xl-4 form-box mt-5">
          
          <!-- CUSTOMER LOGIN FORM -->
          <form novalidate autocomplete="off" class="p-3 mt-3 mb-3 text-left" @submit.prevent="send()">
            <h4 class="text-black text-left ml-3">Iniciar Sesión</h4>
            <hr>
            <div class="form-group col-12">
                <label for="username">Usuario</label>
                <input 
                  type="text"
                  id="username"
                  class="form-control"
                  v-model="$v.f.username.$model"
                >
                <div v-if="$v.f.username.$error && $v.f.username.$dirty" class="alert alert-danger mt-1">
                  <div v-if="$v.f.username.required.$invalid">Este campo es requerido</div>
                  <div v-if="$v.f.username.minLength.$invalid">Este campo debe tener al menos {{$v.f.username.minLength.$params.min}} caracteres</div>
                          <div v-if="$v.f.username.maxLength.$invalid">Este campo debe tener máximo {{$v.f.username.maxLength.$params.max}} caracteres</div>
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
                  <div v-if="$v.f.password.required.$invalid">Este campo es requerido</div>
                  <div v-if="$v.f.password.minLength.$invalid">Este campo debe tener al menos {{$v.f.password.minLength.$params.min}} caracteres</div>
                  <div v-if="$v.f.password.maxLength.$invalid">Este campo debe tener máximo {{$v.f.password.maxLength.$params.max}} caracteres</div>
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
            <div class="text-center">
                <a class="reg-link" href="/register">¿Aún no estás registrado? Registrate acá.</a>
              </div>
          
          </form>
        </div>
      </div>
    </div>

  </section>

</template>

<script>

import { required, minLength, maxLength } from '@vuelidate/validators'

  export default  {
    name: 'src-components-login-customer',
    props: [],
    components: {
      
    },
    mounted () {
      this.resetForm()
    },
    data () {
      return {
          f: this.resetForm(),
          url : 'https://5f93837c8742070016da699e.mockapi.io/grupo-maravilla/login-customer'
      }
    },
    validations: {
      f: {
        username: { 
          required,
          minLength: minLength(4),
          maxLength: maxLength(16)
        },
        password: { 
          required,
          minLength: minLength(8),
          maxLength: maxLength(16)
        }
      }
    },
    methods: {
        async sendDataFormAxios(data) {
            
            try {
              if(data){
                let res = await this.axios.post(this.url, data, {'content-type': 'application/json'})
                console.log(res.data)
              }
            }
            catch(error) {
              console.log('HTTP POST ERROR', error)
            }
        },
        async getDataFormAxios() {
            try {
              let res = await this.axios(this.url)
              console.log(res.data)
            }
            catch(error) {
              console.log('HTTP GET ERROR', error)
            }
        },
        send() {
            this.$v.$touch()
            if(!this.$v.$invalid) {
              let form = {
                username: this.$v.f.username.$model,
                password: this.$v.f.password.$model,
              }
              console.log(form)
              this.sendDataFormAxios(form)
                .then(() => {
                  this.$router.push('/home')
                })
              this.f = this.resetForm()
              this.$v.$reset()
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

  .reg-link {
    color: rgb(209, 207, 207);
    text-decoration: none;
  }

  .reg-link:hover {
    color: rgb(255, 255, 255);
    text-decoration: none;
  }
</style>
