<template>
  <v-app>
    <router-view></router-view>
</v-app>
</template>

<script>
export default {
async mounted(){
    if(!Object.keys(this.$store.getters.info).length){
      await this.$store.dispatch('fetchInfo')
    }
  }
}
</script>