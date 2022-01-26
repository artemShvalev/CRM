<template>
 <v-main>
      <h1 class="text-left mx-5">Новая запись</h1>
      <loader v-if="loading"/>
      <v-banner app color="green" v-else-if="categories.length === 0"> Категорий пока нет <router-link to="/categories">Добавьте свою первую категорию</router-link></v-banner>
      <v-container fluid v-else>
        <v-alert outlined color="green" v-if="alert === true">
          Вы успешно создали запись
        </v-alert>
        <v-form @submit.prevent="submitRecord">
        <v-row>
         <v-col
          class="d-flex"
          cols="12"
          sm="6"
        >
           <v-select
               v-model="category"
               name="categories"
               :items="categories"
               item-text="title"
               item-value="catId"
               label="Выберите категорию"
           />
      </v-col>
      </v-row>
          <v-radio-group v-model="type">
            <v-radio
                label="Доход"
                value="income"
            ></v-radio>
            <v-radio color="red" label="Рассход" value="outcome"/>
          </v-radio-group>
      <v-text-field
          v-model.number="amount"
          type="number"
          placeholder="введите сумму"
          validate-on-blur
          prefix="₽"
          :error-messages="errorAmount"
          @input="$v.amount.$touch()"
          @blur="$v.amount.$touch()"
          required
      />

          <v-textarea
              label="Описание категории"
              auto-grow
              v-model.trim="description"
              @input="$v.description.$touch()"
              @blur="$v.description.$touch()"
              :error-messages="descriptionError"
              required
          />
    </v-form>
  </v-container>

      <v-btn
          type="submit"
          light
          color="green"
          elevation="3"
          fab
          outlined
          icon
          class="mx-5 d-flex justify-center align-center"
          :disabled="amount < 100 || description === '' "
      >
          <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-main>
</template>

<script>
import loader from "../loader";
import {validationMixin} from "vuelidate";
import {minValue, required} from "vuelidate/lib/validators";
import {mapGetters} from 'vuex'
export default {
  mixins: [validationMixin],
    data: () => ({
      loading: true,
      categories: [],
      radioGroup: false,
      category: null,
      type: 'income' || 'outcome',
      amount: 100,
      description: '',
      alert: false
    }),
  validations: {
    amount: {required, minValue: minValue(100)},
    description: {required}
  },
  computed: {
    errorAmount() {
      const e = []
      if (!this.$v.amount.$dirty) return e
      !this.$v.amount.required && e.push('Field is required')
      !this.$v.amount.minValue && e.push('Fields must be contain sum average 100')
      return e
    },
    descriptionError(){
      const error = []
      if (!this.$v.description.$dirty) return error
      !this.$v.description.required && error.push('Field is required')
      return error
    },
    ...mapGetters(['info']),
    canCreateRecord(){
      if (this.type === 'income'){
        return true
      }
      return this.info.bill >= this.amount
    }
  },
 async mounted(){
   this.categories = await this.$store.dispatch('fetchCategories')
   this.loading = false

   if (this.categories.length){
     this.category = this.categories[0].id
   }
  },
  methods: {
  async  submitRecord(){
      if(this.$v.$invalid){
        this.$v.$touch()
        return
      }
      if (this.canCreateRecord){
        try {
          await this.$store.dispatch('createRecord', {
            categoryId: this.category,
            amount: this.amount,
            description: this.description,
            type: this.type,
            date: new Date().toJSON()
          })
          const bill = this.type === 'income' ? this.info.bill + this.amount : this.info.bill - this.amount

          await this.$store.dispatch('updateInfo', {bill})
          // eslint-disable-next-line no-empty
          this.alert = true
          this.$v.$reset()
          this.amount = 1
          this.description = ''
          // eslint-disable-next-line no-empty
        } catch (e) {}
      } else{
       alert(`Недостаточно средств на счете (${this.amount - this.info.bill})`)
      }
    }
  },
  components: {loader}
}
</script>
  