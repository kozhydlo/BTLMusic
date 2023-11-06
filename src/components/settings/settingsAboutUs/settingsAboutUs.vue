<script setup>
import developmemt from '../../../assets/development';

const discordIvent = () => {
    document.location.href = 'https://discord.gg/z5SSaeNCng'
}

</script>

<template>
    <div class="settimgsAboutUs flex flex-col gap-10">
        <div class="logo flex flex-col items-center justify-center gap-2 text-3xl cursor-pointer hover:text-dark duration-300 " @click="discordIvent">
            <img class="w-50 h-50" src="/blnt.jpg" alt="">
            <h1>BLNT - Better Look Next Time</h1>
        </div>
        <div class="developmemnts">
            <ul class="flex flex-wrap gap-5 items-center justify-evenly text-xl">
                <li class="duration-300 cursor-pointer hover:text-dark" v-for="piople in developmemt">
                    <a :href="piople.link">{{ piople.dol }} - {{ piople.name }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>