<template>

  <section class="src-components-search">
    <p class="p-title">Reservá tu cancha!</p>

    <div class="container">
      <div class="row  d-flex justify-content-center">
        <div class="col-md-5">
          <div class="card shadow rounded">
            <div class="card-body">
              <form novalidate autocomplete="off" @submit.prevent="enviar()">
                  <div class="form-group">
                    
                    <select v-model="$v.f.neighborhood.$model" name="barrio" id="barrio" class="custom-select custom-select-sm">
                      <option v-for="(barrio,i) in barrios" :key="i" :value="barrio.name">{{barrio.name}}</option>
                    </select>
                  </div>

                  <div class="form-group">
                    
                    <select v-model="$v.f.players.$model" name="cant" id="cant" class="custom-select custom-select-sm">
                      <option v-for="(cant,i) in cantidad" :key="i" :value="cant.value">{{cant.name}}</option>
                    </select>
                  </div>
                  
                  
                  <div class="form-group">

                    <div class="row">
                      <div class="col">
                        <input v-model="$v.f.date.$model" class="form-control form-control-sm" type="date" v-bind:min="today" v-bind:max="maxDate" id="example-date-input">
                      </div>

                      <div class="col">
                        <select v-model="$v.f.hour.$model" name="horario" id="horario" class="custom-select custom-select-sm">
                              <option v-for="(hs,i) in turnos" :key="i" :value="hs.value">{{hs.hour}}</option>
                          </select>
                      </div>
                    </div>

                    <div v-if="($v.f.date.$error && $v.f.date.$dirty) || error" class="alert alert-danger mt-1">
                      <div v-if="$v.f.date.required.$invalid">Por favor complete todos los campos</div>
                      <div v-else-if="error">La fecha ingresada debe ser mayor a la actual</div>
                    </div>
                  </div>

                  <div class="form-group">
                    <input class="btn btn-color btn-md" type="submit" value="Buscar" :disabled="$v.f.$invalid">
                  </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Spinner v-if="loading" />
    <Court :resultados="results" :date="reserv_date"/>
  </section>

</template>

<script>
  import Court from './Court.vue'
  import Spinner from './Spinner.vue'
  import { required } from '@vuelidate/validators'
  

  export default  {
    name: 'src-components-search',
    props: [],
    components: {
      Court,
      Spinner
    },
    mounted () {
      this.setDateMax()
    },
    data () {
      return {
        url : 'https://evening-hollows-89542.herokuapp.com/courts',
        loading: false,
        today: new Date(Date.now()).toISOString().split('T')[0],
        maxDate: this.today,
        turnos: [
          {'value':'0','hour':'00:00'},
          {'value':'1','hour':'01:00'},
          {'value':'2','hour':'02:00'},
          {'value':'3','hour':'03:00'},
          {'value':'4','hour':'04:00'},
          {'value':'5','hour':'05:00'},
          {'value':'6','hour':'06:00'},
          {'value':'7','hour':'07:00'},
          {'value':'8','hour':'08:00'},
          {'value':'9','hour':'09:00'},
          {'value':'10','hour':'10:00'},
          {'value':'11','hour':'11:00'},
          {'value':'12','hour':'12:00'},
          {'value':'13','hour':'13:00'},
          {'value':'14','hour':'14:00'},
          {'value':'15','hour':'15:00'},
          {'value':'16','hour':'16:00'},
          {'value':'17','hour':'17:00'},
          {'value':'18','hour':'18:00'},
          {'value':'19','hour':'19:00'},
          {'value':'20','hour':'20:00'},
          {'value':'21','hour':'21:00'},
          {'value':'22','hour':'22:00'},
          {'value':'23','hour':'23:00'}
        ],
        cantidad: [
          {'value':'5','name':'Fútbol 5'},
          {'value':'6','name':'Fútbol 6'},
          {'value':'7','name':'Fútbol 7'},
          {'value':'8','name':'Fútbol 8'},
          {'value':'9','name':'Fútbol 9'},
          {'value':'10','name':'Fútbol 10'},
          {'value':'11','name':'Fútbol 11'}
        ],        
        barrios: [
          {'value':'Agronomía','name':'Agronomía'},
          {'value':'Almagro','name':'Almagro'},
          {'value':'Balvanera','name':'Balvanera'},
          {'value':'Barracas','name':'Barracas'},
          {'value':'Belgrano','name':'Belgrano'},
          {'value':'Boedo','name':'Boedo'},
          {'value':'Caballito','name':'Caballito'},
          {'value':'Chacarita','name':'Chacarita'},
          {'value':'Coghlan','name':'Coghlan'},
          {'value':'Colegiales','name':'Colegiales'},
          {'value':'Constitución','name':'Constitución'},
          {'value':'Flores','name':'Flores'},
          {'value':'Floresta','name':'Floresta'},
          {'value':'La Boca','name':'La Boca'},
          {'value':'La Paternal','name':'La Paternal'},
          {'value':'Liniers','name':'Liniers'},
          {'value':'Mataderos','name':'Mataderos'},
          {'value':'Monte Castro','name':'Monte Castro'},
          {'value':'Montserrat','name':'Montserrat'},
          {'value':'Nueva Pompeya','name':'Nueva Pompeya'},
          {'value':'Nuñez','name':'Nuñez'},
          {'value':'Palermo','name':'Palermo'},
          {'value':'Parque Avellaneda','name':'Parque Avellaneda'},
          {'value':'Parque Chacabuco','name':'Parque Chacabuco'},
          {'value':'Parque Chas','name':'Parque Chas'},
          {'value':'Parque Patricios','name':'Parque Patricios'},
          {'value':'Puerto Madero','name':'Puerto Madero'},
          {'value':'Recoleta','name':'Recoleta'},
          {'value':'Retiro','name':'Retiro'},
          {'value':'Saavedra','name':'Saavedra'},
          {'value':'San Cristóbal','name':'San Cristóbal'},
          {'value':'San Nicolás','name':'San Nicolás'},
          {'value':'San Telmo','name':'San Telmo'},
          {'value':'Versalles','name':'Versalles'},
          {'value':'Villa Crespo','name':'Villa Crespo'},
          {'value':'Villa Devoto','name':'Villa Devoto'},
          {'value':'Villa General Mitre','name':'Villa General Mitre'},
          {'value':'Villa Lugano','name':'Villa Lugano'},
          {'value':'Villa Luro','name':'Villa Luro'},
          {'value':'Villa Ortúzar','name':'Villa Ortúzar'},
          {'value':'Villa Pueyrredón','name':'Villa Pueyrredón'},
          {'value':'Villa Real','name':'Villa Real'},
          {'value':'Villa Riachuelo','name':'Villa Riachuelo'},
          {'value':'Villa Santa Rita','name':'Villa Santa Rita'},
          {'value':'Villa Soldati','name':'Villa Soldati'},
          {'value':'Villa Urquiza','name':'Villa Urquiza'},
          {'value':'Villa del Parque','name':'Villa del Parque'},
          {'value':'Vélez Sarsfield','name':'Vélez Sarsfield'}
        ],
        results: [],
        reserv_date: null,
        f: {
          date: new Date(Date.now()).toISOString().split('T')[0],
          // date: null,
          players: '5',
          hour: new Date().getHours()+1,
          neighborhood: 'Agronomía'
        },
        error: false
      }
    },
    validations: {
      f: {
        players: { 
          required
        },
        neighborhood: { 
          required
        },
        date: { 
          required
        },
        hour: { 
          required
        }
      }
    },
    methods: {
      setDateMax(){
        var d = new Date();
        d.setDate(d.getDate() + 7);

        this.maxDate = new Date(d).toISOString().split('T')[0]        
      },
      async sendDatosForm(form) {
        try {
          let data = await this.axios.get(this.url, { headers: {
              'Authorization' : `Bearer ${this.$store.state.isLoggedCustomer}`,
              'Content-Type': 'application/json'
            }, params: form
          });
          this.loading = false;
          // console.log(data);
          const courts = Object.assign({}, data);
          if(courts.data.length > 0){
            this.results = courts.data;
          }else{
            this.results = false
          }
          // console.log(this.results)
        } catch (error) {
          console.error(error)
        }
      },
      enviar(){
        this.error = false;
        this.$v.$touch()
        let timestamp = this.convertToTimestamp(this.$v.f.date.$model,this.$v.f.hour.$model)
        
        let date = new Date();
        let day=date.getDate();
        let month=date.getMonth();
        let year=date.getFullYear();
        let hour = date.getHours();

        let actual=year+"-"+(month+1)+"-"+day;
        // console.log(hour);
        

        if(actual == this.$v.f.date.$model && this.$v.f.hour.$model <= hour){
          this.error = true;
        }else if(!this.$v.$invalid) {
          this.reserv_date = timestamp;
          let form = {
            players: this.$v.f.players.$model,
            neighborhood: this.$v.f.neighborhood.$model,
            date: timestamp
          }
          this.loading = true;
          this.sendDatosForm(form);
        }
        
        
      },
      convertToTimestamp(date, hour){
        let aux = date.split("-");
        // console.log(aux);
        let timestamp = this.toTimestamp(aux[0],aux[1],aux[2],hour)
        // let localTime = timestamp + 3*60*60;
        // console.log(timestamp);
        // console.log(localTime);

        return timestamp

      },
      toTimestamp(year,month,day,hour){
        let datum = new Date(Date.UTC(year,month-1,day,hour));
        return datum.getTime()/1000;
      }

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-search {
    background-color: #fafafa !important;
    padding: 80px 0px ;
  }
  .p-title{
    font-size: 26px;
  }
  label{
    float: left;
  }

   .btn-color{
    margin-top: 20px;
    padding: 10px 50px;
    /* height: 42px; */
    background-color:rgba(154, 214, 149, 1) !important;
    border-color: #ebf7ea;
    color:#333 !important;

    border-radius: 25px;
    border: 1px solid #ebf7ea;
    background-color: transparent;
    font-size: 16px;
    font-weight: 600;
    
  }
  .btn-color:hover{
      background-color: rgba(154, 214, 149, 0.8) !important;
      text-decoration: none !important;
  }
  .p-l-0{
    padding-left: 0px !important;
  }
  .p-r-0{
    padding-right: 0px !important;
  }
  .inline{
    display: inline-block !important;
  }
</style>
