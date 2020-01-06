<template>
    <v-form @submit.prevent="login">
        <v-container>
            <v-row>

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
                        Entrar
                    </v-btn>

                    <router-link to="/signup">
                        <v-btn>Signup</v-btn>
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
                    email:null,
                    password:null,
                }
            }
        },

        methods: {
            login() {
                User.login(this.form);
            }
        }
    }

</script>

<style scoped>

</style>
