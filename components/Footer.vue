<template>
    <div
        class="footer"
        :class="mode"
    >
        <div class="container">
            <ul class="social">
                <li>
                    <a
                        class="indented flex"
                        href="https://www.github.com/marcusharding"
                        rel="noopener"
                        target="_blank"
                    ><Github />Github</a>
                </li>
                <li>
                    <a
                        class="indented flex"
                        href="https://www.instagram.com/marcusjhdev/"
                        rel="noopener"
                        target="_blank"
                    ><Instagram />Instagram</a>
                </li>
                <li>
                    <a
                        class="indented flex"
                        href="https://www.linkedin.com/in/marcusjh/"
                        rel="noopener"
                        target="_blank"
                    ><LinkedIn />LinkedIn</a>
                </li>
            </ul>
            <a
                class="mailto"
                href="mailto:marcus@marcusjh..co.uk"
            >marcus@marcusjh.co.uk</a>
        </div>
    </div>
</template>

<script setup lang="ts">

// Components
import Github from './svg/Github.vue';
import Instagram from './svg/Instagram.vue';
import LinkedIn from './svg/LinkedIn.vue';

// Modules
import { useGlobalStore } from '~/store/global';
import { storeToRefs } from 'pinia';

// Store
const globalStore = useGlobalStore();
const { mode }    = storeToRefs(globalStore);

</script>

<style lang="scss" scoped>

.footer {
    position: relative;

    width: 90%;
    left: 5%;
    height: $footer-height;
}

.footer .mailto {
    position: absolute;

    bottom: 20px;
    width: 200px;

    text-decoration: none;
    color: color(TrueWhite);

    font-family: 'Montserrat', sans-serif;
    font-size: rem(16);
    font-weight: 400;
    line-height: 26px;

    &:hover {
        color: color(HotPink);
    }
}

.footer .social {
    position: absolute;
    width: 100px;
    bottom: 50px;

    display: flex;
    align-items: center;
    justify-content: center;
}

.footer .social li:not(:last-child) {
    margin-right: 10px;
}

</style>