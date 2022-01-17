<template>
  <v-app app>
    <Vnav/>
    <Vbar/>
    <Vmain/>
  </v-app>
</template>

<script>
import Vnav from '@/components/Vnav';
import Vbar from '@/components/Vbar';
import Vmain from '@/components/home/Vmain';
export default {
  name: "Home",
  components: {
    Vmain,
    Vbar,
    Vnav
  }
};
</script>

<style>
a {
  outline: none;
  color: darkgray;
}
</style>
