<template>
  <v-main>
    <h1 class="ma-4">История записей</h1>
    <loader v-if="loading"/>
<!--    <p v-else-if="records.length === 0">Историй записей нет</p>-->
    <v-container fluid v-else>
        <v-container fluid>
              <VHistoryChart
                  :categories="categories"
                  :recods="records"
              />
        </v-container>
      <!-- Component-->
         <VHistoryTable :records="records"/>
    </v-container>
  </v-main>
</template>

<script>
import VHistoryTable from "./VHistoryTable";
import loader from '../loader'
import VHistoryChart from "./VHistoryChart";

export default {
  components: {VHistoryTable, loader, VHistoryChart},
  data: () => ({
    loading: true,
    records: [],
    categories: []
  }),
  async mounted(){
    this.records = await this.$store.dispatch('fetchRecords')
    this.categories = await this.$store.dispatch('fetchCategories')

    this.records.map(record => {
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

<style>
canvas{
  width: 800px !important;
  height: 800px !important;
  margin: 0 auto;
}
#pie-chart{
  font-size: 18px !important;
}
</style>
