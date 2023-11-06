<script setup>
import { inject } from "vue";
const loveList = inject("loveList");
const user = inject("user");
</script>

<template>
	<div
		class="profile flex flex-col w-full h-full items-center justify-between text-white text-xl"
	>
		<div class="user flex flex-col items-center gap-3 text-center">
			<i class="i-heroicons-user-circle text-15 mt-2"></i>
			<h1 class="text-2xl">{{ user.name }}</h1>
		</div>
		<h1 class="h-30 w-full text-center">
			Любимі пісні: {{ loveList.length }}
		</h1>
	</div>
</template>

<style scoped></style>
