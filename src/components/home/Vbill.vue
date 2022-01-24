<template>
  <div>
    <v-card class="light-green" elevation="5" height="200" app>
      <v-card-title class="card-title">Счет в валюте</v-card-title>
      <v-divider />
      <v-card-text v-for="cur of currencies" :key="cur">
        <h2>{{ getCurrency(cur) | currency(cur)}}</h2>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
  export default {
 props: ['base_code', 'target_code'],
  data: () => ({
    currencies: []
  }),
  computed: {
    base() {
      return this.$store.getters.info.bill / Number(this.target_code / this.base_code)
    }
  },
  methods: {
    getCurrency(currency) {
      return this. base * (this.base_code * this.target_code[currency])
    }
  },
  };

</script>
