<template>
    <div class="work site-container">
        <ul class="projects">
            <li v-for="(project, index) in projects" :key="index" class="project">
                <ProjectTeaser :data="project.data" />
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">

// Components
import ProjectTeaser from '~/components/ui/ProjectTeaser.vue';

// Modules
import { useGlobalStore } from '~/store/global';
import { storeToRefs } from 'pinia';

// Store
const globalStore = useGlobalStore();
const { projects } = storeToRefs(globalStore);

</script>

<style lang="scss" scoped>

.work {
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
}

.work .projects {
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    // justify-content: space-around;
}

.work .projects .project {
    width: 100%;

    @include tablet-up {
        width: 45%;
    }

    @include laptop-up {
        width: 32%;
    }
}

.work .projects .project {
    margin-bottom: 20px;

    @include tablet-up {
        margin-right: 20px;
    }
}

.work .projects .project:last-child {
    @include laptop-up {
        margin-right: 0;
    }
}

</style>