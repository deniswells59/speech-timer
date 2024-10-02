<script setup>
import { store } from './store';
import TimerCountdown from './components/TimerCountdown.vue';

import TIMER_TYPES from './constants/timerTypes';
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>Speech and Debate Timer</h1>
    </div>
  </header>

  <TimerCountdown />

  <main>
    <div v-for="timerType in TIMER_TYPES" :key="timerType.name">
      <button @click="store.startTimer(timerType.totalTime, timerType.timestamps)">
        {{ timerType.name }}
      </button>
    </div>

    <button @click="store.resetTimer()">Reset Timer</button>
  </main>
</template>

<style scoped></style>
