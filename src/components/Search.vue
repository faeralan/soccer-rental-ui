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
                    
                    <select name="barrio" id="barrio" class="custom-select custom-select-sm">
                      <option v-for="(barrio,i) in barrios" :key="i" value="{{barrio.name}}">{{barrio.name}}</option>
                    </select>
                  </div>

                  <div class="form-group">
                    
                    <select name="cant" id="cant" class="custom-select custom-select-sm">
                      <option v-for="(cant,i) in cantidad" :key="i" value="{{cant.name}}">{{cant.name}}</option>
                    </select>
                  </div>
                  
                  
                  <div class="form-group">

                    <div class="row">
                      <div class="col">
                        <input class="form-control form-control-sm" type="date" v-bind:value="today" v-bind:min="today" v-bind:max="maxDate" id="example-date-input">
                      </div>

                      <div class="col">
                        <select name="horario" id="horario" class="custom-select custom-select-sm">
                              <option v-for="(hs,i) in turnos" :key="i" value="{{hs.value}}">{{hs.hour}}</option>
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
    <Court />
  </section>

</template>

<script>
  import Court from './Court.vue'

  export default  {
    name: 'src-components-search',
    props: [],
    components: {
      Court
    },
    mounted () {
      this.setDateMax()
    },
    data () {
      return {
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
          {'name':'Fútbol 5'},
          {'name':'Fútbol 6'},
          {'name':'Fútbol 7'},
          {'name':'Fútbol 8'},
          {'name':'Fútbol 9'},
          {'name':'Fútbol 10'},
          {'name':'Fútbol 11'}
        ],        
        barrios: [
          {'name':'Agronomía'},
          {'name':'Almagro'},
          {'name':'Balvanera'},
          {'name':'Barracas'},
          {'name':'Belgrano'},
          {'name':'Boedo'},
          {'name':'Caballito'},
          {'name':'Chacarita'},
          {'name':'Coghlan'},
          {'name':'Colegiales'},
          {'name':'Constitución'},
          {'name':'Flores'},
          {'name':'Floresta'},
          {'name':'La Boca'},
          {'name':'La Paternal'},
          {'name':'Liniers'},
          {'name':'Mataderos'},
          {'name':'Monte Castro'},
          {'name':'Montserrat'},
          {'name':'Nueva Pompeya'},
          {'name':'Nuñez'},
          {'name':'Palermo'},
          {'name':'Parque Avellaneda'},
          {'name':'Parque Chacabuco'},
          {'name':'Parque Chas'},
          {'name':'Parque Patricios'},
          {'name':'Puerto Madero'},
          {'name':'Recoleta'},
          {'name':'Retiro'},
          {'name':'Saavedra'},
          {'name':'San Cristóbal'},
          {'name':'San Nicolás'},
          {'name':'San Telmo'},
          {'name':'Versalles'},
          {'name':'Villa Crespo'},
          {'name':'Villa Devoto'},
          {'name':'Villa General Mitre'},
          {'name':'Villa Lugano'},
          {'name':'Villa Luro'},
          {'name':'Villa Ortúzar'},
          {'name':'Villa Pueyrredón'},
          {'name':'Villa Real'},
          {'name':'Villa Riachuelo'},
          {'name':'Villa Santa Rita'},
          {'name':'Villa Soldati'},
          {'name':'Villa Urquiza'},
          {'name':'Villa del Parque'},
          {'name':'Vélez Sarsfield'}
        ]
      }
    },
    methods: {
      setDateMax(){
        var d = new Date();
        d.setDate(d.getDate() + 7);

        this.maxDate = new Date(d).toISOString().split('T')[0]        
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
    font-weight: 400;
    
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
