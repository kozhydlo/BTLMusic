<script setup>

import { ref, reactive, watch, defineAsyncComponent } from "vue";
import progressBar from "../progressBar/progressBar.vue";
import playerControls from "./playerControls/playerControls.vue";
import popup from "../popup/popup.vue";
const emits = defineEmits(["clickLove", "openSettings"]);
const { musicInfo, settings } = defineProps({
	musicInfo: Object,
	settings: Object,
});

const player = ref();

const loop = ref(false);

const progress = ref(0);

const volume = ref(settings.volume);

const popupObj = reactive({
	show: false,
	title: "Помилка",
	message: "",
});
const playing = () => {
	player.value.volume = settings.volume / 100;
	progress.value = Math.round(
		(player.value.currentTime / player.value.duration) * 100,
	);
};

const click = (newValue) => {
	player.value.currentTime = player.value.duration * (newValue / 100);
};

const error = (error) => {
	popupObj.show = true;
	popupObj.message = `${player.value.error.message} Виберіть іншу пісню помилка ${player.value.error.code}`;
};
</script>

<template>
	<div
		class="player flex items-center justify-between h-32px text-white text-2xl"
	>
		<audio
			v-if="musicInfo.link != ''"
			ref="player"
			:loop="loop"
			:src="musicInfo.link"
			@timeupdate="playing"
			@error="error"
		></audio>
		<Teleport to="body">
			<popup
				v-if="popupObj.show"
				:title="popupObj.title"
				:message="popupObj.message"
				@close="popupObj.show = false"
			/>
		</Teleport>
		<div class="musicInfo flex items-center gap-2 h-full w-12%">
			<p
				class="overflow-hidden h-full w-50% cursor-pointer"
				:title="musicInfo.name"
			>
				{{ musicInfo.name }}
			</p>
			<span>-</span>
			<p
				class="overflow-hidden h-full w-50% cursor-pointer"
				:title="musicInfo.author"
			>
				{{ musicInfo.author }}
			</p>
		</div>
		<playerControls
			:link="musicInfo.link"
			@play="player.play()"
			@stop="player.pause()"
			@loop="loop = !loop"
			@love="emits('clickLove')"
		/>
		<progressBar
			v-model="progress"
			@chenge="click"
		/>
		<i
			class="icons-hover-cog-6-tooth text-7"
			@click="emits('openSettings')"
		></i>
	</div>
</template>

<style scoped></style>
