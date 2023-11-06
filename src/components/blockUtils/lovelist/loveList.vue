<script setup>
import { inject } from "vue";
import { saveFile, readeFile } from "./../../../helpers/workingWithFiles.js";
import UIButton from "../../UI/UIButton.vue";

const emits = defineEmits(["clickMusic"]);
const loveList = inject("loveList");

const del = (index) => {
	loveList.value.splice(index, 1);
};

const importFile = async (event) => {
	loveList.value = await readeFile(event.target.files[0]);
};
</script>

<template>
	<div class="loveList text-white">
		<ul>
			<li class="flex flex-col items-center justify-center gap-2">
				<h1 class="text-center text-xl">Експортувати</h1>
				<UIButton @click="saveFile('loveList', loveList)"
					>Експотрувати</UIButton
				>
			</li>
			<li class="flex flex-col items-center justify-center gap-2">
				<h1>Імпортувти</h1>
				<input
					type="file"
					@change="importFile"
				/>
			</li>
			<li
				v-for="(item, index) in loveList"
				:key="index"
			>
				<div
					class="content border-solid border-b-1px border-black hover:bg-one"
				>
					<div
						class="text"
						@click="emits('clickMusic', item)"
					>
						<p>{{ item.name }}</p>
						<p>{{ item.author }}</p>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>
