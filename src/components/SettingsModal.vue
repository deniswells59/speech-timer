<script setup>
import { ref } from 'vue';
import SimpleModal from './SimpleModal.vue';
import CogIcon from './icons/CogIcon.vue';
import { store } from '../store';

import SOUND_TYPES from '../constants/soundTypes';

const showModal = ref(false);
</script>

<template>
  <button class="open-modal-button" @click="showModal = true"><CogIcon /></button>

  <SimpleModal :showModal="showModal" @close-modal="showModal = false">
    <h2>Select sound</h2>

    <div class="sound-button-group">
      <button
        v-for="key in Object.keys(SOUND_TYPES)"
        :class="{ selected: SOUND_TYPES[key] === store.sound }"
        v-bind:key="key"
        @click="store.setSound(SOUND_TYPES[key])"
      >
        {{ key.toLocaleLowerCase() }}
      </button>
    </div>
  </SimpleModal>
</template>

<style scoped>
button.open-modal-button {
  background: none;
  height: 48px;
  width: 48px;
  position: fixed;
  display: block;
  bottom: 30px;
  right: 30px;
  padding: 0px;
}

button.selected {
  background: var(--c-primary);
}

div.sound-button-group {
  display: flex;
  flex-direction: column;
  padding: 40px;
}

svg {
  height: 48px;
  width: 48px;
}
</style>
