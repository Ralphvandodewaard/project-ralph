<template>
  <div
    class="flex flex-col justify-between gap-6 h-96 px-6 py-4 sm:px-8 sm:py-6 bg-neutral-850 text-neutral-100
    border border-neutral-700 rounded shadow-lg"
  >
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <h2 class="text-3xl font-bold">
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
        <div
          v-if="tags && tags.length > 0"
          class="flex flex-wrap gap-1"
        >
          <TagWrapper
            v-for="tag in tags"
            :key="tag"
            :tag="tag"
          />
        </div>
      </div>
      <p>
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
        class="text-blue-450"
      >
        {{ link.label }}
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import TagWrapper from './TagWrapper.vue';
import Link from '@/models/Link';

export default defineComponent({
  name: 'ContentWrapper',
  components: {
    TagWrapper
  },
  props: {
    label: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    tags: {
      type: Array as PropType<string[]>
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
