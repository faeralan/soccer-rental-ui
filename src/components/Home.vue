<template>

  <section class="src-components-home">
    <Navbar/>
    <Carousel/>
    <Search/>
    <Footer/>

    <div class="container">
      <div class="row">
        <div class="d-flex justify-content-center">
          
        </div>
      </div>
    </div>
  </section>

</template>

<script>
  import Navbar from './Navbar.vue'
  import Carousel from './Carousel.vue'
  import Search from './Search.vue'
  import Footer from './Footer.vue'


  export default  {
    name: 'src-components-home',
    props: [],
    components: {
    Navbar,
    Carousel,
    Search,
    Footer
    },
    mounted () {
      if(!this.$store.state.isLoggedCustomer){
        this.$router.push('/')
      }
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
  .p-title{
    font-size: 25px;
    margin-bottom: 50px;
  }

</style>
