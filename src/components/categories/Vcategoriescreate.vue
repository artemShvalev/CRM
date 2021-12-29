<template>
  <v-app app>
      <h1>Создать</h1>
    <v-form>
        <label for="name">Название</label>
        <v-text-field id="name" type="text" full-width />


        <label for="limit">Лимит</label>
        <v-text-field id="limit" type="text" />


      <v-btn type="submit" light color="green" text="white">
        Создать
        <i class="material-icons right">send</i>
      </v-btn>
    </v-form>
  </v-app>
</template>
