<template>
    <div class="project-teaser">
        <p class="title bold">{{ data.title }}</p>
        <PrismicRichText :field="data.excerpt" class="excerpt" />
    </div>
</template>

<script setup lang="ts">

// Props
const props = defineProps({ 
    data: { type: Object, required: true }
});

</script>

<style lang="scss" scoped>

.project-teaser {
    width: 100%;
    height: 150px;
    padding: 20px;

    border-radius: 5px;
    background-color: rgba(57,67,76,.4);
}

.project-teaser .title {
    color: color(TrueWhite);

    margin-bottom: 20px;
}

.project-teaser .excerpt {
    color: color(TrueWhite);
}

</style>