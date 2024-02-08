<template>
    <nav class="nav" :class="mode">
        <ul>
            <li>Work</li>
            <li>About</li>
            <li>Blog</li>
        </ul>
    </nav>
</template>

<script setup lang="ts">

// Modules
import { useGlobalStore } from '~/store/global';
import { storeToRefs } from 'pinia';

// Store
const globalStore = useGlobalStore();
const { mode }    = storeToRefs(globalStore);

</script>

<style lang="scss" scoped>

.nav {
    position: absolute;
    left: calc(50% - 100px);
    width: 200px;
    display: flex;
    justify-content: center;
}

.nav ul {
    display: flex;
}

.nav ul li {
    color: color(TrueWhite);
}

.nav.light ul li {
    color: color(OffBlack);
}

.nav ul li:not(:last-child) {
    margin-right: 20px;

    &:after {
        content: "/";
        padding-left: 20px;
        color: color(HotPink);
        opacity: 0.7;
    }
}

.nav ul li:hover {
    color: color(HotPink);
}

</style>