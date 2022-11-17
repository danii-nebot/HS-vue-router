<script setup>
import { ref, onMounted } from "vue";
const data = ref({});
const options = {
  method: "GET",
  // We don't actually need headers for this API call
  // but if we did, we can add them here:
  // headers: {
  //   'X-RapidAPI-Key': `${import.meta.VITE_API_KEY}`,
  //   'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
  // }
};

const res = await fetch("https://www.dnd5eapi.co/api/monsters", options);
if (!res.ok) {
  throw new Error();
}

data.value = await res.json();
</script>

<template>
  <div>
    <h2>Fetched data from DnD5 API:</h2>
    <ul class="scroll">
      <li v-for="monster in data.results" :key="monster.index">
        <router-link :to="{ name: 'monster', params: { id: monster.index } }">
          {{ monster.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
