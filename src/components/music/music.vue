<script setup>
const { name, author, logo } = defineProps({
	name: String,
	author: String,
	logo: String,
});
</script>

<template>
	<div
		class="music"
		:style="{
			backgroundImage: `url(${logo})`,
		}"
	>
		<div
			class="text flex flex-col items-center justify-center text-2xl font-bold text-four"
		>
			<p class="music-text text-hit">{{ name }}</p>
			<p class="music-text text-hit">{{ author }}</p>
		</div>
	</div>
</template>

<style scoped></style>
