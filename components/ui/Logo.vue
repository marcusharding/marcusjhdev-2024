<template>
    <p
        class="logo uppercase bold"
        :class="{open: navOpen}, mode"
    >
        marcusjh<span class="thin">dev</span>
    </p>
</template>

<script setup lang="ts">

// Modules
import { useGlobalStore } from '~/store/global';
import { storeToRefs } from 'pinia';

// Store
const globalStore = useGlobalStore();
const { mode, navOpen } = storeToRefs(globalStore);

</script>

<style lang="scss" scoped>

.logo {
    color: color(TrueWhite);
    
    font-size: rem(25);

    &:hover {
        color: color(HotPink);
    }
}

.logo.open {
    position: absolute;
    top: 20px;
    left: 20px;
}

</style>