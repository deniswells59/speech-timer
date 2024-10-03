<template>
  <div v-if="showModal" class="modal-overlay">
    <div class="modal-content">
      <slot></slot>
      <button class="primary" @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showModal: Boolean,
  },
  methods: {
    closeModal() {
      this.$emit('close-modal');
    },
  },
};
</script>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: var(--c-dark-contrast);
  padding: 20px;
  border-radius: 5px;
}

button {
  float: right;
  padding: 0.5rem 2rem;
}
</style>
