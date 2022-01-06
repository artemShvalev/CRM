<template>
  <v-app>
    <Vbar />
    <Vnav />
    <VProfileMain />
  </v-app>
</template>

<script>
import Vbar from "../components/Vbar.vue";
import Vnav from "../components/Vnav.vue";
import VProfileMain from "../components/profile/VProfileMain.vue";

export default {
  components: {
    VProfileMain,
    Vbar,
    Vnav,
  },
};
</script>
