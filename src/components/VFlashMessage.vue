<template>
    <div>
    <div v-if="flash.info"
        class="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-green-200 dark:text-green-800"
        role="alert">
        <span class="font-medium">
            {{ flash.info }}
        </span>
    </div>        
    <div v-if="flash.success"
        class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
        role="alert">
        <span class="font-medium">
            {{ flash.success }}
        </span>
    </div>
    <div v-if="flash.error" class="p-4 mb-4 text-sm bg-red-100 rounded-lg dark:bg-green-200 dark:text-green-800"
        role="alert">
        <span class="font-medium">
            {{ flash.error }}
        </span>
    </div>
    <div v-if="flash.warning" class="p-4 mb-4 text-orange-600 text-sm bg-red-50 rounded-lg"
        role="alert">
        <span class="font-medium" v-html="flash.warning">
        </span>
    </div> 
    </div>
</template>
<script setup lang="ts">
import { FlashProps } from '@/Interfaces/Types';
const props = defineProps<{
    flash: FlashProps;
}>();
</script>