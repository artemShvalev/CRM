<template>
  <v-app app>
  <Vbar/>
  <Vnav/>
  <Vccategoriesmain/>
  </v-app>
</template>

<script>
import Vbar from '@/components/Vbar'
import Vnav from '@/components/Vnav'
import Vccategoriesmain from '../components/categories/Vcategoriesmain.vue'
export default {
  components: {
    Vbar,Vnav,Vccategoriesmain
  }
}
</script>