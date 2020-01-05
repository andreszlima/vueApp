<template>
    <div>
        <v-toolbar>
            <v-toolbar-title>Forum</v-toolbar-title>

            <v-spacer></v-spacer>

            <div class="hidden-sm-and-down">
                <v-btn text>Forum</v-btn>
                <v-btn text>Ask question</v-btn>
                <v-btn text>Category</v-btn>
                <router-link to="/login">
                    <v-btn text>Login</v-btn>
                </router-link>
            </div>

        </v-toolbar>
    </div>
</template>

<script>
    export default {
        name: "Toolbar"
    }
</script>

<style scoped>

</style>
