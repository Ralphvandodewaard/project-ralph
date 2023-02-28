<template>
  <div class="flex flex-col items-center gap-1">
    <a
      :href="imageSrc"
      target="_blank"
      class="max-h-44"
    >
      <img
        :src="imageSrc"
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
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  ref,
  computed
} from 'vue';

export default defineComponent({
  name: 'ImageWrapper',
  props: {
    label: {
      type: String,
      required: true
    },
    images: {
      type: Array as PropType<string[]>,
      required: true
    }
  },
  setup(props) {
    const baseUrl = 'https://projectralph.com/images';

    const currentImageIndex = ref(0);

    const imageSrc = computed<string>(() => {
      return `${baseUrl}/${props.images[currentImageIndex.value]}.png`;
    });

    function nextImage(increment: number): void {
      currentImageIndex.value += increment;

      if (currentImageIndex.value > props.images.length - 1) {
        currentImageIndex.value = 0;
      }

      if (currentImageIndex.value < 0) {
        currentImageIndex.value = props.images.length - 1;
      }
    }

    return {
      imageSrc,
      nextImage
    };
  }
});
</script>
