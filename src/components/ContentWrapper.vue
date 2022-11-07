<template>
  <div class="flex flex-col gap-4 w-90 h-96 px-8 py-6 bg-primary text-cloud rounded shadow-lg">
    <h2 class="text-4xl font-bold">
      {{ label }}
    </h2>
    <p class="text-lg">
      {{ description }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ContentWrapper',
  props: {
    label: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
});
</script>
