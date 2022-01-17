<template>
<v-container grid-list-xs>
  <v-form  class="d flex align-center w-4" @submit.prevent="registerNewUser">
   <h2>Зарегистрироваться</h2>
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="10"
      label="Name"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="E-mail"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
      <v-text-field
      v-model="password"
      :error-messages="passwordErrors"
      label="Password"
      required
      @input="$v.password.$touch()"
      @blur="$v.password.$touch()"
    ></v-text-field>

       <v-checkbox v-model="checkbox" color="green ligthen-1">
      <template v-slot:label>
        <div v-if="checkbox===false">
          I agree this.. 
        </div>

        <div v-if="checkbox===true" >
          RULESSSSSSSSSS
          <v-icon color="green ligthen-2" size="x-large">
            mdi-chess-king
          </v-icon>
        </div>

      </template>
    </v-checkbox>

    <v-btn
      class="mr-4"
      color="green"
      text
      type="submit"
    >
      Зарегистрироваться
    </v-btn>
    <v-btn color="red" text>
      <router-link to="/login" tag="button">
      Войти
      </router-link>
    </v-btn>
  </v-form>
</v-container>
 
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(10)},
      email: { required, email },
      password: { required, maxLength: maxLength(6)},
      checkbox: {checked: value => value}
    },

    data: () => ({
      name: '',
      email: '',
      password: '',
      checkbox: false
    }),

    computed: {
      nameErrors () {
        const nameErrors = []
        if (!this.$v.name.$dirty) return nameErrors
        !this.$v.name.maxLength && nameErrors.push('Name must be at most 10 characters long')
        !this.$v.name.required && nameErrors.push('Name is required.')
        return nameErrors
      },
      emailErrors () {
        const emailErrors = []
        if (!this.$v.email.$dirty) return emailErrors
        !this.$v.email.email && emailErrors.push('Must be valid e-mail')
        !this.$v.email.required && emailErrors.push('E-mail is required')
        return emailErrors
      },
      passwordErrors () {
        const passwordErrors = []
        if(!this.$v.password.$dirty) return passwordErrors
        !this.$v.password.required && passwordErrors.push('Password is required')
        this.$v.password.$model.length < 6 && passwordErrors.push('Password must be have 6 symbols')
        return passwordErrors
      }
    },

    methods: {
    async registerNewUser () {
        if(this.$v.$invalid){
          this.$v.$touch()
          return
        }

        const formData = {
          email: this.email,
          password: this.password,
          name: this.name
        }
        
        try {
        await this.$store.dispatch('register', formData)
        this.$router.push('/')
        // eslint-disable-next-line no-empty
        }catch(e){}
      },
    },
  }
</script>