<template>
  <v-app app>
      <h1>Редактировать</h1>
    <v-form>
      <div>
        <v-select :categories="categories" label="Выберите категорию"/>
      </div>

        <label for="name">Название</label>
        <v-text-field type="text" id="name" />

        <label for="limit">Лимит</label>
        <v-text-field id="limit" type="number" />


      <v-btn type="submit" light color="green" text="white">
        Обновить
        <i class="material-icons right">send</i>
      </v-btn>
    </v-form>
  </v-app>
</template>

<script>
export default {
      data: () => ({
      categories: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    }),
}
</script>