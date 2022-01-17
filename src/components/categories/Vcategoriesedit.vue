<template>
  <div>
      <h1>Редактировать</h1>
    <v-form>
      <div>
        <v-select :categories="categories" label="Выберите категорию"/>
      </div>

      <v-text-field id="name" type="text" full-width placeholder="Название"/>


      <v-text-field id="limit" type="text" placeholder="Лимит"/>


      <v-btn type="submit"  color="red" :text="true" icon>
        Обновить
        <v-icon>mdi-refresh</v-icon>
      </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
      data: () => ({
      categories: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    }),
}
</script>