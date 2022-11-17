<template>
    <header>
      <router-link class="plain-link" to="/">Home</router-link> |
      <router-link class="plain-link" to="/yesno">Yes No example</router-link> |
      <router-link class="plain-link" to="/about">About</router-link>
      <!-- <router-link class="plain-link" :to="{ name: 'apiList' }">API fetch</router-link> -->
    </header>
    <hr/>
    <main>
      <router-view />
    </main>

    <footer>
      My nice footer | Dani Nebot 2022
    </footer>
</template>
<style scoped>
  .plain-link {
    color:darkslategray;
    text-decoration: none;
  }
</style>