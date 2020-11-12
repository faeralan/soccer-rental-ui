<template>

  <section class="src-components-create-court">
    <NavbarOwner />
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 col-xl-4 form-box mt-5 mb-5">
          
          <!-- REGISTER FORM -->
          <form novalidate autocomplete="off" class="p-3 mt-3 mb-3 text-left" @submit.prevent="send()">

            <h4 class="text-black text-left ml-3">Nueva cancha</h4>

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
                </div>
            </div>

            <div class="form-group col-12">
                <label for="players">Jugadores</label>
                <select id="players" class="form-control" v-model="$v.f.players.$model">
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="11">11</option>
                </select>
            </div>

            <div class="form-group col-12">
                <label for="hourprice">Precio/Hora</label>
                <input 
                  type="number"
                  id="hourprice"
                  class="form-control"
                  v-model="$v.f.hourprice.$model"
                >
                <div v-if="$v.f.hourprice.$error && $v.f.hourprice.$dirty" class="alert alert-danger mt-1">
                  <div v-if="$v.f.hourprice.required.$invalid">- Este campo es requerido</div>
                </div>
            </div>

            <div class="form-group col-12">
                <label for="address">Dirección</label>
                <input 
                  type="text"
                  id="address"
                  class="form-control"
                  v-model="$v.f.address.$model"
                >
                <div v-if="$v.f.address.$error && $v.f.address.$dirty" class="alert alert-danger mt-1">
                  <div v-if="$v.f.address.required.$invalid">- Este campo es requerido</div>
                </div>
            </div>

            <div class="form-group col-12">
                <label for="neighborhood">Barrio</label>
                <input 
                  type="text"
                  id="neighborhood"
                  class="form-control"
                  v-model="$v.f.neighborhood.$model"
                >
                <div v-if="$v.f.neighborhood.$error && $v.f.neighborhood.$dirty" class="alert alert-danger mt-1">
                  <div v-if="$v.f.neighborhood.required.$invalid">- Este campo es requerido</div>
                </div>
            </div>

            <div class="form-group col-12">
                <label for="description">Descripción</label>
                <input 
                  type="text"
                  id="description"
                  class="form-control"
                  v-model="$v.f.description.$model"
                >
                <div v-if="$v.f.description.$error && $v.f.description.$dirty" class="alert alert-danger mt-1">
                  <div v-if="$v.f.description.required.$invalid">- Este campo es requerido</div>
                </div>
            </div>
            <div class="form-group col-12">
              <label for="service">Servicios</label>
                
                <input 
                  type="text"
                  id="service"
                  class="form-control col-12"
                  v-model="service"
                >
                <div class="btn btn-success col-4 mt-1" @click="addService()">Agregar</div>               
                
                <div class="mt-1 rounded alert-info p-2" v-if="services.length > 0">
                  <p 
                  v-for="(service, i) in services"
                  :key="i">
                  ▪ {{ toUpperCase(service) }}
                  </p>               
                </div>          
                             
            </div>      
     
            <div class="form-group col-12">
                
                <label for="days">Días y horarios</label>
                <select v-model="$v.f.days.$model" id="days" class="form-control" >
                  <option value="monday">Lunes</option>
                  <option value="tuesday">Martes</option>
                  <option value="wednesday">Miércoles</option>
                  <option value="thursday">Jueves</option>
                  <option value="friday">Viernes</option>
                  <option value="saturday">Sábado</option>
                  <option value="sunday">Domingo</option>
                </select>

                <label for="openhours">Horario de apertura</label>
                <select id="openhours" class="form-control" v-model="$v.f.openhours.$model">
                  <option value="0">00:00</option>
                  <option value="1">01:00</option>
                  <option value="2">02:00</option>
                  <option value="3">03:00</option>
                  <option value="4">04:00</option>
                  <option value="5">05:00</option>
                  <option value="6">06:00</option>
                  <option value="7">07:00</option>
                  <option value="8">08:00</option>
                  <option value="9">09:00</option>
                  <option value="10">10:00</option>
                  <option value="11">11:00</option>
                  <option value="12">12:00</option>
                  <option value="13">13:00</option>
                  <option value="14">14:00</option>
                  <option value="15">15:00</option>
                  <option value="16">16:00</option>
                  <option value="17">17:00</option>
                  <option value="18">18:00</option>
                  <option value="19">19:00</option>
                  <option value="20">20:00</option>
                  <option value="21">21:00</option>
                  <option value="22">22:00</option>
                  <option value="23">23:00</option>
                </select>
                
                <label for="closehours">Horario de cierre</label>
                <select id="closehours" class="form-control" v-model="$v.f.closehours.$model">
                  <option value="0">00:00</option>
                  <option value="1">01:00</option>
                  <option value="2">02:00</option>
                  <option value="3">03:00</option>
                  <option value="4">04:00</option>
                  <option value="5">05:00</option>
                  <option value="6">06:00</option>
                  <option value="7">07:00</option>
                  <option value="8">08:00</option>
                  <option value="9">09:00</option>
                  <option value="10">10:00</option>
                  <option value="11">11:00</option>
                  <option value="12">12:00</option>
                  <option value="13">13:00</option>
                  <option value="14">14:00</option>
                  <option value="15">15:00</option>
                  <option value="16">16:00</option>
                  <option value="17">17:00</option>
                  <option value="18">18:00</option>
                  <option value="19">19:00</option>
                  <option value="20">20:00</option>
                  <option value="21">21:00</option>
                  <option value="22">22:00</option>
                  <option value="23">23:00</option>
                </select>
               
                <div class="btn btn-success col-4 mt-1" @click="addDayAndHours()">Agregar</div>


                <div class="mt-1 rounded alert-info p-2">
                  <p v-for="(item, i) in calendar" :key="i">
                  ▪ {{ toUpperCase(i) }}: {{ item.from }} hs - {{ item.to}} hs
                  </p>               
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

        </div>
      </div>
    </div>
  </section>

</template>

<script>
import { required, minLength, maxLength } from '@vuelidate/validators'
import NavbarOwner from './NavbarOwner.vue'
import mixins from '../mixins.js'
  export default  {
    name: 'src-components-create-court',
    props: [],
    mixins: [mixins],
    components: {
      NavbarOwner
    },
    mounted () {
      if(!this.$store.state.isLoggedOwner){
        this.$router.push('/login-owner')
      }
      this.resetForm()
    },
    data () {
      return {
        service: '',
        f: this.resetForm(),
        url : 'https://evening-hollows-89542.herokuapp.com/owners',
        error: false,
        services: [],
        calendar: {}       
      }
    },
    validations: {
      f: {
        name: { 
          required,
          minLength: minLength(3),
          maxLength: maxLength(16)
        },
        players: { 
          required
        },
        hourprice: { 
          required
        },
        address: {
          required
        },
        neighborhood: { 
          required
        },
        description: { 
          required
        },
        services: {
          
        },
        calendar: {
          required
        },
        days: {

        },
        openhours: {},
        closehours: {}     
      }
    },
    methods: {
      sendDataFormAxios(data) {
            
            this.axios.post(this.url, data, {'content-type': 'application/json'})
            .then(res => {
              if (res.data) {
                this.$router.push('/admin/index')
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
                name: this.$v.f.name.$model,
                players: this.$v.f.players.$model,
                hourprice: this.$v.f.hourprice.$model,
                address: this.$v.f.address.$model,
                neighborhood: this.$v.f.neighborhood.$model,
                description: this.$v.f.description.$model,
                services: this.services,
                calendar: {},
                reservations: []
              }
              this.sendDataFormAxios(form)
            }
        },
        resetForm() {
      
            return {
              name: '',
              players: '',
              hourprice: '',
              address: '',
              neighborhood: '',
              description: '',
              service: '',
              days: '',
              openhours: '',
              closehours: '',
              calendar: {

              },
              reservations: []
            }
        },
        addService(){
          if(this.service != ''){
            this.services.push(this.service)
            alert(this.service)
            this.service = ''
          }
        },
        addDayAndHours(){
          let day = this.$v.f.days.$model
          let openhours = this.$v.f.openhours.$model
          let closehours = this.$v.f.closehours.$model
          
          this.calendar[day] = {}
          this.calendar[day].from = parseInt(openhours)
          this.calendar[day].to = parseInt(closehours)

        
          console.log(this.calendar)
        }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-create-court {
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
