<template>
  <div>
      <h1>Создать</h1>
    <v-form @submit.prevent="submitFormCategories">
        <v-text-field id="name" type="text" full-width placeholder="Название"
                      v-model="title"
                      :error-messages="errors"
        />
        <v-text-field id="limit" type="number" placeholder="Допустимое колличество 100" prefix="₽" color="green"
                      v-model.number="limit"
                      :class="{red: this.$v.limit.$dirty && !this.$v.limit.minValue}"
                      :error-messages="limitErrors"
        />


      <v-btn type="submit"  color="green" :text="true" icon>
        Создать
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    </v-form>
  </div>
</template>

<script>
  import {required, minValue} from 'vuelidate/lib/validators'
  import { validationMixin } from 'vuelidate'
  export default {
    mixins: [validationMixin],
    data(){
      return {
        title: '',
        limit: null
      }
    },
    validations: {
      title: {required},
      limit: {minValue: minValue("100")}
    },
    methods: {
     async submitFormCategories(){
        if (this.$v.$invalid) {
          this.$v.$touch()
          return
        }
        try {
         const category =  await this.$store.dispatch('createCategory', {
            title: this.title,
            limit: this.limit
          })
          this.title  = ''
          this.limit = 100
          this.$v.reset()
          this.$emit('created', category)
          // eslint-disable-next-line no-empty
        } catch(e){

        }
      }
    },
    computed: {
      errors() {
        const e = []
        if (!this.$v.title.$dirty) return e
        !this.$v.title.required && e.push('Field is required')
        return e
      },
      limitErrors(){
        const er = []
        if (!this.$v.limit.$dirty) return er
        !this.$v.limit.required && er.push('You must have itself choice')
        return er
      }
    }
  }
</script>