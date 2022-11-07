<template>
  <a
    :href="link"
    :target="link === '#' ? '_self' : '_blank'"
    class="py-1 text-lg text-primary-light underline rounded-sm hover:bg-primary-light hover:bg-opacity-20 duration-100"
  >
    {{ label }}
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LinkWrapper',
  props: {
    link: {
      type: String,
      default: '/'
    },
    label: {
      type: String
    }
  }
});
</script>
