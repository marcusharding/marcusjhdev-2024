<template>
    <div class="loading">
        <p
            ref="logo"
            class="logo uppercase bold fade-in"
        >
            marcusjh<span class="thin">dev</span>
        </p>
    </div>
</template>

<script setup>

// Modules
import gsap from 'gsap';

// Refs
const logo = ref();

onMounted (() => {

    setTimeout(() => {

        gsap.to(
            logo.value,
            {
                duration: 0.7,
                scale: 0,
                opacity: 0,
                ease: "back.inOut(3)",
                onComplete: () => { eventBus.$emit( "loadingComplete" )}
            }
        );

    }, 2000);
    
});

</script>

<style lang="scss" scoped>

.loading {
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
}

.loading .logo {
    color: color(TrueWhite);

    font-size: rem(40);
}

</style>