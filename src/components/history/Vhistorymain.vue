<template>
  <v-main>
    <h1 class="text-left">История записей</h1>
    <v-container d-flex fluid>
      <div class="history-chart">
        <canvas></canvas>
      </div>
          <v-simple-table fixed-header height="200px">
            <template v-slot:default>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Сумма</th>
                  <th>Дата</th>
                  <th>Категория</th>
                  <th>Тип</th>
                  <th>Открыть</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1</td>
                  <td>1212</td>
                  <td>12.12.32</td>
                  <td>name</td>
                  <td>
                    <span class="white-text badge red">Расход</span>
                  </td>
                  <td>
                    <button class="btn-small btn">
                      <v-icon>open_in_new</v-icon>
                    </button>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
    </v-container>
  </v-main>
</template>
