<template>
  <div
    :style="{ 'margin-top': contentMargin }"
    class="flex flex-col gap-8 max-w-6xl pb-16"
  >
    <div class="grid grid-cols-1 mobile:grid-cols-2 tablet:grid-cols-3 gap-8">
      <ContentWrapper
        label="Hi, I'm Ralph"
        description="I'm a front-end developer from the Netherlands that likes to build websites and games."
        :links="personalLinks"
      />
    </div>
    <div class="grid grid-cols-1 mobile:grid-cols-2 tablet:grid-cols-3 gap-8">
      <ContentWrapper
        v-for="project in projectsReversed"
        :key="project.label"
        :label="project.label"
        :description="project.description"
        :tags="project.tags"
        :links="project.links"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  Ref,
  ref,
  computed,
  onMounted,
  onUnmounted
} from 'vue';
import axios from 'axios';
import ContentWrapper from '@/components/ContentWrapper.vue';
import Link from '@/models/Link';
import Project from '@/models/Project';

export default defineComponent({
  name: 'HomeView',
  components: {
    ContentWrapper
  },
  setup() {
    const projects: Ref<Project[]> = ref([]);

    const projectsReversed = computed<Project[]>(() => {
      return [...projects.value].reverse();
    });

    const personalLinks: Link[] = [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/ralphvandodewaard/' },
      { label: 'Github', url: 'https://github.com/Ralphvandodewaard' },
      { label: 'Resume', url: 'https://projectralph.com/files/ralph_van_dodewaard_resume.pdf' }
    ];

    const contentMargin = ref('');

    function setContentMargin(): void {
      contentMargin.value = `${(window.innerHeight / 2) - 192}px`;
    }

    onMounted(async() => {
      window.addEventListener('resize', setContentMargin);
      setContentMargin();

      const response = await axios.get('https://projectralph.com/files/getprojects.php');
      projects.value = response.data;
    });

    onUnmounted(() => {
      window.removeEventListener('resize', setContentMargin);
    });

    return {
      projectsReversed,
      personalLinks,
      contentMargin
    };
  }
});
</script>
