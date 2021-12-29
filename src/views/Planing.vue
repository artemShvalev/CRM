<template>
<v-app app>
  <Vbar/>
  <Vnav/>
  <VmainPlaning/>
  <Vplaningbtnadd/>
</v-app>
</template>

<script>
import Vbar from '@/components/Vbar'
import Vnav from '@/components/Vnav'
import VmainPlaning from '@/components/planing/Vmainplaning.vue'
import Vplaningbtnadd from '@/components/planing/Vplaningbtnadd'
export default {
  components: {
    Vbar,
    Vnav,
    VmainPlaning,
    Vplaningbtnadd
  }
}
</script>