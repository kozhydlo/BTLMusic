<script setup>
import { inject, ref } from "vue";

import musicVue from "../music/music.vue";
import axios from "axios";
import find from "../find/find.vue";
const serach = ref("");
const serachMAs = ref([]);
const emits = defineEmits(["clickMusic"]);

const settings = inject("settings").value;

const searching = async () => {
	console.log("search" + serach.value);
	serachMAs.value.length = 0;
	await axios
		.get(`${settings.server}/api/v1/search?type=video&q=${serach.value}`)
		.then((data) => {
			let response = data;
			response.data.forEach((element, index) => {
				axios
					.get(`${settings.server}/api/v1/videos/${element.videoId}`)
					.then((videoData) => {
						let video = videoData.data;

						// Script Knedme
						let bestQuality = video.adaptiveFormats[0];
						video.adaptiveFormats.forEach((format) => {
							if (
								format.type.includes("audio") &&
								parseInt(bestQuality.bitrate) < parseInt(format.bitrate) &&
								settings.bestBitrate
							) {
								bestQuality = format;
							}
						});
						let obj = {
							id: index,
							name: video.title,
							author: video.author,
							img: video.videoThumbnails[0].url,
							link: bestQuality.url,
						};
						serachMAs.value.push(obj);
					});
			});
		});
};
</script>

<template>
	<div class="youtube w-full flex flex-col">
		<find
			v-model="serach"
			@search="searching"
		/>
		<div
			class="find flex flex-wrap gap-5 overflow-scroll ml-10px mt-10px justify-center"
		>
			<musicVue
				v-for="item in serachMAs"
				:key="item.id"
				:author="item.author"
				:name="item.name"
				:logo="item.img"
				@click="emits('clickMusic', item)"
			/>
		</div>
	</div>
</template>

<style scoped></style>
