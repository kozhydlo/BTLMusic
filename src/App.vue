<script setup>
import invideosVue from "./components/invideos/invideos.vue";
import blockUtilsVue from "./components/blockUtils/blockUtils.vue";
import settings from "./components/settings/settings.vue";
import createLoveList from "./helpers/createObject.js";
import { useWindowSize } from "@vueuse/core";
import { getLocalStorage, setLocalStorage } from "./helpers/localStorage.js";
import {
	onMounted,
	provide,
	ref,
	reactive,
	watch,
	defineAsyncComponent,
} from "vue";

const { width } = useWindowSize();

const playerC = defineAsyncComponent(() =>
	import("./components/player/player.vue"),
);
const playerMobileC = defineAsyncComponent(() =>
	import("./components/player/playerMobile/playerMobile.vue"),
);
const titleC = defineAsyncComponent(() => import("./components/UI/title.vue"));
const user = ref("");

const music = reactive({
	name: "Music",
	author: "Author",
	link: "",
});
const clickMusic = (musicObject) => {
	music.name = musicObject.name;
	music.author = musicObject.author;
	music.link = musicObject.link;
};

const loveList = ref([]);

const addLove = () => {
	loveList.value.push(createLoveList(music));
	console.log(loveList.value);
};

const showingSettings = ref(false);

const settingsObj = ref({
	server: "https://invidious.perennialte.ch",
	bestBitrate: true,
	theme: {
		backgroundColor: "#3F4F84",
		backgroundColorPlayer: "#344376",
		showBlockUtils: true,
		playerShow: {
			play: true,
			stop: true,
			love: true,
			loop: true,
			donwold: true,
		},
	},
	volume: 100,
});

onMounted(() => {
	if (localStorage.getItem("user")) {
		user.value = getLocalStorage("user");
	}
	if (localStorage.getItem("loveList")) {
		loveList.value = getLocalStorage("loveList");
	}
	if (localStorage.getItem("settings")) {
		settingsObj.value = getLocalStorage("settings");
	}
});

provide("loveList", loveList);

provide("user", user);

provide("settings", settingsObj);

watch(user, () => {
	setLocalStorage("user", user.value);
});

watch(
	loveList,
	() => {
		setLocalStorage("loveList", loveList.value);
	},
	{ deep: true },
);

watch(
	settingsObj,
	() => {
		setLocalStorage("settings", settingsObj.value);
	},
	{ deep: true },
);
</script>

<template>
	<div class="main">
		<titleC v-if="width < 500" />
		<settings
			v-show="showingSettings"
			@close="showingSettings = false"
		/>
		<playerC
			v-if="width > 500"
			:style="{ backgroundColor: settingsObj.theme.backgroundColorPlayer }"
			:musicInfo="music"
			:settings="settingsObj"
			@click-love="addLove"
			@openSettings="showingSettings = true"
		/>
		<div
			class="content flex h-screen"
			:style="{ backgroundColor: settingsObj.theme.backgroundColor }"
		>
			<blockUtilsVue
				v-if="width > 500"
				v-show="settingsObj.theme.showBlockUtils"
				@click-music="clickMusic"
			/>
			<invideosVue @click-music="clickMusic" />
		</div>
		<playerMobileC
			v-if="width < 500"
			:musicInfo="music"
			:style="{ backgroundColor: settingsObj.theme.backgroundColorPlayer }"
		/>
	</div>
</template>
