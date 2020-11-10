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
                  </div>

                  <div class="form-group">
                    <input class="btn btn-color btn-md" type="submit" value="Buscar" >
                  </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Spinner v-if="loading" />
    <Court :resultados="results"/>
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
          {'value':'08','hour':'08:00'},
          {'value':'09','hour':'09:00'},
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
          {'value':'22','hour':'22:00'}
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
        f: {
          date: new Date(Date.now()).toISOString().split('T')[0],
          players: '5',
          hour: '08',
          neighborhood: 'Agronomía'
        }
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
      async sendDatosForm() {
        
        try {
          const headers = {
            'Content-Type': 'application/json',
            'Authorization': `${sessionStorage.getItem('customer')}`
          }
          let data = await this.axios.get(this.url, {
            headers
          })
          this.loading = false;
          this.results = data.data;

        } catch (error) {
          console.error(error)
        }
      },
      enviar(){
        this.$v.$touch()
        if(!this.$v.$invalid) {
          let form = {
            players: this.$v.f.players.$model,
            neighborhood: this.$v.f.neighborhood.$model,
            date: 1604916000
          }
          this.loading = true;
          console.log(form)
          this.sendDatosForm(form)
        }
        
        
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
