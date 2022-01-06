<template>
  <v-main>
    <div>
      <h3>Профиль</h3>
    </div>

    <v-form>
      <div>
        <v-text-field id="description" type="text" label="Description" />
        <span></span>
      </div>

      <v-btn type="submit">
        Обновить
        <i class="material-icons right">send</i>
      </v-btn>
    </v-form>
    <div class="d-flex justify-sm-end flex-row">
        <v-btn  icon>
          <v-icon>add</v-icon>
        </v-btn>
    </div>
  </v-main>
</template>
