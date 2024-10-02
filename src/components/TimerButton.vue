<script setup>
import { store } from './store';

const props = defineProps({
  name: String,
  totalTime: String,
  timestamps: Array,
});
</script>

<template>
  <button @click="store.startTimer(props.totalTime, props.timestamps)">{{ props.name }}</button>
</template>

<style scoped></style>
