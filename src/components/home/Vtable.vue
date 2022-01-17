<template>
  <v-card class="card blue lighten-2" elevation="5">
    <div>
      <v-card-title class="card-title text-xs">Курс валют</v-card-title>
    </div>
    <v-simple-table fixed-header height="200px">
      <template v-slot:default>
        <thead>
          <tr>
            <th>Валюта</th>
            <th>Курс</th>
            <th>Дата</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cur in currencies" :key="cur">
            <td>{{cur}}</td>
            <td>{{conversion_rates[cur]}}</td>
            <td></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>
</template>

<script>
  export default{
    props: ["conversion_rates"],
    data: () => ({
      currencies: []
    })
  }
</script>
