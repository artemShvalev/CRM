<template>
  <v-app app>
  <v-main>
  <Vbar/>
  <Vnav/>
  <Vccategoriesmain/>
  </v-main>
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