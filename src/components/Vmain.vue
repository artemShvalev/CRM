<template>
  <v-main>
      <h1 class="text-left">Счёт</h1>
      <v-container d-flex fluid >
        <v-container fluid>
          <v-card class="light-green" elevation="5" height="200">
            <v-card-title class="card-title">Счет в валюте</v-card-title>
            <v-divider />
            <v-card-text><h2>12.0 Р</h2></v-card-text>
          </v-card>
        </v-container>

        <v-container fluid>
          <v-card class="card blue lighten-2" elevation="5">
            <div class="card-header">
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
                  <tr>
                    <td>руб</td>
                    <td>12121</td>
                    <td>12.12.12</td>
                  </tr>

                  <tr>
                    <td>руб</td>
                    <td>12121</td>
                    <td>12.12.12</td>
                  </tr>
                  <tr>
                    <td>руб</td>
                    <td>12121</td>
                    <td>12.12.12</td>
                  </tr>
                  <tr>
                    <td>руб</td>
                    <td>12121</td>
                    <td>12.12.12</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>
        </v-container>
      </v-container>
      <VMainBtn/>
    </v-main>
</template>

<script>
import VMainBtn from "./VMainBtn"
export default {
  components: {
    VMainBtn
  }
}
</script>