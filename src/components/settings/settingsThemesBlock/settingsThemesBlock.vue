<script setup>
import { inject, ref } from "vue";
import UIButton from "../../UI/UIButton.vue";
import settingThemeShowPlayer from "./showPlayer/settingThemeShowPlayer.vue";
import Select from "../../select/select.vue";
import { saveFile, readeFile } from "../../../helpers/workingWithFiles";
import themes from "./../../../assets/themes.json";
const settings = inject("settings");

const themeName = ref("");

const exportTheme = () => {
	if (themeName.value == "") {
		themeName.value = "theme";
	}
	saveFile(themeName.value, settings.value.theme);
	themeName.value = "";
};

const importTheme = async (event) => {
	try {
		settings.value.theme = readeFile(event.target.files[0]);
	} catch {
		alert("Невозможно загрузить тему");
	}
};
</script>

<template>
	<div
		class="settingsThemesBlock w-full h-full pb-15 flex flex-col text-3xl gap-5 overflow-auto"
	>
		<h1 class="text-center">Темы</h1>
		<div class="themes settingsTheme">
			<Select
				type="theme"
				title="Выбор темы"
				:secected-list="themes"
				v-model="settings.theme"
			/>
		</div>
		<div class="settingsBgColor settingsTheme">
			<h2>Цвет заднего фона</h2>
			<input
				class="h-full cursor-pointer"
				type="color"
				v-model="settings.theme.backgroundColor"
			/>
		</div>
		<div class="settingsBgPlayer settingsTheme">
			<h2>Цвет плеера</h2>
			<input
				class="h-full cursor-pointer"
				type="color"
				v-model="settings.theme.backgroundColorPlayer"
			/>
		</div>
		<settingThemeShowPlayer />
		<div class="showingBlockUtils settingsTheme">
			<label
				class="cursor-pointer"
				for="showBlockUtils"
				>Показывать блок утилит</label
			>
			<input
				type="checkbox"
				id="showBlockUtils"
				v-model="settings.theme.showBlockUtils"
			/>
		</div>
		<div class="exportTheme settingsTheme">
			<h2>Экспортиравить тему</h2>
			<input
				type="text"
				placeholder="Название темы"
				v-model="themeName"
			/>
			<UIButton @click="exportTheme">Экспортировать</UIButton>
		</div>
		<div class="importTheme settingsTheme">
			<h2>Импортировать тему</h2>
			<input
				type="file"
				@change="importTheme"
			/>
		</div>
	</div>
</template>
