<script setup>
import { defineAsyncComponent, ref } from "vue";
import settingsMain from "./settingsMain/settingsMain.vue";
const emits = defineEmits(["close"]);

const settingsAboutUsC = defineAsyncComponent(() =>
	import("./settingsAboutUs/settingsAboutUs.vue"),
);
const settingsThemesBlockC = defineAsyncComponent(() =>
	import("./settingsThemesBlock/settingsThemesBlock.vue"),
);

const componetId = ref(0);
</script>

<template>
	<div
		class="settings-bg fixed z-3 w-full h-full bg-black/80 flex justify-center items-center"
	>
		<div
			class="settings-wrapper w-80% h-80% bg-three flex flex-col overflow-hidden"
		>
			<div class="title flex justify-end">
				<i
					class="i-heroicons-x-mark text-10 self-end cursor-pointer"
					@click="emits('close')"
				></i>
			</div>
			<div
				class="setings flex w-full h-full border-dark border-style-solid border-t-2px"
			>
				<ul
					class="cotigor text-3xl w-20% border-dark border-style-solid border-r-2px text-black"
				>
					<li
						class="menu-items"
						@click="componetId = 0"
					>
						Главная
					</li>
					<li
						class="menu-items"
						@click="componetId = 1"
					>
						Темы
					</li>
					<li
						class="menu-items"
						@click="componetId = 2"
					>
						О нас
					</li>
				</ul>
				<div class="setingsBlock mx-2 mt-2 w-full h-full">
					<settingsMain v-if="componetId == 0" />
					<settingsThemesBlockC v-else-if="componetId == 1" />
					<settingsAboutUsC v-if="componetId == 2" />
				</div>
			</div>
		</div>
	</div>
</template>
