<script setup>
import { inject } from "vue";

const settings = inject("settings");
</script>

<template>
	<div class="settingsTheme">
		<label for="showLoop">Показыать кнопку повтороения трека</label>
		<input
			type="checkbox"
			id="showLoop"
			v-model="settings.theme.playerShow.loop"
		/>
	</div>
	<div class="settingsTheme">
		<label for="showPlay">Показыать кнопку play</label>
		<input
			type="checkbox"
			id="showPlay"
			v-model="settings.theme.playerShow.play"
		/>
	</div>
	<div class="settingsTheme">
		<label for="showStop">Показыать кнопку stop</label>
		<input
			type="checkbox"
			id="showLoop"
			v-model="settings.theme.playerShow.stop"
		/>
	</div>
	<div class="settingsTheme">
		<label for="showLoop">Показыать кнопку любимого трека</label>
		<input
			type="checkbox"
			id="showLoop"
			v-model="settings.theme.playerShow.love"
		/>
	</div>
	<div class="settingsTheme">
		<label for="showLoop">Показыать кнопку скачивания</label>
		<input
			type="checkbox"
			id="showLoop"
			v-model="settings.theme.playerShow.donwold"
		/>
	</div>
</template>
