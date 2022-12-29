<template>
  <div class="w-fit px-3 bg-green-300 text-neutral-950 text-xs rounded">
    {{ tag }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TagWrapper',
  props: {
    tag: {
      type: String,
      required: true
    }
  }
});
</script>
