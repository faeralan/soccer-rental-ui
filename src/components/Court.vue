<template>

  <section class="src-components-court">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="d-flex justify-content-center">
          <moon-loader :loading="loading" :color="color" :size="size"></moon-loader>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
  import MoonLoader from 'vue-spinner/src/MoonLoader.vue'

  export default  {
    name: 'src-components-court',
    props: [],
    mounted () {

    },
    components: {
      MoonLoader
    },
    data () {
      return {
        loading: true
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
 
</style>
