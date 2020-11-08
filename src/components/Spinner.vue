<template>

  <section class="src-components-spinner">
    <div class="row d-flex justify-content-center">
      <div class="d-flex justify-content-center">
        <moon-loader :loading="loading" :color="color" :size="size"></moon-loader>
      </div>
    </div>
  </section>

</template>

<script>
  import MoonLoader from 'vue-spinner/src/MoonLoader.vue'
  export default  {
    name: 'src-components-spinner',
    props: [],
    components: {
      MoonLoader
    },
    mounted () {

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
  .src-components-spinner {
    background-color: #fafafa !important;
    padding-top: 30px;
  }
</style>
