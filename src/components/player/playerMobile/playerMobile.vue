<script setup>
// Принимание сылки, названия и управление воиспроизвелением (с начала пауза, остановка и упровление громкостью)
import { ref, reactive, watch, defineAsyncComponent } from "vue";
import playerControls from "./../playerControls/playerControls.vue";
const emits = defineEmits(["clickLove"]);
const { musicInfo, settings } = defineProps({
	musicInfo: Object,
	settings: Object,
});

const player = ref();

const loop = ref(false);
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
		></audio>
		<div class="musicInfo flex items-center gap-2 h-full w-40%">
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
	</div>
</template>

<style scoped></style>
