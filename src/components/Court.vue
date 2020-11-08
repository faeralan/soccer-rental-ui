<template>

  <section class="src-components-court">
    <div class="container">

      <div class="row" v-if="resultados.length > 0">
        <div class="col-12 d-flex justify-content-center p-0 jumbotron shadow rounded" v-for="(court, i) in resultados" :key="i">
          <div class="col-2">
            <img :src="court.image" class="img-fluid" alt="">
          </div>
          <div class="col-10">
            <div class="row">
              <h4 class="title_court">{{toUpperCase(court.title)}}</h4>
            </div>
            <div class="row">
              <p class="card-subtitle mb-2 text-muted">{{court.address}}</p>
            </div>
            <div class="row">
              <p class="description_court">{{court.description}}</p>
            </div>
            <div class="row">
              <p class="price_court">{{formatearImporte(court.hourprice)}}</p>
            </div>
            
          </div>
        </div>
      </div>

      
    </div>
  </section>

</template>

<script>
  
  import mixins from '../mixins'
  export default  {
    name: 'src-components-court',
    props: ['resultados'],
    mixins: [mixins],
    updated () {
      
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
  .src-components-court {
    background-color: #fafafa !important;
    padding: 80px 0px ;
  }
  .jumbotron{
    padding: 20px 0px !important;
    background-color: #FFF !important;
    transition: 0.3s;
  }
  .jumbotron:hover{
    background-color: #ebf7ea !important;
  }
  .title_court{
    float: left;
  }
  .price_court{
    font-size: 20px;
  }
</style>
