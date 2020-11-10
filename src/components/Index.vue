<template>

  <section class="src-components-index">
    <Navbar/>
    <Carousel/>
    <Information/>
    <Owner/>
    <Footer/>
  </section>

</template>

<script>
  import Navbar from './Navbar.vue'
  import Carousel from './Carousel.vue'
  import Information from './Information.vue'
  import Owner from './Owner.vue'
  import Footer from './Footer.vue'

  export default  {
    name: 'src-components-index',
    props: [],
    mounted () {
    },
    components: {
      Navbar,
      Carousel,
      Information,
      Owner,
      Footer
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
  .src-components-index {

  }
</style>
