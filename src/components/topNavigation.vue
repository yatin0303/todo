<template>
    <v-app-bar app flat color="transparent"  hide-on-scroll>
        <v-layout justify-start>
        <v-app-bar-nav-icon>ToDO</v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        </v-layout>
        <v-btn   depressed color="transparent" router to="/home" class="btn">
            <v-icon >
                home
            </v-icon>
        </v-btn>
        <v-btn   depressed color="transparent" router to="/tasks" class="btn">
            <v-icon >
                task
            </v-icon>
        </v-btn>
        <v-btn   depressed color="transparent" router to="/login" class="btn">
            <v-icon >
                login
            </v-icon>
        </v-btn>
        <v-app-bar-title></v-app-bar-title>
    </v-app-bar>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>

</style>