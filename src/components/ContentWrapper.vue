<template>
  <div class="flex flex-col justify-between gap-4 w-90 h-96 px-8 py-6 bg-primary text-cloud rounded shadow-lg">
    <div class="flex flex-col gap-4">
      <h2 class="text-4xl font-bold">
        {{ label }}
      </h2>
      <p class="text-lg">
        {{ description }}
      </p>
    </div>
    <div
      v-if="links"
      class="flex flex-col items-start"
    >
      <a
        v-for="link of links"
        :key="link.label"
        :href="link.url"
        target="_blank"
        class="text-lg leading-8 text-link underline"
      >
        {{ link.label }}
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Link from '@/models/Link';

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
    },
    links: {
      type: Array as PropType<Link[]>
    }
  }
});
</script>
