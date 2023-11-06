<script setup>
import { ref, watch } from "vue";

const { modelValue, title, secectedList, type } = defineProps({
	modelValue: [Array, Object, String],
	title: String,
	secectedList: [Array, Object],
	type: String,
});

const emits = defineEmits(["update:modelValue"]);

const model = ref(modelValue);

watch(model, () => {
	emits("update:modelValue", model.value);
});
</script>

<template>
	<div class="select gap-2 flex">
		<h2>{{ title }}</h2>
		<select
			v-if="type != 'list'"
			v-model="model"
		>
			<option
				v-for="item in secectedList"
				:value="item.theme"
				:key="item.id"
			>
				{{ item.name }}
			</option>
		</select>
		<select
			v-else
			v-model="model"
		>
			<option
				v-for="(item, index) in secectedList"
				:value="item"
				:key="index"
			>
				{{ item }}
			</option>
		</select>
	</div>
</template>
