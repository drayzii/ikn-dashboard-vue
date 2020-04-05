<!-- /src/components/ErrorMessage.vue -->
<template>
  <transition name="fadeAway">
    <div
      class="card errorMessage"
      v-if="this.error"
    >
      <h2 class="card-title">
        Error !!!
      </h2>
      <p class="px-2 err">
        {{ this.error }}
      </p>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ErrorMessage',
  computed: {
    ...mapGetters(['error']),
  },
};
</script>

<style scoped>

.card-title {
  text-align: left;
  background-color: hsl(0, 80%, 70%);
  margin: 0;
  border-radius: 7px 7px 0 0;
  color: #f3f3f3;
  padding: 5px 10px;
  font-size: 1.17em;
}

.err {
  color: dimgray;
}

.fadeAway-enter-active {
  transition: all 0.3s ease;
}

.fadeAway-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.fadeAway-leave-to,
.fadeAway-enter {
  opacity: 0;
  transform: translateX(100px);
}

.errorMessage {
  position: fixed;
  right: 50px;
  bottom: 50px;
  max-width: 500px;
  min-width: 200px;
}
</style>
