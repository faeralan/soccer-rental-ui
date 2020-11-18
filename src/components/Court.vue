<template>
  <section class="src-components-court">
    <div class="container">
      <div class="row" v-if="resultados.length > 0">
        <div
          class="col-12 d-flex justify-content-center p-0 jumbotron shadow rounded"
          v-for="(court, i) in resultados"
          :key="i"
        >
        
          <div class="col-2">
            <img v-if="!court.image" src="../assets/court_example.jpg" class="img-fluid" alt="" />
            <img v-else-if="court.image" :src="court.image" class="img-fluid" alt="" />
          </div>
          <div class="col-10">
            <div class="row">
              <div class="col-xs-12 col-sm-10">
                <h4 class="title_court">{{ toUpperCase(court.name) }}</h4>
              </div>
              <div class="col-xs-12 col-sm-2">
                <p class="price_court">
                  {{ formatearImporte(court.hourprice) }}
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <p class="card-subtitle mb-2 text-muted">{{ court.address }}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <p class="description_court">{{ court.description }}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12 offset-sm-9 col-sm-3 p-right">
                <a class="reservar" @click="redirect(court._id)">Ver más</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div v-else-if="resultados === false" class="row">
        <div class="col-12 d-flex justify-content-center  alert alert-danger">
          No se encontraron canchas disponibles!
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import mixins from "../mixins";
export default {
  name: "src-components-court",
  props: ["resultados","date"],
  mixins: [mixins],
  updated() {
    console.log(this.date)
  },

  data() {
    return {};
  },
  methods: {
    redirect(_id) {
      this.$router.push({
        name: "Details",
        params: {
          id: _id,
          date: this.date
        },
      });
    },
  },
  computed: {},
};
</script>

<style scoped lang="css">
.src-components-court {
  background-color: #fafafa !important;
  padding: 80px 0px;
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

.description_court {
  float: left;
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
p.right{
  float: right !important;
}
</style>
