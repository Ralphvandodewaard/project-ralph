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
      <p v-if="!showImages">
        {{ description }}
      </p>
      <div
        v-if="showImages"
        class="flex flex-col items-center gap-1"
      >
        <a
          :href="shownImageSrc"
          target="_blank"
          class="max-h-44"
        >
          <img
            :src="shownImageSrc"
            :alt="label"
            class="h-full w-auto"
          />
        </a>
        <div class="flex justify-between w-full text-xs">
          <button @click="nextImage(1)">
            previous
          </button>
          <button @click="nextImage(-1)">
            next
          </button>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-start">
      <template v-if="links.length > 0">
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
        v-if="images && images.length > 0"
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
    },
    images: {
      type: Array as PropType<string[]>
    }
  },
  setup(props) {
    const showImages = ref(false);

    const shownImageIndex = ref(0);

    const baseUrl = ref('https://projectralph.com/images');

    const visitLink = computed<string | undefined>(() => {
      if (props.links.length > 0) {
        return props.links.find((link: Link) => link.label === 'Visit')?.url;
      }

      return '';
    });

    const shownImageSrc = computed<string>(() => {
      return props.images ? `${baseUrl.value}/${props.images[shownImageIndex.value]}.png` : '';
    });

    function toggleImages(): void {
      showImages.value = !showImages.value;
    }

    function nextImage(increment: number): void {
      shownImageIndex.value += increment;

      if (shownImageIndex.value > props.images!.length - 1) {
        shownImageIndex.value = 0;
      }

      if (shownImageIndex.value < 0) {
        shownImageIndex.value = props.images!.length - 1;
      }
    }

    return {
      visitLink,
      showImages,
      shownImageSrc,
      toggleImages,
      nextImage
    };
  }
});
</script>
