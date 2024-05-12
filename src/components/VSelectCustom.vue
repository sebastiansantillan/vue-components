<template>
    <select class="block w-full border border-gray-300 text-md rounded-md py-2.5 text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:bg-zinc-50 focus:ring-blue-300" v-model="modelValue">
      <option v-for="item in options" :key="item.value" :value="item.value">{{ item.label }}</option> 
    </select>
</template>
<script setup lang="ts">
const props = defineProps({
  options: {
    type: Array as () => { value: string | number, label: string }[],
    required: true
  }
})
const modelValue = defineModel<string|number| readonly string[]>();
</script>