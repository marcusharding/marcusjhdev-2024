<template>
    <div 
        ref="index" 
        class="index"
    >
        <p>{{ timeOfDay() + 'My name is' }}</p>
    </div>
</template> 

<script setup lang="ts">

// Utils
import { timeOfDay } from '~/assets/js/utils';

</script>

<style lang="scss" scoped></style>