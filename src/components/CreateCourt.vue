<template>
<section class="src-components-create-court">
    <NavbarOwner />
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6 col-xl-4 form-box mt-5 mb-5">

                <!-- REGISTER FORM -->
                <form novalidate autocomplete="off" class="p-3 mt-3 mb-3 text-left" @submit.prevent="send()">

                    <h4 class="text-black text-left ml-3">Nueva cancha</h4>

                    <hr>
                    <div v-if="error" class="alert alert-danger">
                        Los datos ingresados son incorrectos.
                    </div>
                    <div class="form-group col-12">
                        <label for="name">Nombre</label>
                        <input type="text" id="name" class="form-control" v-model="$v.f.name.$model">
                        <div v-if="$v.f.name.$error && $v.f.name.$dirty" class="alert alert-danger mt-1">
                            <div v-if="$v.f.name.required.$invalid">- Este campo es requerido</div>
                            <div v-else-if="$v.f.name.minLength.$invalid">Este campo debe tener {{$v.f.name.minLength.$params.min}} caracteres como minimo</div>
                            <div v-else-if="$v.f.name.maxLength.$invalid">Este campo debe tener {{$v.f.name.maxLength.$params.max}} caracteres como maximo</div>
                        </div>
                    </div>

                    <div class="form-group col-12">
                        <label for="players">Jugadores</label>
                        <select id="players" class="form-control" v-model="$v.f.players.$model">
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                        </select>
                    </div>

                    <div class="form-group col-12">
                        <label for="hourprice">Precio/Hora</label>
                        <input type="number" id="hourprice" class="form-control" v-model="$v.f.hourprice.$model">
                        <div v-if="$v.f.hourprice.$error && $v.f.hourprice.$dirty" class="alert alert-danger mt-1">
                            <div v-if="$v.f.hourprice.required.$invalid">- Este campo es requerido</div>
                        </div>
                    </div>

                    <div class="form-group col-12">
                        <label for="address">Dirección</label>
                        <input type="text" id="address" class="form-control" v-model="$v.f.address.$model">
                        <div v-if="$v.f.address.$error && $v.f.address.$dirty" class="alert alert-danger mt-1">
                            <div v-if="$v.f.address.required.$invalid">- Este campo es requerido</div>
                        </div>
                    </div>

                    <div class="form-group col-12">
                        <label for="neighborhood">Barrio</label>
                        <select v-model="$v.f.neighborhood.$model" name="barrio" id="barrio" class="custom-select custom-select-sm">
                            <option v-for="(barrio,i) in barrios" :key="i" :value="barrio.name">{{barrio.name}}</option>
                        </select>
                        <!-- <input type="text" id="neighborhood" class="form-control" v-model="$v.f.neighborhood.$model"> -->
                        <div v-if="$v.f.neighborhood.$error && $v.f.neighborhood.$dirty" class="alert alert-danger mt-1">
                            <div v-if="$v.f.neighborhood.required.$invalid">- Este campo es requerido</div>
                        </div>
                    </div>

                    <div class="form-group col-12">
                        <label for="description">Descripción</label>
                        <input type="text" id="description" class="form-control" v-model="$v.f.description.$model">
                        <div v-if="$v.f.description.$error && $v.f.description.$dirty" class="alert alert-danger mt-1">
                            <div v-if="$v.f.description.required.$invalid">- Este campo es requerido</div>
                        </div>
                    </div>
                    <div class="form-group col-12">
                        <label for="service">Servicios</label>

                        <input type="text" id="service" class="form-control col-12" v-model="service">
                        <div class="btn btn-success col-4 mt-1" @click="addService()">Agregar</div>

                        <div class="mt-1 rounded alert-info p-2" v-if="services.length > 0">
                            <div v-for="(service, i) in services" :key="i">

                                <div>
                                    <p class="service-name">▪ {{ toUpperCase(service) }} - </p>
                                    <p @click="deleteService(i)" class="delete-service ml-1">Eliminar</p>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div class="form-group col-12">

                        <label for="days">Días y horarios</label>
                        <select v-model="$v.f.days.$model" id="days" class="form-control">
                            <option value="monday" selected="selected">Lunes</option>
                            <option value="tuesday">Martes</option>
                            <option value="wednesday">Miércoles</option>
                            <option value="thursday">Jueves</option>
                            <option value="friday">Viernes</option>
                            <option value="saturday">Sábado</option>
                            <option value="sunday">Domingo</option>
                        </select>

                        <label for="openhours">Horario de apertura</label>
                        <select id="openhours" class="form-control" value="8" v-model="$v.f.openhours.$model">
                            <option value="0">00:00</option>
                            <option value="1">01:00</option>
                            <option value="2">02:00</option>
                            <option value="3">03:00</option>
                            <option value="4">04:00</option>
                            <option value="5">05:00</option>
                            <option value="6">06:00</option>
                            <option value="7">07:00</option>
                            <option value="8" selected>08:00</option>
                            <option value="9">09:00</option>
                            <option value="10">10:00</option>
                            <option value="11">11:00</option>
                            <option value="12">12:00</option>
                            <option value="13">13:00</option>
                            <option value="14">14:00</option>
                            <option value="15">15:00</option>
                            <option value="16">16:00</option>
                            <option value="17">17:00</option>
                            <option value="18">18:00</option>
                            <option value="19">19:00</option>
                            <option value="20">20:00</option>
                            <option value="21">21:00</option>
                            <option value="22">22:00</option>
                            <option value="23">23:00</option>
                        </select>

                        <label for="closehours">Horario de cierre</label>
                        <select id="closehours" class="form-control" v-model="$v.f.closehours.$model">
                            <option value="0">00:00</option>
                            <option value="1">01:00</option>
                            <option value="2">02:00</option>
                            <option value="3">03:00</option>
                            <option value="4">04:00</option>
                            <option value="5">05:00</option>
                            <option value="6">06:00</option>
                            <option value="7">07:00</option>
                            <option value="8">08:00</option>
                            <option value="9">09:00</option>
                            <option value="10">10:00</option>
                            <option value="11">11:00</option>
                            <option value="12">12:00</option>
                            <option value="13">13:00</option>
                            <option value="14">14:00</option>
                            <option value="15">15:00</option>
                            <option value="16">16:00</option>
                            <option value="17">17:00</option>
                            <option value="18">18:00</option>
                            <option value="19">19:00</option>
                            <option value="20">20:00</option>
                            <option value="21">21:00</option>
                            <option value="22">22:00</option>
                            <option value="23" selected="selected">23:00</option>
                        </select>

                        <div class="alert alert-danger mt-1" v-if="($v.f.closehours.$model <= $v.f.openhours.$model) && ($v.f.closehours.$model)">- El horario de cierre debe ser posterior al horario de apertura</div>

                        <div class="btn btn-success col-4 mt-1" @click="addDayAndHours()">Agregar</div>

                        <div class="mt-1 rounded alert-info p-2" v-if="Object.keys(calendar).length !== 0">
                            <div v-for="(item, i) in calendar" :key="i">
                                <p class="day-name">▪ {{ toUpperCase(i) }}: {{ item.from }} hs - {{ item.to}} hs</p>
                            </div>
                            <p @click="deleteDay()" class="delete-day ml-1">Eliminar</p>
                        </div>

                    </div>

                    <div class="form-group col-4">
                        <input type="submit" :disabled="false" class="btn btn-success mt-4" value="Enviar">
                    </div>

                </form>

            </div>
        </div>
    </div>
</section>
</template>

<script>
import {
    required,
    minLength,
    maxLength
} from '@vuelidate/validators'
import NavbarOwner from './NavbarOwner.vue'
import mixins from '../mixins.js'
export default {
    name: 'src-components-create-court',
    props: [],
    mixins: [mixins],
    components: {
        NavbarOwner
    },
    mounted() {
        if (!this.$store.state.isLoggedOwner) {
            this.$router.push('/login-owner')
        }
        this.resetForm()
    },
    data() {
        return {
            service: '',
            f: this.resetForm(),
            url: 'https://evening-hollows-89542.herokuapp.com/courts',
            error: false,
            services: [],
            calendar: {},
            barrios: [{
                    'value': 'Agronomía',
                    'name': 'Agronomía'
                },
                {
                    'value': 'Almagro',
                    'name': 'Almagro'
                },
                {
                    'value': 'Balvanera',
                    'name': 'Balvanera'
                },
                {
                    'value': 'Barracas',
                    'name': 'Barracas'
                },
                {
                    'value': 'Belgrano',
                    'name': 'Belgrano'
                },
                {
                    'value': 'Boedo',
                    'name': 'Boedo'
                },
                {
                    'value': 'Caballito',
                    'name': 'Caballito'
                },
                {
                    'value': 'Chacarita',
                    'name': 'Chacarita'
                },
                {
                    'value': 'Coghlan',
                    'name': 'Coghlan'
                },
                {
                    'value': 'Colegiales',
                    'name': 'Colegiales'
                },
                {
                    'value': 'Constitución',
                    'name': 'Constitución'
                },
                {
                    'value': 'Flores',
                    'name': 'Flores'
                },
                {
                    'value': 'Floresta',
                    'name': 'Floresta'
                },
                {
                    'value': 'La Boca',
                    'name': 'La Boca'
                },
                {
                    'value': 'La Paternal',
                    'name': 'La Paternal'
                },
                {
                    'value': 'Liniers',
                    'name': 'Liniers'
                },
                {
                    'value': 'Mataderos',
                    'name': 'Mataderos'
                },
                {
                    'value': 'Monte Castro',
                    'name': 'Monte Castro'
                },
                {
                    'value': 'Montserrat',
                    'name': 'Montserrat'
                },
                {
                    'value': 'Nueva Pompeya',
                    'name': 'Nueva Pompeya'
                },
                {
                    'value': 'Nuñez',
                    'name': 'Nuñez'
                },
                {
                    'value': 'Palermo',
                    'name': 'Palermo'
                },
                {
                    'value': 'Parque Avellaneda',
                    'name': 'Parque Avellaneda'
                },
                {
                    'value': 'Parque Chacabuco',
                    'name': 'Parque Chacabuco'
                },
                {
                    'value': 'Parque Chas',
                    'name': 'Parque Chas'
                },
                {
                    'value': 'Parque Patricios',
                    'name': 'Parque Patricios'
                },
                {
                    'value': 'Puerto Madero',
                    'name': 'Puerto Madero'
                },
                {
                    'value': 'Recoleta',
                    'name': 'Recoleta'
                },
                {
                    'value': 'Retiro',
                    'name': 'Retiro'
                },
                {
                    'value': 'Saavedra',
                    'name': 'Saavedra'
                },
                {
                    'value': 'San Cristóbal',
                    'name': 'San Cristóbal'
                },
                {
                    'value': 'San Nicolás',
                    'name': 'San Nicolás'
                },
                {
                    'value': 'San Telmo',
                    'name': 'San Telmo'
                },
                {
                    'value': 'Versalles',
                    'name': 'Versalles'
                },
                {
                    'value': 'Villa Crespo',
                    'name': 'Villa Crespo'
                },
                {
                    'value': 'Villa Devoto',
                    'name': 'Villa Devoto'
                },
                {
                    'value': 'Villa General Mitre',
                    'name': 'Villa General Mitre'
                },
                {
                    'value': 'Villa Lugano',
                    'name': 'Villa Lugano'
                },
                {
                    'value': 'Villa Luro',
                    'name': 'Villa Luro'
                },
                {
                    'value': 'Villa Ortúzar',
                    'name': 'Villa Ortúzar'
                },
                {
                    'value': 'Villa Pueyrredón',
                    'name': 'Villa Pueyrredón'
                },
                {
                    'value': 'Villa Real',
                    'name': 'Villa Real'
                },
                {
                    'value': 'Villa Riachuelo',
                    'name': 'Villa Riachuelo'
                },
                {
                    'value': 'Villa Santa Rita',
                    'name': 'Villa Santa Rita'
                },
                {
                    'value': 'Villa Soldati',
                    'name': 'Villa Soldati'
                },
                {
                    'value': 'Villa Urquiza',
                    'name': 'Villa Urquiza'
                },
                {
                    'value': 'Villa del Parque',
                    'name': 'Villa del Parque'
                },
                {
                    'value': 'Vélez Sarsfield',
                    'name': 'Vélez Sarsfield'
                }
            ]
        }
    },
    validations: {
        f: {
            name: {
                required,
                minLength: minLength(3),
                maxLength: maxLength(16)
            },
            players: {
                required
            },
            hourprice: {
                required
            },
            address: {
                required
            },
            neighborhood: {
                required
            },
            description: {
                required
            },
            services: {

            },
            calendar: {
                required
            },
            days: {

            },
            openhours: {},
            closehours: {}
        }
    },
    methods: {
        sendDataFormAxios(data) {

            this.axios.post(this.url, data, {
                    headers: {
                        'Authorization': `Bearer ${this.$store.state.isLoggedOwner}`,
                        'Content-Type': 'application/json'
                    }
                })
                .then(res => {
                    if (res.data) {
                        this.$router.push('/admin/index')
                    }
                })
                .catch(error => {
                    console.log(error)
                    this.error = true
                })
        },
        send() {
            this.$v.$touch()

            if (!this.$v.$invalid) {
                let form = {
                    name: this.$v.f.name.$model,
                    players: this.$v.f.players.$model,
                    hourprice: this.$v.f.hourprice.$model,
                    address: this.$v.f.address.$model,
                    neighborhood: this.$v.f.neighborhood.$model,
                    description: this.$v.f.description.$model,
                    services: this.services,
                    calendar: this.calendar,
                    reservations: []
                }
                this.sendDataFormAxios(form)
            }
        },
        resetForm() {

            return {
                name: '',
                players: '',
                hourprice: '',
                address: '',
                neighborhood: '',
                description: '',
                service: '',
                days: '',
                openhours: '',
                closehours: '',
                calendar: {

                },
                reservations: []
            }
        },
        addService() {
            if (this.service != '') {
                this.services.push(this.service)
                this.service = ''
            }
        },
        addDayAndHours() {
            let day = this.$v.f.days.$model
            let openhours = this.$v.f.openhours.$model
            let closehours = this.$v.f.closehours.$model

            this.calendar[day] = {}
            this.calendar[day].from = parseInt(openhours)
            this.calendar[day].to = parseInt(closehours)

        },
        deleteService(index) {
            this.services.splice(index, 1)
        },
        deleteDay() {
            this.calendar = {}
        }

    },
    computed: {

    }
}
</script>

<style lang="css" scoped>
.src-components-create-court {
    min-height: 1000px;
    background: url(../assets/slide8.jpg);
    background-size: cover;
    background-repeat: no-repeat;
}

form label {
    color: white;
}

.container .form-box {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
}

form h4 {
    color: rgb(228, 227, 227);
    font-weight: 500;
}

.reg-link {
    color: rgb(209, 207, 207);
    text-decoration: none;
}

.reg-link:hover {
    color: rgb(255, 255, 255);
    text-decoration: none;
}

.service-name {
    display: inline-block;
}

.delete-service {
    cursor: pointer;
    display: inline-block;
}

.delete-service:hover {
    text-decoration: underline;
}

.day-name {
    display: inline-block;
}

.delete-day {
    cursor: pointer;
    display: inline-block;
}

.delete-day:hover {
    text-decoration: underline;
}
</style>
