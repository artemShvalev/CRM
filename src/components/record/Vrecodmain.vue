<template>
 <v-main>
      <h1 class="text-left">Новая запись</h1>
      <v-container fluid >
        <v-form>
        <v-row>
         <v-col
          class="d-flex"
          cols="12"
          sm="6"
        >
        <v-select
          :items="items"
          label="Выберите категорию"
        ></v-select>
      </v-col>
      </v-row>

      <label for="amount">Сумма</label>
      <v-text-field id="amount" type="number"/>
 
      <label for="description">Описание</label>
      <v-text-field id="description" type="text"/>

    <v-btn outlined  color="green" icon type="submit">
       <v-icon>mdi-plus</v-icon>
    </v-btn>
    </v-form>
  </v-container>

      <v-btn type="submit" light color="green">
        <a  href="#">
          <v-icon>add</v-icon>
        </a>
      </v-btn>
    </v-main>
</template>

<script>
export default {
    data: () => ({
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    }),
}
</script>
  