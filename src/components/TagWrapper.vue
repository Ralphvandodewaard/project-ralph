<template>
  <div
    :class="getTagColors"
    class="w-fit px-2 text-xs rounded"
  >
    {{ tag }}
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'TagWrapper',
  props: {
    tag: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const getTagColors = computed<string>(() => {
      const tag = props.tag.toLowerCase();

      if (tag.includes('angular')) {
        return 'bg-angular text-neutral-100';
      } else if (tag.includes('vue')) {
        return 'bg-vue text-neutral-950';
      } else if (tag.includes('typescript')) {
        return 'bg-typescript text-neutral-100';
      } else if (tag.includes('tailwind')) {
        return 'bg-tailwind text-neutral-950';
      } else if (tag.includes('pokemon')) {
        return 'bg-pokemon text-neutral-100';
      } else if (tag.includes('riot')) {
        return 'bg-riot text-neutral-100';
      } else if (tag.includes('php')) {
        return 'bg-php text-neutral-100';
      } else if (tag.includes('mysql')) {
        return 'bg-mysql text-neutral-100';
      } else if (tag.includes('c#')) {
        return 'bg-csharp text-neutral-100';
      }

      return 'bg-black text-neutral-100';
    });

    return {
      getTagColors
    };
  }
});
</script>
