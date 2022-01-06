<template>
   <v-form>
    <h4>login</h4>
  <v-card>
    <v-card-title>Домашняя бухгалтерия</v-card-title>
    <div>
      <v-text-field
          id="email"
          type="text"
          class="validate"
          label="Write your email"
      />
      <small></small>
    </div>
    <div>
      <v-text-field
          id="password"
          type="password"
          class="validate"
          label="Write your password"
      />
      <small></small>
    </div>
  </v-card>
  <v-card-actions>
    <div>
      <v-btn
          type="submit"
      >
        Войти
        <v-icon>send</v-icon>
      </v-btn>
    </div>

    <p class="center">
      Нет аккаунта?
      <a href="/">Зарегистрироваться</a>
    </p>
  </v-card-actions>
</v-form>
</template>