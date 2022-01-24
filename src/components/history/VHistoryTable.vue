<template>
  <v-simple-table height="200px" fixed-header >
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
      <tr v-for="(record, idx) of records" :key="record.id">
        <td>{{idx + 1}}</td>
        <td>{{ record.amount | currency('RUB')}}</td>
        <td>{{record.date | date('datetime')}}</td>
        <td>{{ record.categoryName }}</td>
        <td>
          <span :class="[record.typeClass]">{{ record.typeText }}</span>
        </td>
        <td>
          <v-btn
              icon
              class=" d-flex justify-center align-center"
              @click="$router.push('/detail/' + record.id)"
          >
            <v-icon>open_in_new</v-icon>
          </v-btn>
        </td>
      </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: "historyTable",
  props: {
    records: {
      required: true,
      type: Array
    }
  }
}
</script>
