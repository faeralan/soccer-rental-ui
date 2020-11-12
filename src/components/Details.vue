<template>
  <section class="">
    <Navbar />
    <Carousel />
    <div class="container-fluid src-components-details">
      <div class="container">
        <div class="row p-0">
          <Spinner v-if="loading" />

          <div class="col col-sm-3">
            <img v-if="!court.image" src="../assets/court_example.jpg" class="img-fluid" alt="" />
            <img v-else-if="court.image" :src="court.image" class="img-fluid" alt="" />
          </div>
          <div class="col col-sm-9">
            <div class="col-12">
              <h4>{{ court.name }}</h4>
            </div>
            <hr />
            <div class="row">
              <p class="card-subtitle text-muted">{{ court.address }}</p>
            </div>

            <div class="row">
              <p class="card-subtitle">{{ court.description }}</p>
            </div>

            <div class="row">
              <p class="card-subtitle">
                <strong>Precio por hora: </strong
                >{{ formatearImporte(court.hourprice) }}
              </p>
            </div>

            <div class="row row_services">
              <div class="col-12 p-0">
                <h5>Servicios:</h5>
              </div>
              <div class="col">
                <ul class="list_services">
                  <li v-for="(item, i) in court.services" :key="i">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-12">
            <div class="col-12 d-flex justify-content-center">
              <div class="d-flex justify-content-center">
                <a class="reservar" @click="reservar()">Reservar</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </section>
</template>

<script>
import Navbar from "./Navbar.vue";
import Carousel from "./Carousel.vue";
import Spinner from "./Spinner.vue";
import Footer from "./Footer.vue";
import mixins from "../mixins";
export default {
  name: "src-components-details",
  props: ["id","date"],
  mixins: [mixins],
  components: {
    Navbar,
    Carousel,
    Spinner,
    Footer,
  },
  mounted() {
    if(!this.$store.state.isLoggedCustomer){
      this.$router.push('/')
    }
    this.getDatos();
  },
  data() {
    return {
      url:"https://evening-hollows-89542.herokuapp.com/courts/"+this.id,
      url_reservation:"https://evening-hollows-89542.herokuapp.com/reservations",
      court: [],
      loading: true,
    };
  },
  methods: {
    async getDatos() {
      try {
        let data = await this.axios.get(this.url, { headers: {
              'Authorization' : `Bearer ${this.$store.state.isLoggedCustomer}`,
              'Content-Type': 'application/json'
            }
          });
        this.loading = false;
        const mycourt = Object.assign({}, data);
        console.log(mycourt)
        this.court = data.data;
      } catch (error) {
        console.error(error);
      }
    },
    async reservar() {
      
      try {
          const data = {
            'court': this.id,
            'date': this.date
          }
          
          let res = await this.axios.post(this.url_reservation, data, { headers: {
              'Authorization' : `Bearer ${this.$store.state.isLoggedCustomer}`,
              'Content-Type': 'application/json'
            }})
          console.log(res.data)
          
        }
        catch(error) {
          console.log('HTTP POST ERROR', error)
        }
      this.$router.push('/confirmation')
    },
  },
  computed: {},
};
</script>

<style scoped lang="css">
.src-components-details {
  background-color: #fafafa !important;
  padding: 80px 0px;
}
h4,
h5 {
  color: rgba(154, 214, 149, 1) !important;
}
h5 {
  float: left;
}
.p-0 {
  padding: 0px !important;
}

img {
  margin-top: 80px;
}

.card-subtitle {
  float: left;
  margin-top: 15px;
}
.list_services {
  padding-left: 0px !important;
  float: left;
}
.list_services li {
  text-align: justify;
}

.row_services {
  margin-top: 30px !important;
}

.reservar {
  padding: 10px 50px;
  background-color: rgba(154, 214, 149, 1) !important;
  border-color: #ebf7ea;
  color: #333 !important;

  border-radius: 25px;
  border: 1px solid #ebf7ea;
  background-color: transparent;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
}

.reservar:hover {
  text-decoration: none;
  cursor: context-menu;
}
</style>
