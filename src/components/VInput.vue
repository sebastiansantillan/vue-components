<template>
  <label v-if="label" class="block text-md font-medium my-2 leading-6 text-gray-900">
    {{ label}}
  </label>
  <div class="relative">
    <span v-if="prefix" class="absolute inset-y-0 left-0 flex items-center pl-2">
      {{ prefix }}
    </span>
    <input
      :value="modelValue"
      @input="onInput"
      :class="{ 'pl-6': prefix, 'bg-gray-100': $attrs.disabled=='' }"
      class="block w-full border border-gray-300 text-md rounded-md py-2.5 text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:bg-zinc-50 focus:ring-blue-300"      
      v-bind="$attrs"
    />
  </div>
</template>

<script setup lang="ts">
const { modelValue, prefix, label } = defineProps(['modelValue', 'prefix', 'label']);
const emit = defineEmits();

defineOptions({
  inheritAttrs: false
})

const onInput = (event: Event) => {
  if (event instanceof InputEvent) {
    // Emite el evento update:modelValue con el nuevo valor del input
    emit('update:modelValue', (event.target as HTMLInputElement).value);
  }
};
</script>