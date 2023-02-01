<script setup lang="ts">
const {
  validationSchema,
  initialValues,
  handleSubmit,
} = useValidation();
</script>
<template>
  <validationForm
  :validationSchema="validationSchema"
  :initialValues="initialValues"
  v-slot="{ meta: formMeta, errors: formErrors }"
  @submit="handleSubmit"
  >
    <baseTextBox
      name="user"
      placeholder="hello user"
    />

    <baseTextBox
      name="password"
      type="password"
      placeholder="hello password"
    />
    <button type="submit">test click</button>
  </validationForm>
  </template>
