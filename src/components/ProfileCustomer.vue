<template>
  <section class="">
    <Navbar />
    <Carousel />
    <div class="container-fluid src-components-profile-customer">
      <div class="container src-components-profile-customer">
        <div class="row">
          <div class="col-12 col-sm-3">
            <div class="card shadow rounded" style="width: 100%">
              <ul class="list-group list-group-flush">
                <li class="list-group-item" @click="onReservas()" :class="{'active': reservas}">
                  Mis Reservas
                </li>
                <li class="list-group-item" @click="onEditar()" :class="{'active': editar}">
                  Editar Usuario
                </li>
              </ul>
            </div>
          </div>

          <div
            v-if="editar && !reservas"
            class="col-12 col-sm-9"
          >
            <div class="card shadow rounded" style="width: 100%">
              <EditCustomer />
            </div>
          </div>

          <div
            v-else-if="!editar && reservas"
            class="col-12 col-sm-9"
          >
            <div class="card shadow rounded" style="width: 100%">
              <ViewReservations />
            </div>
          </div>
        </div>
      </div>
    </div>

    <Search />
    <Footer />
  </section>
</template>

<script>
import Navbar from "./Navbar.vue";
import Carousel from "./Carousel.vue";
import Footer from "./Footer.vue";
import ViewReservations from "./ViewReservations.vue";
import EditCustomer from "./EditCustomer.vue";

export default {
  name: "src-components-profile-customer",
  props: [],
  components: {
    Navbar,
    Carousel,
    Footer,
    ViewReservations,
    EditCustomer,
  },
  mounted() {},
  data() {
    return {
      editar: false,
      reservas: false,
    };
  },
  methods: {
    onReservas() {
      this.reservas = true;
      this.editar = false;
    },
    onEditar() {
      this.reservas = false;
      this.editar = true;
    },
  },
  computed: {},
};
</script>

<style scoped lang="css">
.src-components-profile-customer {
  background-color: #fafafa !important;
  padding: 40px 0px;
}
.list-group-item.active {
    z-index: 2;
    color: #333;
    background-color: #ebf7ea;
    border-color: #ebf7ea;
}

</style>
