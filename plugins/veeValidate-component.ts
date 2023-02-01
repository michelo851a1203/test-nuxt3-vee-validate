import { Field, Form, ErrorMessage } from 'vee-validate'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('validationField', Field);
  nuxtApp.vueApp.component('validationForm', Form);
  nuxtApp.vueApp.component('validationErrorMessage', ErrorMessage);
})
