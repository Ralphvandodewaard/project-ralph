<template>
  <div
    :style="{ 'margin-top': contentMargin }"
    class="flex flex-grow flex-col gap-8 max-w-6xl pb-16"
  >
    <ContentWrapper
      label="Hi, I'm Ralph"
      description="I'm a front-end developer from the Netherlands that likes to build websites and games."
    />
    <div class="flex flex-wrap gap-8">
      <ContentWrapper
        v-for="project in projects"
        :key="project.label"
        :label="project.label"
        :description="project.description"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
  onUnmounted
} from 'vue';
import ContentWrapper from '@/components/ContentWrapper.vue';
import projects from '@/assets/projects';

export default defineComponent({
  name: 'HomeView',
  components: {
    ContentWrapper
  },
  setup() {
    const personalLinks: { label: string, link: string }[] = [
      { label: 'LinkedIn', link: 'https://www.linkedin.com/in/ralphvandodewaard/' },
      { label: 'Github', link: 'https://github.com/Ralphvandodewaard' },
      { label: 'Resume', link: '' }
    ];

    const contentMargin = ref('');

    function setContentMargin(): void {
      contentMargin.value = `${(window.innerHeight / 2) - 192}px`;
    }

    onMounted(() => {
      window.addEventListener('resize', setContentMargin);
      setContentMargin();
    });

    onUnmounted(() => {
      window.removeEventListener('resize', setContentMargin);
    });

    return {
      personalLinks,
      projects,
      contentMargin
    };
  }
});
</script>
