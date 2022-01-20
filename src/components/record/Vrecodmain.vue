<template>
 <v-main>
      <h1 class="text-left mx-5">Новая запись</h1>
      <loader v-if="loading"/>
      <v-banner app color="green" v-else-if="categories.length === 0"> Категорий пока нет <router-link to="/categories">Добавьте свою первую категорию</router-link></v-banner>
      <v-container fluid v-else>
        <v-form>
        <v-row>
         <v-col
          class="d-flex"
          cols="12"
          sm="6"
        >
        <select>
          <option v-for="c of categories" :key="c.id" :value="c.id">{{c.title}}</option>
        </select>
      </v-col>
      </v-row>
          <v-radio-group v-model="radioGroup">
            <v-radio
                label="Доход"
                value="Доход"
            ></v-radio>
            <v-radio color="red" label="Рассход" value="Рассход"/>
          </v-radio-group>
      <v-text-field  type="number" placeholder="Сумма" validate-on-blur />

      <v-text-field type="text" placeholder="Описание"/>
    </v-form>
  </v-container>

      <v-btn type="submit" light color="green" elevation="3" fab outlined icon class="mx-5 d-flex justify-center align-center">
          <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-main>
</template>

<script>
import loader from "../loader";
export default {
    data: () => ({
      loading: true,
      categories: [],
      radioGroup: false
    }),
 async mounted(){
   this.categories = await this.$store.dispatch('fetchCategories')
   this.loading = false
  },
  components: {loader}
}
</script>
  