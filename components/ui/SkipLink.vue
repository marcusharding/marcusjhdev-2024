<template>
    <a class="skip-link semi-bold" href="#main">Skip to main content</a>
</template>

<script setup></script>

<style lang="scss" scoped>

.skip-link {
    display: block;
    position: absolute;
    top: -50px;
    right: 55px;
    left: auto;

    z-index: 100;

    padding: 10px 30px;
    
    background-color: color(HotPink);
    color: color(TrueWhite);
    opacity: 0;
    font-size: rem(16);
    font-family: 'Montserrat', sans-serif;

    border-radius: 5px;

    z-index: 1000;

    transition: all 0.5s ease;
}

.skip-link:focus {
    top: 20px;
    
    opacity: 1;
}

</style>