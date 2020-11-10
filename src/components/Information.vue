<template>

  <section class="src-components-information">
    <p class="text-center p-title">Alquilá tu cancha!</p>
      
    <div class="container">
      <div class="row">
        <div class="col-md-4 space-box">
          <div class="card shadow rounded">
            <div class="card-header">
              Buscá
            </div>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <p>Conocé la disponibilidad de tus canchas preferidas, y encontrá todas las posibilidades de acuerdo a tus preferencias</p>
              </blockquote>
            </div>
          </div>
        </div>

        <div class="col-md-4 space-box">
          <div class="card shadow rounded">
            <div class="card-header">
              Reservá
            </div>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <p>Compará precios, horarios y servicios. Sacate todas las dudas y hacé la reserva en el momento sin pagar nada por adelantado!</p>
              </blockquote>
            </div>
          </div>
        </div>

        <div class="col-md-4 space-box">
          <div class="card shadow rounded">
            <div class="card-header">
              Jugá
            </div>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <p>Acercate con tus amigos en el horario reservado y disfrutá de la cancha! <br> En caso de algún inconvenite, podrás contactarte con el club</p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </section>

</template>

<script>

  export default  {
    name: 'src-components-information',
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
  .src-components-information {
    background-color: #fafafa !important;
    padding: 40px 0px ;
  }
  .p-title{
    font-size: 25px;
    margin-bottom: 50px;
  }

  .card-header{
    background-color: #ebf7ea;
    font-size: 20px !important;
    font-weight: 700;
  }

  .blockquote p{
    font-size: 16px !important;
    text-align: left;
  }

  .space-box{
    padding-bottom: 20px;
  }
</style>
