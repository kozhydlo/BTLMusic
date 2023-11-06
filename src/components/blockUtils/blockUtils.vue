<script setup>
import { defineAsyncComponent, ref, shallowRef } from "vue";
import profile from "./profile/profile.vue";
const emits = defineEmits(["clickMusic"]);

const componentId = ref(0);
const clickMusic = (item) => {
	emits("clickMusic", item);
};
const loveListC = defineAsyncComponent(() => import("./lovelist/loveList.vue"));
</script>

<template>
	<div
		class="blockUtils flex flex-col justify-between border-r-2px border-style-solid border-black min-w-70 max-w-70"
	>
		<div class="content w-full h-full">
			<profile v-if="componentId == 0" />
			<loveListC
				v-else
				@clickMusic="emits('clickMusic')"
			/>
		</div>
		<div
			class="cotigor flex border-t-2px border-style-solid border-black items-center justify-evenly gap-3 text-black text-10"
		>
			<i
				class="icons-hover-user-circle"
				title="Ползователь"
				@click="componentId = 0"
			></i>
			<i
				class="icons-hover-heart"
				title="Любимі пісні"
				@click="componentId = 1"
			></i>
		</div>
	</div>
</template>

<style scoped></style>
