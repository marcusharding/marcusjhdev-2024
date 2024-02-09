<template>
    <button
        class="container toggle"
        aria-label="Toggle color mode"
        title="Toggle color mode"
        @click="toggle(mode)"
    >
        <div
            ref="sun"
            class="sun"
        >
            <Sun />
        </div>
        <div
            ref="moon"
            class="moon visible"
        >
            <div class="star" />
            <div class="star small" />
        </div>
    </button>
</template>

<script setup lang="ts">

// TO DO - Make sun graphic not so naff

// Components
import Sun from '../svg/Sun.vue';

// Modules
import { useGlobalStore } from '~/store/global';
import { storeToRefs } from 'pinia';

// Store
const globalStore = useGlobalStore();
const { mode } = storeToRefs(globalStore);
const { updateMode } = globalStore;

// Refs

const sun = ref();
const moon = ref();

const toggle = (currentMode: string) => {

    if ( currentMode === 'dark' ) updateMode('light');
    if ( currentMode === 'light' ) updateMode('dark');

    sun.value.classList.toggle('visible');
    moon.value.classList.toggle('visible');
}

</script>

<style lang="scss" scoped>

.container {
  width: 42px;
  height: 42px;

  box-sizing: border-box;
  background: none;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 70px;
  right: 15px;

  cursor: pointer;

  @include laptop-up {
    position: relative;
    top: unset;
    right: unset;
  }
}

.moon {
  position: absolute;
  width: 50%;
  height: 50%;

  pointer-events: none;

  background-color: rgba(0, 0, 0, 0);
  border-radius: 50%;
  box-shadow: 9px 3px 0px 0px #f0f0f0;
  opacity: 0;
  transform: scale(0.3) rotate(65deg);
}

.moon.visible {
  pointer-events: auto;

  opacity: 1;
  transform: scale(1) rotate(0deg);
}

.star {
  position: absolute;
  top: 25%;
  left: 5%;
  display: block;
  width: 0px;
  height: 0px;

  border-right: 7px solid rgba(0, 0, 0, 0);
  border-bottom: 5px solid #f0f0f0;
  border-left: 7px solid rgba(0, 0, 0, 0);
  transform: scale(0.55) rotate(35deg);
}

.star:before {
  content: "";

  border-bottom: 5px solid #f0f0f0;
  border-left: 3px solid rgba(0, 0, 0, 0);
  border-right: 3px solid rgba(0, 0, 0, 0);

  position: absolute;
  height: 0;
  width: 0;
  top: -3px;
  left: -5px;
  display: block;

  transform: rotate(-35deg);
}

.star:after {
  content: "";

  position: absolute;
  display: block;
  top: 0px;
  left: -7px;
  width: 0px;
  height: 0px;

  color: red;
  border-right: 7px solid rgba(0, 0, 0, 0);
  border-bottom: 5px solid #f0f0f0;
  border-left: 7px solid rgba(0, 0, 0, 0);
  transform: rotate(-70deg);
}

.moon.visible .star {
  opacity: 0.8;
}

.star.small {
  transform: scale(0.35) rotate(35deg);

  position: relative;
  top: 50%;
  left: 37.5%;
}

.moon.visible .star.small {
  opacity: 0.7;
  transform: scale(0.45) rotate(35deg);
}

.sun {
  opacity: 0;
  
  left: 14px;
  position: absolute;
  top: 8px;
}

.sun.visible {
  opacity: 1;
}

</style>