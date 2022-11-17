<script setup>
import { ref, onMounted } from "vue";
const { id } = defineProps(["id"]);
const monster = ref({});
const options = {
  method: "GET",
  // We don't actually need headers for this API call
  // but if we did, we can add them here:
  // headers: {
  //   'X-RapidAPI-Key': `${import.meta.VITE_API_KEY}`,
  //   'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
  // }
};

const res = await fetch(`https://www.dnd5eapi.co/api/monsters/${id}`, options);
if (!res.ok) {
  throw new Error();
}

monster.value = await res.json();
</script>

<template>
  <div>
    <h2>{{ monster.name }}</h2>
    <ul class="scroll">
      <li v-for="[key, value] in Object.entries(monster)" :key="key">
        {{ key }}: {{ value }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
