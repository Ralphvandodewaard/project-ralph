<template>
  <div
    :style="{ 'margin-top': contentMargin }"
    class="flex flex-grow flex-col gap-8 max-w-6xl pb-16"
  >
    <ContentWrapper
      label="Hi, I'm Ralph"
      description="I'm a front-end developer from the Netherlands that likes to build websites and games."
      :links="personalLinks"
    />
    <div class="flex flex-wrap gap-8">
      <ContentWrapper
        v-for="project in orderedProjects"
        :key="project.label"
        :label="project.label"
        :description="project.description"
        :links="project.links"
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
import Link from '@/models/Link';
import Project from '@/models/Project';

export default defineComponent({
  name: 'HomeView',
  components: {
    ContentWrapper
  },
  setup() {
    const personalLinks: Link[] = [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/ralphvandodewaard/' },
      { label: 'Github', url: 'https://github.com/Ralphvandodewaard' },
      { label: 'Resume', url: '' }
    ];

    const orderedProjects: Project[] = projects.reverse();

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
      orderedProjects,
      contentMargin
    };
  }
});
</script>
