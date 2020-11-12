<template>
<section class="src-components-login-owner">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6 col-xl-4 form-box mt-5">

                <!-- CUSTOMER LOGIN FORM -->
                <form novalidate autocomplete="off" class="p-3 mt-3 mb-3 text-left" @submit.prevent="send()">
                    <h4 class="text-black text-left ml-3">Iniciar Sesión</h4>
                    <hr>
                    <div v-if="error" class="alert alert-danger">
                        Los datos ingresados son incorrectos.
                    </div>
                    <div class="form-group col-12">
                        <label for="username">Correo electrónico</label>
                        <input type="text" id="username" class="form-control" v-model="$v.f.username.$model">
                        <div v-if="$v.f.username.$error && $v.f.username.$dirty" class="alert alert-danger mt-1">
                            <div v-if="$v.f.username.required.$invalid">- Este campo es requerido</div>
                            <div v-if="$v.f.username.email.$invalid">- Debe ser un email válido</div>
                        </div>
                    </div>

                    <div class="form-group  col-12">
                        <label for="password">Contraseña</label>
                        <input type="password" id="password" class="form-control" v-model="$v.f.password.$model">
                        <div v-if="$v.f.password.$error && $v.f.password.$dirty" class="alert alert-danger mt-1">
                            <div v-if="$v.f.password.required.$invalid">- Este campo es requerido</div>
                        </div>
                    </div>

                    <div class="form-group col-4">
                        <input type="submit" :disabled="false" class="btn btn-success mt-4" value="Enviar">
                    </div>

                </form>
                <Spinner v-if="loading" />

                <div class="text-center">
                    <a class="reg-link" href="/register-owner">¿Aún no estás registrado? Registrate acá.</a>
                </div>
                <br>
                <div class="text-center mb-3">
                    <a class="log-link" href="/login-customer">Soy cliente.</a>
                </div>

            </div>
        </div>
    </div>
</section>
</template>

<script>
import {
    required,
    email
} from '@vuelidate/validators'
import Spinner from './Spinner.vue'
export default {
    name: 'src-components-login-owner',
    props: [],
    components: {
        Spinner
    },
    mounted() {
        if (this.$store.state.isLoggedOwner) {
            this.$router.push('/admin/index')
        }
        this.resetForm()
    },
    data() {
        return {
            f: this.resetForm(),
            loading: false,
            url: 'https://evening-hollows-89542.herokuapp.com/login',
            error: false
        }
    },
    validations: {
        f: {
            username: {
                required,
                email
            },
            password: {
                required
            }
        }
    },
    methods: {
        sendDataFormAxios(data) {
            this.axios.post(this.url, data, {
                    'content-type': 'application/json'
                })
                .then(res => {
                    if (res.data) {
                        sessionStorage.setItem('owner', res.data.token)
                        this.$store.dispatch('getStatusOwner', res.data.token);
                        this.$router.push('/admin/index')
                    }
                })
                .catch(error => {
                    console.log(error)
                    this.error = true
                    setTimeout(() => {
                        this.error = false
                    }, 5000)
                })
        },
        send() {
            this.$v.$touch()
            if (!this.$v.$invalid) {
                let form = {
                    email: this.$v.f.username.$model,
                    password: this.$v.f.password.$model,
                    owner: true
                }
                this.loading = true
                this.sendDataFormAxios(form)
            }
        },
        resetForm() {

            return {
                username: '',
                password: ''
            }
        }
    },
    computed: {

    }
}
</script>

<style lang="css" scoped>
.src-components-login-owner {
    min-height: 1000px;
    background: url(../assets/slide3.jpg);
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

.reg-link,
.log-link {
    color: rgb(209, 207, 207);
    text-decoration: none;
}

.reg-link:hover,
.log-link:hover {
    color: rgb(255, 255, 255);
    text-decoration: none;
}
</style>
