<script setup>
  import { ref } from 'vue'
  const response = ref({})
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': `${import.meta.VITE_API_KEY}`,
      'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
    }
  }

  const res = await fetch('https://free-nba.p.rapidapi.com/players', options)
  if (!res.ok) {
    throw new Error()
  }

  response.value = (await res.json())
</script>

<template>
  <div class="scroll">
    <h2>Fetched data from NBA API:</h2>
    {{ response }}
  </div>
</template>

<style scoped>
  .scroll {
    height: 150px;
    min-height: 150px;
    max-height: 150px;
    overflow: scroll;
    padding: 10px;
  }
</style>