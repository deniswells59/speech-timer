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
      <span>{{ Boolean(store.minutes) && store.minutes < 10 }}</span> {{ store.minutes ?? '00' }} : {{ store.seconds ?? '00' }}</h3>

    <button @click="store.setTimer(7)">Start Timer</button>
    <button @click="store.resetTimer()">Reset Timer</button>
  </main>
</template>

<style scoped></style>
