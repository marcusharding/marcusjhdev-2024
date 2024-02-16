<template>
    <div class="work site-container">
        <ul class="projects">
            <li v-for="(project, index) in projects" :key="index" class="project">
                <ProjectTeaser :data="project.data" />
            </li>
        </ul>
    </div>
</template>

<script setup>

// Components
import ProjectTeaser from '~/components/ui/ProjectTeaser.vue';

// Modules
import { useGlobalStore } from '~/store/global';
import { storeToRefs } from 'pinia';
import { useHead } from 'unhead';

// Store
const globalStore = useGlobalStore();
const { projects } = storeToRefs(globalStore);

useHead({
    title: 'MARCUSJHDEV',
    meta: [
        {
            name: 'description',
            content: 'My page description',
        },
    ],
});

</script>

<style lang="scss" scoped>

.work {
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 250px 0 150px 0;
}

.work .projects {
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
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