<template>
<div>
    <h3>Категории</h3>
    <v-main>
      <v-container>
      <v-row class="d-flex justify-space-between">
      <Vcategoriescreate/>
      <Vcategoriesedit/>
      </v-row>
      </v-container>
      </v-main>
      </div>
</template>

<script>
import Vcategoriescreate from "./Vcategoriescreate"
import Vcategoriesedit from "./Vcategoriesedit"
export default {
  components: {
    Vcategoriescreate, Vcategoriesedit
  }
}
</script>