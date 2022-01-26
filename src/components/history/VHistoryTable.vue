<template>

  <v-data-table
      dark
      no-data-text="Данные не загрузились повторите попытку"

      :headers="headers"
      :items="records"
      :items-per-page="5"
      class="elevation-1"
  ></v-data-table>

<!--  <v-simple-table height="200px" fixed-header dark>-->
<!--      <thead>-->
<!--      <tr>-->
<!--        <th>#</th>-->
<!--        <th>Сумма</th>-->
<!--        <th>Дата</th>-->
<!--        <th>Категория</th>-->
<!--        <th>Тип</th>-->
<!--        <th>Открыть</th>-->
<!--      </tr>-->
<!--      </thead>-->

<!--      <tbody v-for="(record, idx) of records" :key="record.id">-->
<!--      <tr >-->
<!--        <td>{{idx + 1}}</td>-->
<!--        <td>{{ record.amount }}</td>-->
<!--        <td>{{record.date }}</td>-->
<!--        <td>{{ record.categoryName }}</td>-->
<!--        <td>-->
<!--          <span class="[record.typeClass]">{{ record.typeText }}</span>-->
<!--        </td>-->
<!--        <td>-->
<!--          <button-->
<!--              class="btn"-->
<!--              @click="$router.push('/detail/' + record.id)"-->
<!--          >-->
<!--            <i class="material-icons">open_in_new</i>-->
<!--          </button>-->
<!--        </td>-->
<!--      </tr>-->
<!--      </tbody>-->
<!--  </v-simple-table>-->
</template>

<script>
export default {
  name: "historyTable",
  props: {
    records: {
      required: true,
      type: Array
    }
  },
  data: () => ({
    headers: [
      {
        text: '#',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: 'Сумма', value: 'calories' },
      { text: 'Дата', value: 'fat' },
      { text: 'Категория', value: 'carbs' },
      { text: 'Тип', value: 'protein' },
      { text: 'Открыть', value: 'iron' },
    ]
  })
}
</script>
