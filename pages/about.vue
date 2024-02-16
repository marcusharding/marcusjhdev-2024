<template>
    <div class="about"></div>
</template>

<script setup>

// Modules
import { useHead } from 'unhead';

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

.about {
    height: calc(100vh - $footer-height);
}

</style>