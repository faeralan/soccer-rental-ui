<template>
<section class="src-components-panel-owners">
    <NavbarOwner />

    <div class="container">
        <div class="row">
            <div class="col-12">
                <a class="btn btn-success col-4 mt-5 mb-5" href="/admin/create-court">Nueva cancha</a>
            </div>
        </div>
    </div>

    <div class="container">
        <Spinner v-if="loading" />
        <div class="row" v-if="results.length > 0">
            <div class="col-12 d-flex justify-content-center p-0 jumbotron shadow rounded" v-for="(court, i) in results" :key="i">

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
                            <a class="btn btn-info col-5" @click="updateCourt(court._id)">Editar</a>
                            <a class="btn btn-danger col-6 ml-1" @click="deleteCourt(court._id)">Eliminar</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div v-else-if="results === false" class="row">
            <div class="col-12 d-flex justify-content-center  alert alert-danger">
                No se encontraron canchas disponibles!
            </div>
        </div>
    </div>
    <!-- <Footer/> -->
</section>
</template>

<script>
import NavbarOwner from './NavbarOwner.vue'
// import Footer from './Footer.vue'
import Spinner from './Spinner.vue'
import mixins from "../mixins.js";
export default {
    name: 'src-components-panel-owners',
    props: ["id"],
    mixins: [mixins],
    components: {
        NavbarOwner,
        Spinner
    },
    mounted() {
        if (!this.$store.state.isLoggedOwner) {
            this.$router.push('/login-owner')
        }
        this.getDatos();
    },
    data() {
        return {
            url: "https://evening-hollows-89542.herokuapp.com/courts/",
            loading: true,
            results: []
        }
    },
    methods: {
        async getDatos() {
            try {
                let data = await this.axios.get(this.url + "owner", {
                    headers: {
                        'Authorization': `Bearer ${this.$store.state.isLoggedOwner}`,
                        'Content-Type': 'application/json'
                    }
                });
                const courts = Object.assign({}, data);
                if (courts.data.length > 0) {
                    this.results = courts.data;
                    console.log(this.results)
                } else {
                    this.results = false
                }
                this.loading = false;
            } catch (error) {
                console.error(error);
            }
        },
        updateCourt(id) {
            this.$router.push('/admin/edit-court/' + id)
        },
        async deleteCourt(courtId) {
            try {
                let data = await this.axios.delete(this.url + courtId, {
                    headers: {
                        'Authorization': `Bearer ${this.$store.state.isLoggedOwner}`,
                        'Content-Type': 'application/json'
                    }
                })
                console.log(data.data)
                this.getDatos()
                this.loading = false;
                this.$router.push('/admin/index')
            } catch (error) {
                console.error(error);
            }
        }
    },
    computed: {

    }
}
</script>

<style lang="css" scoped>
.src-components-panel-owners {
    min-height: 600px;
    background: url(../assets/slide8.jpg);
    background-size: cover;
    background-repeat: no-repeat;
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

p.right {
    float: right !important;
}
</style>
