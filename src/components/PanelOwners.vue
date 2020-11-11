<template>

  <section class="src-components-panel-owners">
     <NavbarOwner />
     <div class="container">
       <div class="row">
         <div class="col-12">
           <div class="btn btn-success float-left col-2 mt-5 mb-5">Nueva</div>
         </div>

          <Spinner v-if="loading" />
          <Court :resultados="results"/>
          

        </div>
     </div>
  </section>

</template>

<script>
  import NavbarOwner from './NavbarOwner.vue'
  import Spinner from './Spinner.vue'
  import Court from './Court.vue'
  import mixins from "../mixins.js";
  export default  {
    name: 'src-components-panel-owners',
    props: ["id"],
    mixins: [mixins],
    components: {
      NavbarOwner,
      Spinner,
      Court
    },
    mounted () {
      if(!this.$store.state.isLoggedOwner){
        this.$router.push('/login-owner')
      }
      this.getDatos();
    },
    data () {
      return {
        url: "https://evening-hollows-89542.herokuapp.com/courts",
        loading: true,
        results: []
      }
    },
    methods: {
      async getDatos() {
        try {
          const form = {
            players: 11,
            neighborhood: 'Almagro',
            date: 1605092400
          }
          let data = await this.axios.get(this.url, { headers: {
            'Authorization': `Bearer ${this.$store.state.isLoggedOwner}`,
            'Content-Type': 'application/json'
          }, params: form });
          this.loading = false;
          this.results = data.data;
        } catch (error) {
          console.error(error);
        }
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-panel-owners {

  }
</style>
