<template>
  <v-app>
    <Vbar />
    <Vnav />
    <Vhistorymain/>
  </v-app>
</template>

<script>
import Vbar from '@/components/Vbar'
import Vnav from '@/components/Vnav'
import Vhistorymain from '@/components/history/Vhistorymain'
export default {
  components: {
    Vbar,
    Vnav,
    Vhistorymain,
  }
}
</script>