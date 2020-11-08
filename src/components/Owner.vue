<template>

  <section class="src-components-owner">
    <p class="text-center p-title">Sumá tu cancha!</p>
      
    <div class="container">
      <div class="row">
        <div class="col-md-2">
          <i class="fa fa-futbol-o" aria-hidden="true"></i>
        </div>
        <div class="col-md-6">
          <p class="p-info">Unite y aumentá tus reservas. Llegá a más clientes y asegurá las reservas. Aprovecha la prueba gratis de 7 días!</p>
        </div>
        <div class="col-md-4">
          <div class="col-md-12">
            <a class="btn-owner" href="#">Sumate</a>
          </div>
          <br>
          <div class="col-md-12">
            <a class="btn-owner" href="#">Acceder</a>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-owner',
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
 .src-components-owner {
    background-color: #fafafa !important;
    padding: 80px 0px 160px 0px;
  }
  .p-title{
    font-size: 25px;
    margin-bottom: 50px;
  }

  .p-info{
    font-size: 18px;
    font-weight: 400;
    text-align: justify;
  }


  .btn-owner{
    padding: 10px 50px;
    /* height: 42px; */
    background-color:rgba(235, 247, 234, 1) !important;
    border-color: #ebf7ea;
    color:#333 !important;

    border-radius: 25px;
    border: 1px solid #ebf7ea;
    background-color: transparent;
    font-size: 16px;
    font-weight: 400;
    
  }
  .btn-owner:hover{
      background-color: rgba(235,247,234, 0.8) !important;
      text-decoration: none !important;
  }


</style>
