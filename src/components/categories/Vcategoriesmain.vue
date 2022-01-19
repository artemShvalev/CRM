<template>
  <v-app app>
    <v-main >
      <v-container fluid>
        <v-col cols="12" no-wrap gutters>
          <loader v-if="loading" />
          <div v-else>
      <Vcategoriescreate @created="addNewCategory"/>
      <Vcategoriesedit
          :categories="categories"
          :key="categories.length + updateCount"
          @updated="updateCategories"
      />
          </div>
        </v-col>
      </v-container>
      </v-main>
  </v-app>
</template>

<script>
import Vcategoriescreate from "./Vcategoriescreate"
import Vcategoriesedit from "./Vcategoriesedit"
import loader from '../loader'
export default {
  data: () => ({
    categories: [],
    loading: true,
    updateCount: 0

  }),
  async mounted() {
    this.categories = await this.$store.dispatch('fetchCategories')
    this.loading = false
  },
  components: {
    Vcategoriescreate, Vcategoriesedit, loader
  },
  methods: {
    addNewCategory(category){
        this.categories.push(category)
    },
    updateCategories(category){
      const i = this.categories.findIndex(c => c.id === category.id)
      this.categories[i].title = category.title
      this.categories[i].limit = category.limit
      this.updateCount++
    }
  }
}
</script>