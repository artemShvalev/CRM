import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import dateFilter from "./filters/date.filters";
import currencyFilter from "./filters/currency"
import loader from "./components/loader.vue"
import Vuelidate from 'vuelidate'

import firebase from "firebase/compat/app";

import "firebase/compat/auth";

import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyDNs9-N8taZwGk5amHU15zja7ZK3zRUXNU",
  authDomain: "crm-app-926ca.firebaseapp.com",
  databaseURL: "https://crm-app-926ca-default-rtdb.firebaseio.com",
  projectId: "crm-app-926ca",
  storageBucket: "crm-app-926ca.appspot.com",
  messagingSenderId: "686966704983",
  appId: "1:686966704983:web:380255cbb97713a9464c12",
};

firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: (h) => h(App),
    }).$mount("#app");
  }
});

Vue.config.productionTip = false;

Vue.use(Vuelidate)
Vue.filter("date", dateFilter);
Vue.filter('currency', currencyFilter)
Vue.component('loader', loader)
