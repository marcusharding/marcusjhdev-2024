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
            I am a Senior Developer working full time at 
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

<script setup>

// Utils
import { timeOfDay } from '~/assets/js/utils';

// Modules
import { useGlobalStore } from '~/store/global';
import { storeToRefs } from 'pinia';
import { useHead } from 'unhead';

// Store
const globalStore = useGlobalStore();
const { mode }    = storeToRefs(globalStore);

useHead({
    title: 'MARCUSJHDEV',
    meta: [
        {
            name: 'description',
            content: 'My page description',
        },
    ],
});

</script>

<style lang="scss" scoped>

.index {
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}

.index .greeting {
    margin-bottom: 20px;
    max-width: 740px;
}

.index .tagline {
    max-width: 710px;
}

.index .greeting,
.index .tagline {
    font-size: rem(40);
    line-height: 140%;
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