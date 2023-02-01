<script setup lang="ts">
const props =  withDefaults(defineProps<{
  name: string;
  type?: string;
  placeholder?: string;
}>(), {
  type: 'text',
  placeholder: '',
})
</script>
<template>
  <validationField :name="name" v-slot="{ field, meta, errors }">
    <input 
      :placeholder="placeholder"
      class="px-3 py-2 rounded-full bg-gray-200 border-none focus:outline-none placeholder:text-gray-500"
      :class="{
        'border-red-500': !meta.valid && meta.touched,
        'border-green-500': meta.valid && meta.touched,
      }"
      v-bind="field"
    >
    <validationErrorMessage class="text-sm text-red-500" :name="name" as="small" />
  </validationField>
</template>
