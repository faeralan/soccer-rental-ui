<template>

  <section class="">
    <NavbarOwner/>
    <div class="container-fluid src-components-edit-owner">
      <div class="container">
        <div class="col-12">
          <form novalidate autocomplete="off" class="p-3 mt-3 mb-3 text-left" @submit.prevent="send()">

                <h4 class="text-black text-left ml-3">Editar Usuario</h4>

                <hr>
                <div v-if="error" class="alert alert-danger">
                  Los datos ingresados son incorrectos.
                </div>
                <div class="form-group col-12">
                    <label for="name">Nombre</label>
                    <input 
                      type="text"
                      id="name"
                      class="form-control"
                      v-model="$v.f.name.$model"
                    >
                    <div v-if="$v.f.name.$error && $v.f.name.$dirty" class="alert alert-danger mt-1">
                      <div v-if="$v.f.name.required.$invalid">- Este campo es requerido</div>
                      <div v-if="$v.f.name.minLength.$invalid">- Este campo debe tener al menos {{$v.f.name.minLength.$params.min}} caracteres</div>
                      <div v-if="$v.f.name.maxLength.$invalid">- Este campo debe tener máximo {{$v.f.name.maxLength.$params.max}} caracteres</div>
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
                      <div v-if="$v.f.lastname.required.$invalid">- Este campo es requerido</div>
                      <div v-if="$v.f.lastname.minLength.$invalid">- Este campo debe tener al menos {{$v.f.lastname.minLength.$params.min}} caracteres</div>
                      <div v-if="$v.f.lastname.maxLength.$invalid">- Este campo debe tener máximo {{$v.f.lastname.maxLength.$params.max}} caracteres</div>
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
                      <div v-if="$v.f.email.required.$invalid">- Este campo es requerido</div>
                      <div v-if="$v.f.email.email.$invalid">- Debe ser un email válido</div>
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
                      <div v-if="$v.f.phone.required.$invalid">- Este campo es requerido</div>
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
                      
                      <div v-if="$v.f.password.minLength.$invalid">- Este campo debe tener al menos {{$v.f.password.minLength.$params.min}} caracteres</div>
                      <div v-if="$v.f.password.maxLength.$invalid">- Este campo debe tener máximo {{$v.f.password.maxLength.$params.max}} caracteres</div>
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
                    
                    <div v-if="($v.f.passwordConfirm.$error && $v.f.passwordConfirm.$dirty) || ($v.f.passwordConfirm.$model != $v.f.password.$model && $v.f.passwordConfirm.$dirty)" class="alert alert-danger mt-1">
                      
                      <div v-if="$v.f.passwordConfirm.$model != $v.f.password.$model">- Las contraseñas no coinciden.</div>
                    </div>

                </div>

                <div class="form-group col-4">
                      <input 
                          type="submit"
                          :disabled="false"
                          class="btn btn-success mt-4"
                          value="Guardar"
                      >             
                </div>

                <div v-if="modif" class="alert alert-success mt-1">
                  - Se actualizaron los datos con éxito.
                </div>
                

              </form>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
  import { required, minLength, maxLength, email } from '@vuelidate/validators'
  import NavbarOwner from './NavbarOwner.vue'
  export default  {
    name: 'src-components-edit-owner',
    props: [],
    components: {
      NavbarOwner
    },
    created () {
      this.getDatos();
    },
    mounted(){
      if (!this.$store.state.isLoggedOwner) {
            this.$router.push('/login-owner')
        }
    },
    data () {
      return {
        f: {
            name: '',
            lastname: '',
            email: '',
            phone: '',
            password : '',
            passwordConfirm: ''
        },
        url : 'https://evening-hollows-89542.herokuapp.com/owners/',
        error: false,
        modif: false,
        data: []
      }
    },
    validations: {
      f: {
        id: {

        },
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
          
          minLength: minLength(8),
          maxLength: maxLength(16)
        },
        passwordConfirm: {
          
        }
      }
    },
    methods: {
      async getDatos() {
      try {
        let data = await this.axios.get(this.url, { headers: {
              'Authorization' : `Bearer ${this.$store.state.isLoggedOwner}`,
              'Content-Type': 'application/json'
            }
          });
        // this.loading = false;
        const mydata = Object.assign({}, data);
        this.data = mydata.data;

        this.f = {
               id: mydata.data._id, 
               name: mydata.data.name,
               lastname: mydata.data.lastname,
               email: mydata.data.email,
               phone: mydata.data.phone,
               password : '',
               passwordConfirm: ''
            }

        
      } catch (error) {
        console.error(error);
        this.modif = false;
      }
      
    },
      sendDataFormAxios(data) {  
            this.modif = false
            this.axios.put(this.url+ this.f.id, data, { headers: {
              'Authorization' : `Bearer ${this.$store.state.isLoggedOwner}`,
              'Content-Type': 'application/json'
            }
          })
            .then(res => {
              if (res.data) {
                this.modif = true;
              }
            })
            .catch(error => {
              console.log(error)
              this.error = true             
            })
        },
        send() {
            this.$v.$touch()
            this.modif = false;
            if(!this.$v.$invalid && (this.$v.f.passwordConfirm.$model == this.$v.f.password.$model)) {
              let form = {
                name: this.$v.f.name.$model,
                lastname: this.$v.f.lastname.$model,
                email: this.$v.f.email.$model,
                phone: this.$v.f.phone.$model,
                password: this.$v.f.password.$model
              }
              console.log(form)
              this.sendDataFormAxios(form)              
            }
        }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-edit-owner {
    background-color: #fafafa;
    padding: 50px 0px;
  }
</style>
