<template>
    <button type="button"
        :class="{ 'bg-gray-400 text-gray-200': $attrs.disabled }"
        class="px-6 py-2 text-blue-100 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none rounded">
        <slot></slot>
    </button>
</template>
<script setup lang="ts">
</script>