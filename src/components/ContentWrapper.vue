<template>
  <div
    class="flex flex-col justify-between h-96 px-6 py-4 sm:px-8 sm:py-6 bg-neutral-850 text-neutral-100
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
          v-if="tags"
          class="flex flex-wrap gap-1"
        >
          <TagWrapper
            v-for="tag in tags"
            :key="tag"
            :tag="tag"
          />
        </div>
      </div>
      <p v-show="!showImages">
        {{ description }}
      </p>
      <template v-if="images">
        <ImageWrapper
          v-show="showImages"
          :label="label"
          :images="images"
        />
      </template>
    </div>
    <div class="flex flex-col items-start">
      <template v-if="links">
        <a
          v-for="link of links"
          :key="link.label"
          :href="link.url"
          target="_blank"
          class="text-blue-450"
        >
          {{ link.label }}
        </a>
      </template>
      <button
        v-if="images"
        class="text-blue-450"
        @click="toggleImages"
      >
        <template v-if="!showImages">
          Images
        </template>
        <template v-else>
          Description
        </template>
    </button>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  ref,
  computed
} from 'vue';
import TagWrapper from './TagWrapper.vue';
import ImageWrapper from './ImageWrapper.vue';
import Link from '@/models/Link';

export default defineComponent({
  name: 'ContentWrapper',
  components: {
    TagWrapper,
    ImageWrapper
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
      type: Array as PropType<Link[]>
    },
    images: {
      type: Array as PropType<string[]>
    }
  },
  setup(props) {
    const showImages = ref(false);

    const visitLink = computed<string | undefined>(() => {
      if (props.links) {
        return props.links.find((link: Link) => link.label === 'Visit')?.url;
      }

      return '';
    });

    function toggleImages(): void {
      showImages.value = !showImages.value;
    }

    return {
      visitLink,
      showImages,
      toggleImages
    };
  }
});
</script>
