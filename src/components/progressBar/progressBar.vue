<script setup>
import { computed } from 'vue';
const props = defineProps({
	modelValue: Number,
});

const emits = defineEmits(["chenge"]);

const localComputed = computed({
	get() {
		return props.modelValue;
	},
	set(newValue) {
		console.log(newValue);
		emits("chenge", newValue);
	},
});
</script>

<template>
	<div class="pogressBar w-60%">
		<input
			class="progressBar w-full"
			type="range"
			min="0"
			max="100"
			v-model.number="localComputed"
		/>
	</div>
</template>
