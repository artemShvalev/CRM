<template>
  <v-app>
    <v-navigation-drawer app>
      <li>
        <a href="#">Счет</a>
      </li>
      <li>
        <a href="#">История</a>
      </li>
      <li>
        <a href="#">Планирование</a>
      </li>
      <li>
        <a href="#">Новая запись</a>
      </li>
      <li>
        <a href="#">Категории</a>
      </li>
    </v-navigation-drawer>

    <v-app-bar app>
      <a href="#">
        <i class="material-icons black-text">dehaze</i>
      </a>
      <span class="black-text">12.12.12</span>

      <v-menu offset-y class="d-flex">
        <template v-slot:activator="{ on, attrs }"> 
          <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
          >
          <v-icon right>
            mdi-menu-down
          </v-icon>
            USER NAME
          </v-btn>
          </template>
          <v-list id="dropdown">
            <v-list-item>
              <a href="#" class="black-text">
                <i class="material-icons">account_circle</i>Профиль
              </a>
            </v-list-item>

            <li>
              <a href="#" class="black-text">
                <i class="material-icons">assignment_return</i>Выйти
              </a>
            </li>
          </v-list>
      </v-menu>
      <v-btn class="btn-small left">
        <i class="material-icons">refresh</i>
      </v-btn>
    </v-app-bar>
    <v-main>
      <h1 class="text-left">Счёт</h1>
      <v-container d-flex>
        <v-container>
          <v-card class="light-green">
            <v-card-title class="card-title">Счет в валюте</v-card-title>
            <v-divider />
            <v-card-text>12.0 Р</v-card-text>
          </v-card>
        </v-container>

        <v-container fluid>
          <v-card class="card blue lighten-2">
            <div class="card-header">
              <v-card-title class="card-title">Курс валют</v-card-title>
            </div>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th>Валюта</th>
                    <th>Курс</th>
                    <th>Дата</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>руб</td>
                    <td>12121</td>
                    <td>12.12.12</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>
        </v-container>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "Home",
};
</script>
