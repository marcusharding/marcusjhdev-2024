<template>
    <header class="header site-container">
        <NuxtLink to="/">
            <Logo />
        </NuxtLink>
        <Nav />
        <ModeToggle />
    </header>
</template>

<script setup lang="ts">

// Components
import Logo from "./ui/Logo.vue";
import ModeToggle from "./ui/ModeToggle.vue";
import Nav from "./Nav.vue";

</script>

<style lang="scss" scoped>

.header {
    padding-top: 40px;
    display: flex;
    justify-content: space-between;
}

</style>