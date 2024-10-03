<script setup>
import { ref } from 'vue';
import SimpleModal from './SimpleModal.vue';
import { store } from '../store';

const props = defineProps({
  name: String,
  totalTime: String,
  timestamps: Array,
});

const showModal = ref(false);
</script>

<template>
  <div class="button-group">
    <button class="primary" @click="store.startTimer(props.totalTime, props.timestamps)">
      {{ props.name }}
    </button>

    <button class="circle" @click="showModal = true">?</button>
  </div>

  <SimpleModal :showModal="showModal" @close-modal="showModal = false">
    <h2>{{ name }}</h2>
    <p>Starts a {{ totalTime }} minute timer with notifications at:</p>
    <ul>
      <li v-for="timestamp in timestamps" v-bind:key="timestamps.indexOf(timestamp)">
        <span v-if="timestamp.minutes < 10">0</span>
        <p>{{ timestamp.minutes ?? '00' }}</p>

        <span>:</span>

        <span v-if="timestamp.seconds < 10">0</span>
        <p>{{ timestamp.seconds ?? '00' }}</p>
      </li>
    </ul>
  </SimpleModal>
</template>

<style scoped>
div.button-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

button.primary {
  width: 100%;
}

p,
li {
  font-size: 16px;
}

li > * {
  display: inline;
}
</style>
