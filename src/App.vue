<script setup>
import { onMounted } from 'vue';
import { store } from './store';
import { getSoundType } from './utils/localStorage';
import TimerCountdown from './components/TimerCountdown.vue';
import TimerButton from './components/TimerButton.vue';
import SettingsModal from './components/SettingsModal.vue';

import TIMER_TYPES from './constants/timerTypes';

onMounted(() => {
  store.setSound(getSoundType(), true);
});
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>Speech and Debate Practice Timer</h1>
    </div>
  </header>

  <TimerCountdown />

  <main>
    <div>
      <button class="primary small toggleButton" @click="store.toggleTimer()">
        {{ store.showTimer ? 'Hide' : 'Show' }} Timer
      </button>

      <button class="secondary small" @click="store.resetTimer()">Reset</button>
    </div>

    <div class="timer-button-container" v-for="timerType in TIMER_TYPES" :key="timerType.name">
      <TimerButton
        :name="timerType.name"
        :total-time="timerType.totalTime"
        :timestamps="timerType.timestamps"
      />
    </div>
  </main>

  <SettingsModal />
</template>

<style scoped>
h1 {
  text-align: center;
}

button.toggleButton {
  min-width: 180px;
}

div.timer-button-container {
  display: flex;
  margin: 1rem 0rem;
}

main {
  display: flex;
  flex-direction: column;
}
</style>
