<template>
    <div class="toggle" :class="mode" @click="toggle(mode)">
        <div class="switch"></div>
        <div class="sun"></div>
        <div class="moon"></div>
    </div>
</template>

<script setup lang="ts">

// Modules
import { useGlobalStore } from '~/store/global';
import { storeToRefs } from 'pinia';

// Store
const globalStore = useGlobalStore();
const { mode } = storeToRefs(globalStore);
const { updateMode } = globalStore;

const toggle = (currentMode: string) => {

    if ( currentMode === 'dark' ) updateMode('light');
    if ( currentMode === 'light' ) updateMode('dark');
}

</script>

<style lang="scss" scoped>

.toggle {
    position: relative;

    width: 80px;
    height: 40px;

    border-radius: 20px;
    background-color: color(HotPink);

    cursor: pointer;
}

.toggle.dark {
    background-color: color(HotPink);
}

.toggle.light {
    background-color: color(OffBlack);
}

.toggle .switch {
    position: absolute;
    top: 5px;

    background-color: color(TrueWhite);

    width: 30px;
    height: 30px;
    border-radius: 50%;
}

.toggle .moon {
    position: absolute;
    margin: auto;
    top: 0;
    right: 15px;
    bottom: 7px;
    width: 20px;
    height: 20px;
    background-color: transparent;
    border-radius: 50%;
    box-shadow: 5px 3px 0px 0px #fff; 
}

.toggle.dark .switch {
    left: unset;
    right: 5px;
}

.toggle.light .switch {
    left: 5px;
    right: unset;
}

</style>