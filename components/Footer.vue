<template>
    <div class="footer" :class="mode">
        <a href="mailto:marcus@marcusjh..co.uk">marcus@marcusjh.co.uk</a>
    </div>
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

.footer {
    position: absolute;
    width: 90%;
    left: 5%;
    bottom: 0;
    height: 60px;
}

.footer a {
    position: absolute;
    bottom: 20px;
    text-decoration: none;
    color: color(TrueWhite);
    font-family: 'Montserrat', sans-serif;
    font-size: rem(16);
    font-weight: 400;
    line-height: 26px;
    width: 200px;
    left: calc(50% - 100px);

    &:hover {
        color: color(HotPink);
    }
}

.footer.light a {
    color: color(OffBlack);

    &:hover {
        color: color(HotPink);
    }
}

</style>