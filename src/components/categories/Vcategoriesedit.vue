<template>
  <div>
      <h1>Редактировать</h1>
    <v-form @submit.prevent="submit">
      <div>
        <v-select
            v-model="current"
            name="categories"
            :items="categories"
            item-text="title"
            item-value="catId"
            label="Выберите категорию"
        />
      </div>

      <v-text-field type="text" full-width placeholder="Название"
                    v-model.trim="title"
                    :error-messages="errors"
      />
      <v-text-field type="number" placeholder="Допустимое колличество 100" prefix="₽" color="green"
                    v-model.number="limit"
                    :class="{red: this.$v.limit.$dirty && !this.$v.limit.minValue}"
                    :error-messages="limitErrors"
      />
      <v-btn type="submit"  color="red" :text="true" icon>
        Обновить
        <v-icon>mdi-refresh</v-icon>
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import {validationMixin} from "vuelidate";
import {minValue, required} from "vuelidate/lib/validators";

export default {
  props: {
    categories: {
      type: Array,
      required: true
    }
  },
  mixins: [validationMixin],
  data(){
    return {
      title: '',
      limit: null,
      current: ''
    }
  },
  validations: {
    title: {required},
    limit: {minValue: minValue(100)}
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
  },
  watch: {
current(catId) {
    const {title, limit} =  this.categories.find(c => c.id === catId)
      this.title =  title
      this.limit = limit
    }
  },
  created() {
    const {id, title, limit} = this.categories[0]
    this.current = id
    this.title = title
    this.limit = limit
  },
  methods: {
    async submit() {
      if (this.$v.$invalid) {
        this.$v.touch()
        return
      }
      try {
        const categoryData = {
          id: this.current,
          title: this.title,
          limit: this.limit
        }
        await this.$store.dispatch('updateCategory', categoryData)
        this.$emit('updated', categoryData)
        // eslint-disable-next-line no-empty
      } catch (e) {}
    }
  }
}
</script>