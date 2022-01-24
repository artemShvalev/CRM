<template>
  <v-main app>
      <h1 class="text-left ma-5">Планирование</h1>
      <h2 class=" ma-5">{{info.bill | currency('RUB')}}</h2>

    <loader v-if="loading"/>
    <v-banner app color="green" v-else-if="categories.length === 0"> Категорий пока нет <router-link to="/categories">Добавьте свою первую категорию</router-link></v-banner>
      <v-container fluid  v-else>
      <div v-for="cat of categories" :key="cat.id">
      <p>
        <strong>{{cat.title}}:</strong>
        {{ cat.spend | currency }} из {{cat.limit | currency}}
      </p>
        <v-tooltip bottom :class="[cat.progressColor]">
          <template v-slot:activator="{ on, attrs }">
        <v-progress-linear  :class="[cat.progressColor]" :value="cat.progressPercent + '%'" v-bind="attrs" v-on="on"/>
          </template>
          <span>{{cat.tooltip}}</span>
        </v-tooltip>
      </div>
        <router-link to="/record" style="outline: none">
        <v-btn
            light
            color="green"
            elevation="3"
            fab
            outlined
            icon
            class="mx-5 my-10 d-flex justify-center align-center"
        >
          <v-icon dense>mdi-plus</v-icon>
        </v-btn>
        </router-link>
      </v-container>
    </v-main>
</template>

<script>
import loader from '../loader'
import {mapGetters} from 'vuex'
import currencyFilter from '../../filters/currency'
export default{
  components: {
    loader
  },
  data: () => ({
    loading: true,
    categories: []
  }),
  async mounted() {
    const records = await this.$store.dispatch('fetchRecords')
    const categories = await this.$store.dispatch('fetchCategories')

    this.categories = categories.map(cat => {
      const spend = records
      .filter(r => r.categoryId === cat.id)
      .filter(r => r.type === 'outcome')
      .reduce((total, record) => {
        return total += +record.amount
      }, 0)

      const percent = 100 * spend  / cat.limit
      const progressPercent = percent > 100 ? 100 : percent
      const progressColor = percent < 60 ? 'green' : percent < 100 ? 'yellow' : 'red'

      const tooltipValue = cat.limit - spend
      const tooltip = `${tooltipValue < 0 ? 'Превышение на ' : 'Осталось'} ${currencyFilter(Math.abs(tooltipValue))}`

      return {
        ...cat,
        progressColor,
        progressPercent,
        spend,
        tooltip
      }
    })

    this.loading = false
  },
  computed: {
    ...mapGetters([
        'info'
    ])
  }
}
</script>