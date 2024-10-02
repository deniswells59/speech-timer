<script setup>
import { store } from './store';
import TimerCountdown from './components/TimerCountdown.vue';
import TimerButton from './components/TimerButton.vue';

import TIMER_TYPES from './constants/timerTypes';
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>Speech and Debate Practice Timer</h1>
    </div>
  </header>

  <TimerCountdown />

  <main>
    <button class="secondary" @click="store.resetTimer()">Reset Timer</button>

    <div v-for="timerType in TIMER_TYPES" :key="timerType.name">
      <TimerButton
        :name="timerType.name"
        :total-time="timerType.totalTime"
        :timestamps="timerType.timestamps"
      />
    </div>

  </main>
</template>

<style scoped>
h1 {
  text-align: center;
}
</style>
