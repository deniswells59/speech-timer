<script setup>
import { store } from './store';
import TimerCountdown from './components/TimerCountdown.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>Speech and Debate Timer</h1>
    </div>
  </header>

  <TimerCountdown />

  <main>
    <button @click="store.startTimer(2, [{ minutes: 1, seconds: 50 }])">Start Timer</button>
    <button @click="store.resetTimer()">Reset Timer</button>
  </main>
</template>

<style scoped></style>
