<template>
  <v-main>
    <h1 class="ma-4">История записей</h1>
    <loader v-if="loading"/>
<!--    <p v-else-if="records.length === 0">Историй записей нет</p>-->
    <v-container fluid v-else>
      <div>
        <canvas></canvas>
      </div>
      <!-- Component-->
         <VHistoryTable :records="records"/>
    </v-container>
  </v-main>
</template>

<script>
import VHistoryTable from "./VHistoryTable";
import loader from '../loader'
export default {
  components: {VHistoryTable, loader},
  data: () => ({
    loading: true,
    records: [],
    categories: []
  }),
  async mounted(){
    // this.records = await this.$store.dispatch('fetchRecords')
    const records = await this.$store.dispatch('fetchRecords')
    this.categories = await this.$store.dispatch('fetchCategories')

    this.records = records.map(record => {
      return {
        ...record,
        categoryName: this.categories.find(c => c.id === record.categoryId).title,
        typeClass: record.type === 'income' ? 'green' : 'red',
        typeText: record.type === 'income' ? 'Доход' : 'Рассход',
      }
    })

    this.loading = false
  }
}
</script>
