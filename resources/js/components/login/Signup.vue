<template>
    <v-form
        @submit.prevent="signup"
    >
        <v-container>
            <v-row>

                <v-col
                    cols="4"
                    md="4"
                    offset="4"
                    offset-md="4"
                >
                    <v-text-field
                        v-model="form.name"
                        label="Nome"
                        type="text"
                        required
                    ></v-text-field>
                    <span class="red--text" v-if="errors.name">{{ errors.name[0] }}</span>
                </v-col>

                <v-col
                    cols="4"
                    md="4"
                    offset="4"
                    offset-md="4"
                >
                    <v-text-field
                        v-model="form.email"
                        label="E-mail"
                        type="email"
                        required
                    ></v-text-field>
                    <span class="red--text" v-if="errors.email">{{ errors.email[0] }}</span>
                </v-col>

                <v-col
                    cols="4"
                    md="4"
                    offset="4"
                    offset-md="4"

                >
                    <v-text-field
                        v-model="form.password"
                        label="Senha"
                        type="password"
                        required
                    ></v-text-field>
                    <span class="red--text" v-if="errors.password">{{ errors.password[0] }}</span>
                </v-col>

                <v-col
                    cols="4"
                    md="4"
                    offset="4"
                    offset-md="4"

                >
                    <v-text-field
                        v-model="form.password_confirmation"
                        label="Confirmar senha"
                        type="password"
                        required
                    ></v-text-field>
                    <span class="red--text" v-if="errors.password">{{ errors.password[0] }}</span>
                </v-col>

                <v-col
                    cols="4"
                    md="4"
                    offset="4"
                    offset-md="4"
                >
                    <v-btn
                        color="purple"
                        type="submit"
                    >
                        Registrar
                    </v-btn>

                    <router-link to="/login">
                        <v-btn>Voltar</v-btn>
                    </router-link>

                </v-col>



            </v-row>
        </v-container>
    </v-form>
</template>

<script>
    export default {
        data(){
            return {
                form: {
                    name:null,
                    email:null,
                    password:null,
                    password_confirmation:null,
                },
                errors:{}
            }
        },

        methods: {
            signup() {
                this.$http.post('/api/auth/signup', this.form)
                .then(res => User.responseAfterLogin(res))
                .catch(error => this.errors = error.response.data.errors)
            }
        }
    }
</script>

<style scoped>

</style>
