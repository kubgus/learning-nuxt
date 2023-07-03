<template>
    <div>
        <h1 class="text-3xl">About Us</h1>
        <p>This is a test website because yes!</p>
        <p>Give us $!</p>
        <p class="text-xl mt-2">{{ world }}</p>
        <p class="text-xl mt-2">{{ sqrt }}</p>
    </div>
</template>

<script setup>
    const { data: world } = await useFetch("/api/world?name=John", {
        method: "post",
        body: { age: 23 },
    });

    const { data: sqrt } = await useFetch("/api/sqrt/10");
</script>

<style scoped>

</style>