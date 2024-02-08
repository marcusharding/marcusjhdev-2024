<template>
    <div :class="mode">
        <Header />
        <slot />
        <Footer />
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
const { mode }    = storeToRefs(globalStore);

</script>

<style lang="scss" scoped>

.dark {
    background-color: color(OffBlack);
}

.light {
    background-color: #F5F5F5;
}

</style>
