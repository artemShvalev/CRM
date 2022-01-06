<template>
  <v-app>
    <Vbar/>
    <Vnav/>
    <VDetailMain/>
</v-app>
</template>

<script>
import Vbar from '@/components/Vbar'
import Vnav from '@/components/Vnav'
import VDetailMain from '@/components/detail/VDetailMain'
export default {
  components: {
    Vbar,Vnav,VDetailMain
  }
}
</script>