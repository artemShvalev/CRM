<template>
      <v-app-bar app>
        <v-app-bar-nav-icon @click="isOpen"></v-app-bar-nav-icon>
          <span class="mx-3">{{date | date('datetime')}}</span>

      <v-menu offset-y class="d-flex">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="mx-2"
            color="primary"
            dark
            rounded
            outlined
            v-bind="attrs"
            v-on="on"
          >
            <v-icon class="mr-0"> mdi-menu-down </v-icon>
            USER NAME
          </v-btn>
        </template>
        <v-list id="dropdown">
          <v-list-item>
            <v-icon class="mx-1" color="green">account_circle</v-icon>
            <router-link to="/profile"> Профиль </router-link>
          </v-list-item>

          <v-list-item>
            <v-icon class="mx-1" color="green">assignment_return</v-icon>
            <a href="#" @click.prevent="logout"> Выйти </a>
          </v-list-item>
        </v-list>
        <VAlert v-if="logout"/>
      </v-menu>
      <v-btn class="btn-small right">
        <i class="material-icons">refresh</i>
      </v-btn>
    </v-app-bar>
</template>

<script>
import VAlert from './VAlert.vue'
export default {
  components: {VAlert},
  data: () => ({
    date: new Date(),
    interval: null
  }),
  methods: {
   async logout(){
      await this.$store.dispatch('logout')

     this.$router.push('/login?message=logout') 
    }
  },
  mounted() {
   this.interval = setInterval(() => {
      this.date = new Date()
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.interval)
  }
}
</script>

<style>
a{
  outline: none;
}
</style>