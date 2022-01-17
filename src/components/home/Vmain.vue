<template>
  <v-main>
    <h1 class="text-left ml-5 mt-2">Счёт</h1>
    <loader v-if="loading"/>
    <v-container fluid v-else>
      <Vbill :base_cod="currency"
             :target_code="currency"
      />
      <v-divider vertical />
      <Vtable :conversion_rates="currency"
      />
    </v-container>
    <VMainBtn />
  </v-main>
</template>

<script>
import VMainBtn from "../VMainBtn.vue";
import Vbill from "./Vbill.vue";
import Vtable from "./Vtable.vue";
export default {
  components: {
    VMainBtn,
    Vtable,
    Vbill,
  },
  data: () => ({
    loading: true,
    currency: null,
  }),
  async mounted(){
  this.currency = await this.$store.dispatch('fetchCurrency')
  this.loading = false
  }
};
</script>
