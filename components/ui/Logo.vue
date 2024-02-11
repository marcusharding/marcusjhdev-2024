<template>
    <p
        ref="logo"
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
import gsap from 'gsap';

// Store
const globalStore = useGlobalStore();
const { mode, navOpen } = storeToRefs(globalStore);

// Refs
const logo = ref();

onMounted (() => {

    gsap.to(
        logo.value,
        {
            duration: 0.5,
            scale: 1,
            opacity: 1,
            ease: "back.inOut(1)"
        }
    );
});

</script>

<style lang="scss" scoped>

.logo {
    color: color(TrueWhite);

    scale: 0;
    
    font-size: rem(25);
}

.logo.light {
    color: color(OffBlack);
}

.logo.open {
    position: absolute;
    top: 20px;
    left: 20px;
}

</style>