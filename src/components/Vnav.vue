<template>
<div>
    <v-navigation-drawer app>
      <v-list>
      <v-list-item>
        <router-link to="/">Счет</router-link>
      </v-list-item>
      <v-list-item>
        <router-link to="/history">История</router-link>
      </v-list-item>
      <v-list-item>
        <router-link to="/planing">Планирование</router-link>
      </v-list-item>
      <v-list-item>
        <router-link to="/record">Новая запись</router-link>
      </v-list-item>
      <v-list-item>
        <router-link to="/categories">Категории</router-link>
      </v-list-item>
      </v-list>
    </v-navigation-drawer>
    </div>
</template>

<script>
export default {
}
</script>