<template>
  <div class="flex flex-col gap-4 h-96 px-8 py-6 bg-cloud rounded shadow-lg text-primary">
    <h2 class="text-4xl font-bold">
      {{ label }}
    </h2>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ContentWrapper',
  props: {
    label: {
      type: String
    }
  }
});
</script>
