<template>
  <v-form class="d flex align-center w-4" @submit.prevent="submit">
    <h2 class="title">login</h2>
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
  
  <v-container fluid>
    <v-btn class="mr-4" type="submit"  color="green" text>
      submit
    </v-btn>
  <div class="d-flex justify-end mx-5">
    <p class="px-5">
      Нет аккаунта?
    </p>
    <router-link to="/register"  class="register">Зарегистрироваться</router-link>
  </div>
  </v-container>
  </v-form>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, email, minLength } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      email: { required, email },
      password: { required,minLength}
    },

    data: () => ({
      email: '',
      password: ''
    }),
    computed: {
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
      passwordErrors(){
        const passwordErrors = []
        if(!this.$v.password.$dirty) return passwordErrors
        !this.$v.password.required && passwordErrors.push('Password is required')
        this.$v.password.$model.length < 6 && passwordErrors.push('Password must be have 6 symbols')
        return passwordErrors
      }
      
    },

    methods: {
    async submit () {
        if(this.$v.$invalid){
        this.$v.$touch()
        return
        }

        const formData = {
          email: this.email,
          password: this.password
        }
        try {
        await this.$store.dispatch('login', formData)
        this.$router.push('/')
        // eslint-disable-next-line no-empty
        }catch(e) {}
      },
    },
  }
</script>

<style scoped>
  .register, a{
    color: red;
    outline: none;
  }
</style>