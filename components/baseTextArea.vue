<script setup lang="ts">
const props = withDefaults(defineProps<{
  name: string;
}>(), {
})


</script>
<template>
  <validationField :name="name" v-slot="{ field, errors, meta }">
    {{ field }}
    <textArea v-bind="field"></textArea>
  </validationField>
</template>
