<template>
    <div 
        ref="index" 
        class="index site-container"
        :class="mode"
    >
        <p class="greeting">
            {{ timeOfDay() }} my name is Marcus.
        </p>
        <p class="tagline">
            I am a senior developer working full time at 
            <a
                href="https://thinkingbox.com/"
                rel="noopener"
                target="_blank"
            >
                Thinkingbox
            </a>.
        </p>
    </div>
</template> 

<script setup lang="ts">

// Utils
import { timeOfDay } from '~/assets/js/utils';

// Modules
import { useGlobalStore } from '~/store/global';
import { storeToRefs } from 'pinia';

// Store
const globalStore = useGlobalStore();
const { mode }    = storeToRefs(globalStore);

</script>

<style lang="scss" scoped>

.index {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 10%;
}

.index .greeting {
    margin-bottom: 20px;
}

.index .greeting,
.index .tagline {
    font-size: rem(40);
    line-height: 140%;
    max-width: 710px;
    color: color(TrueWhite);
}

.index .tagline a {
    color: color(HotPink);
    position: relative;
    padding-bottom: 2px;

    &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        bottom: 0;
        left: 2px;
        background-color: color(HotPink);
        opacity: 0.5;
    }
}

.index.light .greeting,
.index.light .tagline {
    color: color(OffBlack);
}

</style>