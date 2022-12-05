<template>
  <div class="flex flex-col justify-between gap-4 w-90 h-96 px-8 py-6 bg-neutral-850 text-neutral-100 border border-neutral-700 rounded shadow-lg">
    <div class="flex flex-col gap-4">
      <h2 class="text-4xl font-bold">
        <a
          v-if="visitLink"
          :href="visitLink"
          target="_blank"
        >
          {{ label }}
        </a>
        <template v-else>
          {{ label }}
        </template>
      </h2>
      <p class="text-lg">
        {{ description }}
      </p>
    </div>
    <div
      v-if="links.length > 0"
      class="flex flex-col items-start"
    >
      <a
        v-for="link of links"
        :key="link.label"
        :href="link.url"
        target="_blank"
        class="text-lg leading-8 text-blue-450 underline"
      >
        {{ link.label }}
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
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
      type: Array as PropType<Link[]>,
      required: true
    }
  },
  setup(props) {
    const visitLink = computed<string | undefined>(() => {
      if (props.links.length > 0) {
        return props.links.find((link: Link) => link.label === 'Visit')?.url;
      }

      return '';
    });

    return {
      visitLink
    };
  }
});
</script>
