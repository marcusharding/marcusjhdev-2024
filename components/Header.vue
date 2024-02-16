<template>
    <header class="header" :class="{open: navOpen}, mode">
        <NuxtLink to="/">
            <Logo />
        </NuxtLink>
        <Nav :menu="menu" />
        <Hamburger />
        <!-- <ModeToggle /> -->
    </header>
</template>

<script setup>

// Components
import Logo from "./ui/Logo.vue";
import ModeToggle from "./ui/ModeToggle.vue";
import Nav from "./ui/Nav.vue";
import Hamburger from "./ui/Hamburger.vue";

// Modules
import { useGlobalStore } from '~/store/global';
import { storeToRefs } from 'pinia';

// Store
const globalStore = useGlobalStore();
const { navOpen, mode } = storeToRefs(globalStore);

// Props
const props = defineProps({ menu: { type: Array, default: () => [] }});

</script>

<style lang="scss" scoped>

.header {
    padding-top: 10px;
    left: 5%;

    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: color(OffBlack);

    width: 100%;
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;

    @include laptop-up {
        padding-top: 20px;
        padding-bottom: 20px;
    }
}

.header.light {
    background-color: color(OffWhite);
}

.header.open {
    left: unset;
    width: 100%;
    height: 100vh;
    background-color: color(OffBlack);
    z-index: 100;
    max-width: unset;
}

</style>