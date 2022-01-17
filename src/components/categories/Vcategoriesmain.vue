<template>
  <v-app app>
    <v-main >
      <v-container fluid>
        <v-col cols="12" no-wrap gutters>
      <Vcategoriescreate @created="addNewCategory"/>
      <Vcategoriesedit/>
        </v-col>
      </v-container>
      </v-main>
  </v-app>
</template>

<script>
import Vcategoriescreate from "./Vcategoriescreate"
import Vcategoriesedit from "./Vcategoriesedit"
export default {
  data: () => ({
    categories: []
  }),
  components: {
    Vcategoriescreate, Vcategoriesedit
  },
  methods: {
    addNewCategory(category){
        this.categories.push(category)
    }
  }
}
</script>