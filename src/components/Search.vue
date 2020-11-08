<template>

  <section class="src-components-search">
    <p class="p-title">Reservá tu cancha!</p>

    <div class="container">
      <div class="row  d-flex justify-content-center">
        <div class="col-md-6">
          <div class="card shadow rounded">
            <div class="card-body">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
  
  export default  {
    name: 'src-components-search',
    props: [],
    mounted () {

    },
    data () {
      return {
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
</style>
