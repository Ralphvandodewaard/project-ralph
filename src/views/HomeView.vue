<template>
  <div class="grid grid-cols-3 gap-8 w-full max-w-6xl">
    <ContentWrapper label="Hi, I'm Ralph">
      <div class="flex flex-col gap-6">
        <p class="text-lg">
          I'm a front-end developer from the Netherlands that likes to build websites and games.
        </p>
        <div class="flex flex-col">
          <LinkWrapper
            v-for="link in personalLinks"
            :key="link.label"
            :link="link.link"
            :label="link.label"
          />
        </div>
      </div>
    </ContentWrapper>
    <div
      class="col-span-2 grid grid-cols-2 gap-8"
      @mouseleave="activeProject = null"
    >
      <ContentWrapper label="Projects">
        <div class="flex flex-col overflow-y-scroll">
          <LinkWrapper
            v-for="project in projects"
            :key="project.title"
            :link="project.link"
            :label="project.title"
            @mouseenter="activeProject = project"
          />
        </div>
      </ContentWrapper>
      <ContentWrapper
        :class="activeProject ? 'opacity-100' : 'opacity-0'"
        class="duration-200"
        :label="activeProject ? activeProject.title : ''"
      >
        <div>
          <p
            v-if="activeProject"
            class="text-lg"
          >
            {{ activeProject.description }}
          </p>
        </div>
      </ContentWrapper>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  Ref
} from 'vue';
import ContentWrapper from '@/components/ContentWrapper.vue';
import LinkWrapper from '@/components/LinkWrapper.vue';

export interface Project {
  title: string,
  link: string,
  description?: string,
}

export default defineComponent({
  name: 'HomeView',
  components: {
    ContentWrapper,
    LinkWrapper
  },
  setup() {
    const personalLinks: { label: string, link: string }[] = [
      { label: 'LinkedIn', link: 'https://www.linkedin.com/in/ralphvandodewaard/' },
      { label: 'Github', link: 'https://github.com/Ralphvandodewaard' },
      { label: 'Resume', link: '' }
    ];

    const projects: Project[] = [
      {
        title: 'Urfbuilds',
        link: 'https://urfbuilds.com/',
        description: 'Urfbuilds is a website where you can find and submit champion builds for the URF game mode.'
      },
      {
        title: 'League-ranked',
        link: '/league-ranked',
        description: 'League-ranked is a personal website where we track the match history and various stats of our ranked team.'
      },
      {
        title: 'League-quotes',
        link: '/league-quotes',
        description: 'League-quotes is a website where you have to guess which champion says a certain quote.'
      },
      {
        title: 'League-abilities',
        link: '/league-abilities',
        description: 'League-abilities is a website where you have to guess which champion a certain ability belongs to.'
      },
      {
        title: 'Pokemon-binder',
        link: '/pokemon-binder',
        description: 'Pokemon-binder is a website where you can view and filter card sets in various binder sizes.'
      },
      {
        title: 'Pokemon-clicker',
        link: '',
        description: 'Pokemon-clicker is a browser game inspired by Cookie Clicker, where you go on a Pokemon adventure by idling and clicking.'
      },
      {
        title: 'Chronobreak',
        link: '',
        description: 'Chronobreak is a challenging 2D platformer game where you can manipulate time to make your way through various enemies and puzzles.'
      },
      {
        title: 'Sub',
        link: '',
        description: 'Sub is a 3D platformer game with a meaningful story, where a mysterious light from above will guide you through the darkness.'
      },
      {
        title: 'Fuji Feet',
        link: '',
        description: 'Fuji Feet is a chaotic arcade game where you compete against other players and try to avoid the flowing lava by standing on the correct tiles.'
      },
      {
        title: 'VR Detective Training',
        link: '',
        description: 'A Virtual Reality training built in collaboration with the Politie Amsterdam, with the goal of giving police detectives the opportunity to virtually practice working at crime scenes.'
      },
      {
        title: 'Boten',
        link: '',
        description: 'Boten is a simple card game where you have to guess what kind of card you are going to draw next.'
      }
    ];

    const activeProject: Ref<null | Project> = ref(null);

    return {
      personalLinks,
      projects,
      activeProject
    };
  }
});
</script>
