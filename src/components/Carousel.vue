<template>

  <section class="src-components-carousel">
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        
        <div class="carousel-item" v-for="(img, i) in images" :key="i" :class="{'active': i == 0}">
          
          <img class="d-block w-100" :src="require('@/'+img.ruta)" alt="Image">
        </div>
       
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-carousel',
    props: [],
    mounted () {

    },
    data () {
      return {
        images: [
          { 'ruta' : 'assets/slide1.jpg'},
          { 'ruta' : 'assets/slide1.jpg'},
          { 'ruta' : 'assets/slide1.jpg'}
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
  .src-components-carousel {

  }
</style>
