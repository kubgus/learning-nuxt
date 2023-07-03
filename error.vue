<template>
    <div class="mt-7 p-5 max-w-sm mx-auto text-center">
        <p class="text-7xl font-bold">{{ error.statusCode }}</p>
        <p class="mt-7 text-3xl">Ooops...</p>
        <p class="mt-7 text-xl">{{ error.message }}</p>
        <button @click="handleClearError" class="btn mt-7">Take me home!</button>
    </div>
</template>

<script setup>
    defineProps(["error"]);

    const handleClearError = () => clearError({ redirect: "/"});
</script>

<style scoped>

</style>