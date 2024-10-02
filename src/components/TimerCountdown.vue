<script setup>
import { store } from '../store';
</script>

<template>
  <div :class="{ hidden: !store.showTimer }">
    <span v-if="(Boolean(store.minutes) || store.minutes === 0) && store.minutes < 10">0</span>
    <p>{{ store.minutes ?? '00' }}</p>

    <span>:</span>

    <span v-if="(Boolean(store.seconds) || store.seconds === 0) && store.seconds < 10">0</span>
    <p>{{ store.seconds ?? '00' }}</p>
  </div>
</template>

<style scoped>
div {
  display: flex;
  font-size: 4rem;
  color: var(--color-heading);
  transition: all 0.2s ease-out;
}

div.hidden {
  opacity: 0;
}

p {
  min-width: 10px;
  text-align: center;
}
</style>
