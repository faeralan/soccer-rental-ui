<template>

  <section class="src-components-register-owner">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 col-xl-4 form-box mt-5 mb-5">
          
          <!-- REGISTER FORM -->
          <form novalidate autocomplete="off" class="p-3 mt-3 mb-3 text-left" @submit.prevent="send()">

            <h4 class="text-black text-left ml-3">Registrarse</h4>

            <hr>

            <div class="form-group col-12">
                <label for="name">Nombre</label>
                <input 
                  type="text"
                  id="name"
                  class="form-control"
                  v-model="$v.f.name.$model"
                >
                <div v-if="$v.f.name.$error && $v.f.name.$dirty" class="alert alert-danger mt-1">
                  <div v-if="$v.f.name.required.$invalid">Este campo es requerido</div>
                  <div v-if="$v.f.name.minLength.$invalid">Este campo debe tener al menos {{$v.f.name.minLength.$params.min}} caracteres</div>
                  <div v-if="$v.f.name.maxLength.$invalid">Este campo debe tener máximo {{$v.f.name.maxLength.$params.max}} caracteres</div>
                </div>
            </div>

            <div class="form-group col-12">
                <label for="lastname">Apellido</label>
                <input 
                  type="text"
                  id="lastname"
                  class="form-control"
                  v-model="$v.f.lastname.$model"
                >
                <div v-if="$v.f.lastname.$error && $v.f.lastname.$dirty" class="alert alert-danger mt-1">
                  <div v-if="$v.f.lastname.required.$invalid">Este campo es requerido</div>
                  <div v-if="$v.f.lastname.minLength.$invalid">Este campo debe tener al menos {{$v.f.lastname.minLength.$params.min}} caracteres</div>
                  <div v-if="$v.f.lastname.maxLength.$invalid">Este campo debe tener máximo {{$v.f.lastname.maxLength.$params.max}} caracteres</div>
                </div>
            </div>

            <div class="form-group col-12">
                <label for="email">Correo electrónico</label>
                <input 
                  type="email"
                  id="email"
                  class="form-control"
                  v-model="$v.f.email.$model"
                >
                <div v-if="$v.f.email.$error && $v.f.email.$dirty" class="alert alert-danger mt-1">
                  <div v-if="$v.f.email.required.$invalid">Este campo es requerido</div>
                  <div v-if="$v.f.email.email.$invalid">Debe ser un email válido</div>
                </div>
            </div>

            <div class="form-group col-12">
                <label for="phone">Teléfono</label>
                <input 
                  type="tel"
                  id="phone"
                  class="form-control"
                  pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}"
                  v-model="$v.f.phone.$model"
                >
                <div v-if="$v.f.phone.$error && $v.f.phone.$dirty" class="alert alert-danger mt-1">
                  <div v-if="$v.f.phone.required.$invalid">Este campo es requerido</div>
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

            <div class="form-group col-12">
                <label for="passwordConfirm">Confirmar contraseña</label>
                <input 
                  type="password"
                  id="passwordConfirm"
                  class="form-control"
                  v-model="$v.f.passwordConfirm.$model"
                >
                
                <div v-if="($v.f.passwordConfirm.$error && $v.f.passwordConfirm.$dirty) || ($v.f.passwordConfirm.$model != $v.f.password.$model)" class="alert alert-danger mt-1">
                  <div v-if="$v.f.passwordConfirm.required.$invalid">- Este campo es requerido.</div>
                  <div v-if="$v.f.passwordConfirm.$model != $v.f.password.$model">- Las contraseñas no coinciden.</div>
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
              <a class="reg-link" href="/login-customer">¿Ya tenés tu cuenta? Ingresá acá.</a>
            </div> 

          </form>

        </div>
      </div>
    </div>
  </section>

</template>

<script>
import { required, sameAs, not, minLength, maxLength, email } from '@vuelidate/validators'

  export default  {
    name: 'src-components-register-owner',
    props: [],
    components: {
      
    },
    mounted () {
      this.resetForm()
    },
    data () {
      return {
        f: this.resetForm(),
        url : 'https://5f93837c8742070016da699e.mockapi.io/grupo-maravilla/register/'
      }
    },
    validations: {
      f: {
        name: { 
          required,
          minLength: minLength(3),
          maxLength: maxLength(16)
        },
        lastname: { 
          required,
          minLength: minLength(3),
          maxLength: maxLength(16)
        },
        email: { 
          required,
          email
        },
        phone: {
          required
        },
        password: { 
          required,
          minLength: minLength(8),
          maxLength: maxLength(16)
        },
        passwordConfirm: {
          required,
          sameAs,
          not
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
                name: this.$v.f.name.$model,
                lastname: this.$v.f.lastname.$model,
                email: this.$v.f.email.$model,
                phone: this.$v.f.phone.$model,
                password: this.$v.f.password.$model,
                passwordConfirm: this.$v.f.passwordConfirm.$model
              }
              console.log(form)
              this.sendDataFormAxios(form)
                .then(() => {
                  this.$router.push('/register-success')
                })
                .catch(() => {
                  console.log("HTTP POST ERROR")
                })
              this.f = this.resetForm()
              this.$v.$reset()
            }
        },
        resetForm() {
      
            return {
               name: '',
               lastname: '',
               email: '',
               phone: '',
               password : '',
               passwordConfirm: ''
            }
        }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-register-owner {
    min-height: 600px;
    background: url(../assets/slide9.jpg);
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
