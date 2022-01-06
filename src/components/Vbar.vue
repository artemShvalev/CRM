<template>
      <v-app-bar app>
      <a href="#">
        <v-icon>dehaze</v-icon>
      </a>
      <span class="mx-3">12.12.12</span>

      <v-menu offset-y class="d-flex">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="mx-2"
            color="primary"
            dark
            rounded
            outlined
            v-bind="attrs"
            v-on="on"
          >
            <v-icon class="mr-0"> mdi-menu-down </v-icon>
            USER NAME
          </v-btn>
        </template>
        <v-list id="dropdown">
          <v-list-item>
            <v-icon class="mx-1" color="green">account_circle</v-icon>
            <a href="#"> Профиль </a>
          </v-list-item>

          <v-list-item>
            <v-icon class="mx-1" color="green">assignment_return</v-icon>
            <a href="#"> Выйти </a>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn class="btn-small right">
        <i class="material-icons">refresh</i>
      </v-btn>
    </v-app-bar>
</template>

<style scoped>
a{
  outline: none;
}
</style>