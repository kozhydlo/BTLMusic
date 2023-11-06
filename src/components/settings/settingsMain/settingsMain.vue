<script setup>
import { inject } from "vue";
import progressBar from "../../progressBar/progressBar.vue";
import servers from "./../../../assets/server.js";
import Select from "../../select/select.vue";
const settings = inject("settings");
</script>

<template>
	<div class="settingsMain flex flex-col text-3xl gap-5">
		<div class="serever settingsTheme">
			<Select
				type="list"
				title="Сервер invideos"
				:secected-list="servers"
				v-model="settings.server"
			/>
		</div>
		<div class="settingBestBitrate flex items-center gap-3 settingsTheme">
			<label for="bestBitrate"
				>Шукати кращий бітрейт (краща якість звуку
			</label>
			<input
				type="checkbox"
				id="bestBitrate"
				v-model="settings.bestBitrate"
			/>
		</div>
		<div class="volume">
			<h1>Настройки звука</h1>
			<div class="volume--wrapper flex items-center gap-5 settingsTheme">
				<progressBar
					v-model="settings.volume"
					@chenge="(value) => (settings.volume = value)"
				/>
				<span>{{ settings.volume }}</span>
			</div>
		</div>
	</div>
</template>
