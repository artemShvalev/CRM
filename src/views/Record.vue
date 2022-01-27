<template>
  <v-app app>
  <Vbar/>
  <Vnav/>
  <Vrecodmain/>
  </v-app>
</template>

<script>
import Vbar from '@/components/Vbar'
import Vnav from '@/components/Vnav'
import Vrecodmain from '../components/record/Vrecodmain.vue'

export default {
  components: {
    Vbar,
    Vnav,
    Vrecodmain
  }
}
</script>