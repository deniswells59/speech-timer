<script setup>
import { store } from './store';
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>Speech and Debate Timer</h1>
    </div>
  </header>

  <main>
    <h3>
      <span v-if="(Boolean(store.minutes) || store.minutes === 0) && store.minutes < 10">0</span>
      <span>{{ store.minutes ?? '00' }}</span>
      <span>:</span>
      <span v-if="(Boolean(store.seconds) || store.seconds === 0) && store.seconds < 10">0</span>
      <span>{{ store.seconds ?? '00' }}</span>
    </h3>

    <button @click="store.startTimer(1)">Start Timer</button>
    <button @click="store.resetTimer()">Reset Timer</button>
  </main>
</template>

<style scoped></style>
