<template>
    <div class="default" :class="mode, loading">

        <template v-if="!loading">

            <SkipLink />
            <Header :menu="menu" />

            <main
                id="main"
                class="main" 
                aria-label='Main content' 
                tabindex="-1"
            >
                <slot />
            </main>

            <Footer />

        </template>
    </div>
</template>

<script setup>

// Components
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import SkipLink from "~/components/ui/SkipLink.vue";

// Modules
import { useGlobalStore } from '~/store/global';
import { storeToRefs } from 'pinia';
import { createHead } from 'unhead';

// Create a global head instance
const head = createHead()

// Store
const globalStore = useGlobalStore();
const { mode, projects } = storeToRefs(globalStore);
const { updateNavOpen, updateProjects } = globalStore;

// Prismic
const { client } = usePrismic();

// Reactive data
const menu = ref();
const loading = ref(true);
const route = useRoute();

watch(() => route.fullPath, () => {
    updateNavOpen(false);
});

onMounted ( async () => {

    try {

        const header = await client.getSingle('header');
        
        menu.value = header.data.menu;
        loading.value = false;

        const { data: projects } = await useAsyncData("posts", () => client.getAllByType("project"));
        updateProjects(projects);

    } catch (e) {}
});

</script>

<style lang="scss" scoped>

.default {
    min-height: 100vh;
}

.dark {
    background-color: color(OffBlack);
}

.light {
    background-color: #F5F5F5;
}

</style>
