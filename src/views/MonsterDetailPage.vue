<script setup>
import MonsterDetail from "../components/MonsterDetail.vue";
import SimpleLoading from "../components/SimpleLoading.vue";
const { id } = defineProps(["id"]);
</script>
<template>
  <Suspense>
    <MonsterDetail class="container" :id="id" />
    <template #fallback>
      <SimpleLoading class="container" />
    </template>
  </Suspense>
</template>
