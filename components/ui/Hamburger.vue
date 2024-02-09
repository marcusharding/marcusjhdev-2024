<template>
    <div class="hamburger" :class="{open: navOpen}" @click="click($event.target)">
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>

<script setup lang="ts">

// Modules
import { useGlobalStore } from '~/store/global';
import { storeToRefs } from 'pinia';

// Store
const globalStore = useGlobalStore();
const { navOpen } = storeToRefs(globalStore);
const { updateNavOpen } = globalStore;

// Methods
const click = (target: any) => { 

    target.classList.toggle('open');
    updateNavOpen(!navOpen.value);
}

</script>

<style lang="scss" scoped>

span { pointer-events: none; }

.hamburger {
    width: 35px;
    height: 30px;

    margin: 10px 10px;

    position: relative;

    cursor: pointer;

    display: inline-block;

    @include laptop-up {
        display: none;
    }
}

.hamburger.open {
    position: absolute;
    top: 10px;
    right: 10px;
}

.hamburger span { 
    background-color: color(TrueWhite);

    position: absolute;

    border-radius: 2px;

    transition: .3s cubic-bezier(.8, .5, .2, 1.4);

    width: 100%;
    height: 4px;
}

.hamburger span:nth-child(1) {
    top:0px;
    left: 0px;
}

.hamburger span:nth-child(2) {
    top:13px;
    left: 0px;
}

.hamburger span:nth-child(3) {
    bottom:0px;
    left: 0px;
}

.hamburger:not(.open):hover span:nth-child(1) { transform: scaleX(.8); }

.hamburger:not(.open):hover span:nth-child(2) { transform: scaleX(.5); }

.hamburger:not(.open):hover span:nth-child(3) { transform: scaleX(.8); }

.hamburger.open span:nth-child(1) { top: 13px; }

.hamburger.open span:nth-child(2) { top:13px; }

.hamburger.open span:nth-child(3) { top: 13px; }

</style>