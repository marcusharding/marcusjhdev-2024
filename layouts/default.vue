<template>
    <div class="default" :class="mode">
        <template v-if="!loading">
            <Header :menu="menu" />
            <slot />
            <Footer />
        </template>
    </div>
</template>

<script setup lang="ts">

// Components
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

// Modules
import { useGlobalStore } from '~/store/global';
import { storeToRefs } from 'pinia';

// Store
const globalStore = useGlobalStore();
const { mode } = storeToRefs(globalStore);
const { updateNavOpen } = globalStore;

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

        const data = await client.getSingle('header');
        menu.value = data.data.menu;
        loading.value = false;

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
