<template>
<v-form>
  <h4>Register</h4>
  <v-card>
    <v-card-title>Домашняя бухгалтерия</v-card-title>
    <div>
      <v-text-field
          id="email"
          type="text"
          label="Type your emil"
      />
      <small></small>
    </div>
    <div>
      <v-text-field
          id="password"
          type="password"
          class="validate"
          label="Type your password"
      />
      <small></small>
    </div>
    <div>
      <v-text-field
          id="name"
          type="text"
          class="validate"
          label="your name"
      />
      <small></small>
    </div>
      <v-checkbox label="i confirm you rules"  value="value"></v-checkbox>
  </v-card>
  <div class="card-action">
    <div>
      <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
      >
        Зарегистрироваться
        <v-icon>send</v-icon>
      </button>
    </div>

    <p class="center">
      Уже есть аккаунт?
      <a href="/">Войти!</a>
    </p>
  </div>
</v-form>
</template>