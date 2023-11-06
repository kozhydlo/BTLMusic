<script setup>
import { inject } from "vue";

const prop = defineProps({
	link: String,
});

const emits = defineEmits(["play", "stop", "loop", "love"]);

const settings = inject("settings");
</script>

<template>
	<div class="flex items-center gap-1 text-7">
		<i
			v-show="settings.theme.playerShow.loop"
			class="i-heroicons-arrow-path cursor-pointer"
			@click="emits('loop', 'loop')"
		></i>
		<i
			v-show="settings.theme.playerShow.play"
			class="icons-hover-play"
			@click="emits('play', 'play')"
		></i>
		<i
			v-show="settings.theme.playerShow.stop"
			class="i-heroicons-pause cursor-pointer"
			@click="emits('stop', 'stop')"
		></i>
		<i
			v-show="settings.theme.playerShow.love"
			class="icons-hover-heart"
			@click="emits('love', 'love')"
		></i>
		<i
			v-show="settings.theme.playerShow.donwold"
			class="i-heroicons-arrow-down-tray cursor-pointer"
		>
			<a
				class="w-full h-full block"
				:href="prop.link"
			></a>
		</i>
	</div>
</template>
