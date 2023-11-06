<script setup>

const { title, message } = defineProps({
    title: String,
    message: String
})

const emits = defineEmits(['close'])
</script>

<template>
    <div class="popup w-full h-full bg-black/80 fixed z-3 flex items-center justify-center top-0 bottom-0">
        <div class="popup-wrapper bg-one w-80% h-80% flex flex-col">
            <div class="popup-title flex items-center justify-between border-dark border-style-solid border-b-2px">
                <h1 class="text-2xl">{{ title }}</h1>
                <i class="i-heroicons-x-mark w-10 h-10 self-end cursor-pointer" @click="emits('close')"></i>
            </div>
            <div class="popup-message w-90% h-90% bg-dark text-red  text-xl self-center mt-2">
                <p>{{ message }}</p>
            </div>
        </div>
    </div>
</template>