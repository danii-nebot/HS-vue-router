<template>
  <button @click="reload">Reload page</button>
  <hr/>
  <!-- simple scenario: one component fetches async data -->
  <Suspense>
    <YesNo/>
    <template #fallback>
      <img src="https://media.tenor.com/o8m3bKTsifUAAAAC/hold-on.gif" />
    </template>
  </Suspense>
  <hr />
   <!-- complex scenario, multiple components -->
  <div class="async-component errored" v-if="error">
  <!-- fallback error component -->
    Uh oh .. {{ error }}
  </div>
  <Suspense v-else>
    <AsyncContent :time="1000">
      <AsyncContent :time="2000" />
      <AsyncContent :time="300">
        <AsyncContent :time="500" />
        <!-- non blocking load -->
        <Suspense>
          <AsyncContent :time="5000" />
          <template #fallback>
            <Placeholder />
          </template>
        </Suspense>
      </AsyncContent>
    </AsyncContent>
    <template #fallback>
      <!-- Same structure as main content -->
      <Placeholder>
        <Placeholder />
        <Placeholder>
          <Placeholder />
          <Placeholder />
        </Placeholder>
      </Placeholder>
    </template>
  </Suspense>



</template>

<script setup>
  import { ref, onErrorCaptured } from "vue";
  import AsyncContent from './components/AsyncContent.vue'
  import Placeholder from './components/Placeholder.vue'
  import YesNo from './components/YesNo.vue'

  const error = ref('')
  const reload = () => {
    window.location.reload()
  }
  onErrorCaptured((e) => {
    console.log('error', e)
    error.value = e
    return true
  })
</script>

<style>
html {
  background: slategray;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto 0 auto;
  max-width: 600px;
}

button {
  padding: 4px 12px;
  margin-bottom: 20px;
  background: white;
  font-size: 14px;
  border: 1px solid black;
  cursor: pointer;
}

.async-component {
  border: 1px solid rgb(200, 200, 200);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  padding: 32px;
  margin: 20px;
}

.loaded {
  background: rgba(0, 255, 100, 0.2);
  border-color: rgb(0, 255, 100);
}

.errored {
  background: rgba(255, 0, 100, 0.2);
  border-color: rgb(255, 0, 100);
  color: white;
}
</style>