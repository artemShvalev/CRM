<template>
  <v-app>
    <Vbar />
    <Vnav />
    <Vhistorymain/>
    <Vhistorybtn/>
  </v-app>
</template>

<script>
import Vbar from '@/components/Vbar'
import Vnav from '@/components/Vnav'
import Vhistorymain from '@/components/history/Vhistorymain'
import Vhistorybtn from '@/components/history/Vhistorybtn'
export default {
  components: {
    Vbar,
    Vnav,
    Vhistorymain,
    Vhistorybtn
  }
}
</script>