<template>
 <v-main>
      <h1 class="text-left mx-5">Новая запись</h1>
      <loader v-if="loading"/>
      <v-banner app color="green" v-else-if="categories.length === 0"> Категорий пока нет <router-link to="/categories">Добавьте свою первую категорию</router-link></v-banner>
      <v-container fluid v-else>
        <v-alert outlined color="green" v-if="alert === true">
          Вы успешно создали запись
        </v-alert>
        <form @submit.prevent="submitRecord">
        <v-row>
         <v-col
          class="d-flex"
          cols="12"
          sm="6"
        >
           <div class="input-field" >
             <select ref="select" v-model="category">
               <option
                   v-for="c in categories"
                   :key="c.id"
                   :value="c.id"
               >{{c.title}}</option>
             </select>
           </div>
      </v-col>
      </v-row>
          <v-divider/>
          <p>
            <label>
              <input
                  class="with-gap"
                  name="type"
                  type="radio"
                  value="income"
                  v-model="type"
              />
              <span>Доход</span>
            </label>
          </p>
          <p>
            <label>
              <input
                  class="with-gap"
                  name="type"
                  type="radio"
                  value="outcome"
                  v-model="type"
              />
              <span>Расход</span>
            </label>
          </p>
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
  </form>
  </v-container>
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
      category: null,
      type: 'outcome',
      amount: 1,
      description: '',
      alert: false
    }),
  validations: {
    amount: {required, minValue: minValue(1)},
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
  async submitRecord(){
      if(this.$v.$invalid){
        this.$v.$touch()
        return
      }
      if (this.canCreateRecord){
        try {
        const  record = {
          categoryId: this.category,
          amount: this.amount,
          description: this.description,
          type: this.type,
          date: new Date().toJSON()
        }
          await this.$store.dispatch('createRecord', {record})
          const bill = this.type === 'income' ? this.info.bill + this.amount : this.info.bill - this.amount
          await this.$store.dispatch('updateInfo', {bill})
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
  components: {loader},
}
</script>

<style>
select{
  display: inline-block;
  width: 300px;
  height: 40px;
  line-height: 30px;
}
</style>