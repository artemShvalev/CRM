<template>
<v-app>
 <router-view/>
</v-app>
</template>

<script>
export default {
  computed: {
    error(){
     return this.$store.getters.error
    }
  },
  watch: {
    error(fbError){
      alert(fbError.message)
    }
  }
}
</script>