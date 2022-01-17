<template>
  <v-app>
    <router-view></router-view>
</v-app>

</template>

<script>
  // import loader from '../components/loader'
export default {
  data: ()=> ({
    loading: false
  }),
// async mounted(){
//     if(!Object.keys(this.$store.getters.info).length){
//       await this.$store.dispatch('fetchInfo')
//     }
//     this.loading = false
//   },
  components: {
    // loader
  }
}
</script>