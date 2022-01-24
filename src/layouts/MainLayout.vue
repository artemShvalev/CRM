<template>
  <v-app>
    <loader v-if="loading"/>
    <div v-else>
    <router-view></router-view>
    </div>
</v-app>

</template>

<script>
  import loader from '../components/loader'
export default {
  data: ()=> ({
    loading: false
  }),
async mounted(){
    if(!Object.keys(this.$store.getters.info).length){
      await this.$store.dispatch('fetchInfo')
    }
    this.loading = false
  },
  computed: {
    error(){
      return this.$store.getters.error
    }
  },
  watch: {
    error(fbError){
      alert(fbError.message)
    }
  },
  components: {
    loader
  }
}
</script>