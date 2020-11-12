<template>

  <section>
    <NavbarOwner/>
    <div class="container-fluid src-components-owner-reservation">
    <div class="container">
      <div class="col-12" v-if="resultados.length > 0">
        <div
          class="col-12 d-flex justify-content-center p-0 jumbotron shadow rounded"
          v-for="(res, i) in resultados"
          :key="i"
        >
          <div class="col-2">
            <img
              v-if="!res.image"
              src="../assets/court_example.jpg"
              class="img-fluid"
              alt=""
            />
            <img
              v-else-if="res.image"
              :src="res.image"
              class="img-fluid"
              alt=""
            />
          </div>
          <div class="col-10">
            <div class="row">
              <div class="col-xs-12 col-sm-10">
                <h4 class="title_court">{{ toUpperCase(res.name) }}</h4>
              </div>
              <div class="col-xs-12 col-sm-2">
                <p class="price_court">
                  {{ formatearImporte(res.hourprice) }}
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <p class="card-subtitle mb-2 text-muted">{{ res.address }}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <p class="card-subtitle mb-2 text-muted">{{ formatearFecha(res.date) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="resultados.length == 0" class="col-12">
        <div class="col-12 d-flex justify-content-center alert alert-danger">
          No hay ninguna reserva!
        </div>
      </div>
    </div>
    </div>
    <Footer/>
  </section>

</template>

<script>
  import NavbarOwner from './NavbarOwner.vue'
  import Footer from './Footer.vue'
  import mixins from "../mixins.js";
  export default  {
    name: 'src-components-owner-reservation',
    props: [],
    mixins: [mixins],
    components: {
      NavbarOwner,
      Footer
    },
    mounted(){
      if (!this.$store.state.isLoggedOwner) {
          this.$router.push('/login-owner')
      }
      this.getReservas();
    },
    data() {
      return {
        url: "https://evening-hollows-89542.herokuapp.com/courts/owner",
        resultados: [],
        loading: false
      };
    },
    methods: {
      async getReservas() {
        try {
          let data = await this.axios.get(this.url, {
                    headers: {
                        'Authorization': `Bearer ${this.$store.state.isLoggedOwner}`,
                        'Content-Type': 'application/json'
                    }
                });
          this.loading = false;
          
          const reservas = Object.assign({}, data);
          let obj;
          let rObj;
          if (reservas.data.length > 0) {

            for(obj of reservas.data){
              
              for(rObj of obj.reservations){
                let reserv = {
                  name: obj.name,
                  address: obj.address,
                  hourprice: obj.hourprice,
                  date: rObj.date,
                };
                
                this.resultados.push(reserv)
              }
            }

          } else {
            this.resultados = false;
          }

          // console.log(this.resultados);
        } catch (error) {
          console.error(error);
        }
      },
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-owner-reservation {
    background-color: #fafafa;
    padding: 50px 0px;
  }

  .jumbotron {
  padding: 20px 0px !important;
  background-color: #fff !important;
  transition: 0.3s;
}
.jumbotron:hover {
  background-color: #eee !important;
}

.title_court {
  float: left;
}
.price_court {
  font-size: 25px;
  font-weight: 500;
}
.card-subtitle {
  float: left;
}
</style>
