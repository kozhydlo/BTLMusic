<script setup>
import { ref, watch } from "vue";

const { modelValue } = defineProps({
	modelValue: String,
});

const emits = defineEmits(["update:model-value", "search"]);

const valueSearch = ref(modelValue);

watch(valueSearch, () => {
	emits("update:model-value", valueSearch.value);
});
</script>

<template>
	<div class="find w-full flex gap-5 justify-around mt-10px text-lg">
		<div
			class="choice flex items-center px-10px border-2px border-solid border-black w-auto h-10 bg-four text-dark text-center"
		>
			<h1>YouTube</h1>
		</div>
		<input
			class="border-style-solid border-2px w-60% border-black bg-four text-dark px-10px"
			type="text"
			v-model="valueSearch"
		/>
		<button
			class="border-style-solid border-2px border-black w-10 w-10 bg-four"
			@click="emits('search')"
		>
			<i
				class="i-heroicons-magnifying-glass w-full h-full block bg-black hover:bg-black"
			></i>
		</button>
	</div>
</template>

<style scoped></style>
