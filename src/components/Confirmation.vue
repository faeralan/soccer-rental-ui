<template>
  
  <section class="">
    <Navbar />
    <Carousel />
    <div class="container-fluid src-components-confirmation">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3>Su reserva ha sido confirmada!</h3>
          <h4>Que disfrutes!</h4>
        </div>
      </div>
    </div>
    </div>
    <Footer/>
  </section>
  
</template>

<script>
  import Navbar from "./Navbar.vue";
  import Carousel from "./Carousel.vue";
  import Footer from "./Footer.vue";
  
  export default  {
    name: 'src-components-confirmation',
    props: [],
    components: {
      Navbar,
      Carousel,
      Footer
    },
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
  .src-components-confirmation {
    background-color: #fafafa !important;
    padding: 80px 0px;
  }
</style>
