<template>
    <div v-show="isOpen" class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
        <div class="w-full md:w-1/2 p-8 mx-4 bg-white rounded-md shadow-xl">
            <div class="flex items-center justify-between pb-2 border-b">
                <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">
                    <slot name="title">Confirmación de eliminación</slot>
                </h3>
                <VModalClose @click="$emit('closeModal')" />
            </div>
            <div class="mt-4">
                <p><slot name="body"></slot></p>
                <div class="text-right mt-4">
                    <VButtonCancel @click="$emit('closeModal')">Cancelar</VButtonCancel>
                    <VButtonDanger @click="$emit('confirm')">Confirmar</VButtonDanger>
                </div>
            </div>
        </div>
    </div>
</template>

  
<script setup lang="ts">
import { onMounted } from 'vue';
import VButtonCancel from '@/Components/VButtonCancel.vue';
import VButtonDanger from '@/Components/VButtonDanger.vue';
import VModalClose from '@/Components/VModalClose.vue';

const props = defineProps({
    isOpen: Boolean
});

const emit = defineEmits(['closeModal', 'confirm']);

const handleKeyPress = (event: KeyboardEvent) => {

    if (event.key === 'Escape' && props.isOpen) {
        close();
    }
};

function close() {
    emit('closeModal');
}

onMounted(() => {
    window.addEventListener('keydown', handleKeyPress);
});

</script>