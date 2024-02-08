<template>
    <p class="logo uppercase bold" :class="mode">
        marcusjh<span class="thin">dev</span>
    </p>
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

.logo {
    color: color(TrueWhite);
    font-size: rem(25);
}

.logo.light {
    color: color(OffBlack);
}

</style>