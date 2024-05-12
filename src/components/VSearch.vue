<template>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
        </div>
        <input type="search" id="default-search"
            :value="modelValue"
            @input="onInput"
            class="block w-full p-2.5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Buscar" @keydown.enter="handleEnter" required>
    </div>
</template>
<script setup lang="ts">
defineProps(['modelValue']);
const emit = defineEmits();

const onInput = (event: Event) => {
  if (event instanceof InputEvent) {
    // Emite el evento update:modelValue con el nuevo valor del input
    emit('update:modelValue', (event.target as HTMLInputElement).value);
  }
};

const handleEnter = (event: KeyboardEvent) => {
    const inputValue = (event.target as HTMLInputElement).value;
    console.log('Valor ingresado:', inputValue);
};
</script>