<template>
  <v-app app>
  <Vbar/>
  <Vnav/>
  <Vrecordmain/>
  </v-app>
</template>

<script>
import Vbar from '@/components/Vbar'
import Vnav from '@/components/Vnav'
import Vrecordmain from '../components/record/Vrecodmain.vue'

export default {
  components: {
    Vbar,
    Vnav,
    Vrecordmain
  }
}
</script>