<template>
    <nav
        class="nav"
        :class="{open: navOpen}, mode"
    >
        <ul>
            <li v-for="(link, index) in menu" :key="link.label">
                <prismic-link :field="link.link" :aria-label="`${link.label}`">
                    {{ link.label }}
                </prismic-link>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">

// Modules
import { useGlobalStore } from '~/store/global';
import { storeToRefs } from 'pinia';

// Store
const globalStore = useGlobalStore();
const { mode, navOpen } = storeToRefs(globalStore);

// interface FlashInterface {
//     label: string,
//     link: object
// }

// Props
const props = defineProps({ 
    menu: { type: Array, required: true }
});

</script>

<style lang="scss" scoped>

.nav {
    position: absolute;
    left: calc(50% - 100px);
    width: 200px;

    display: flex;
    justify-content: center;
    display: none;

    @include laptop-up {
        display: block;
    }
}

.nav ul {
    display: flex;
}

.nav ul li {
    color: color(TrueWhite);

    cursor: pointer;
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

.nav ul li a {
    font-size: rem(20);

    color: color(TrueWhite);

    &:hover {
        color: color(HotPink);
    }
}

.nav ul li a.router-link-active {
    color: color(HotPink);
}

.nav.light ul li a {
    color: color(OffBlack);
}

.nav.open {
    display: block;
    width: 100%;
    left: unset;
    padding-left: 20px;
}

.nav.open ul {
    flex-direction: column;
}

</style>