<script setup lang="ts">
const props = withDefaults(defineProps<{
  name: string;
  title: string;
  setValue: string;
}>(), {
  title: '',
})

</script>
<template>
  <validationField :name="name" type="radio" v-slot="{ field, meta, errors }" :value="setValue">
    <input :id="title" type="radio" v-bind="field" :value="setValue">
    <label :for="title">{{ title }}</label>
  </validationField>
</template>
