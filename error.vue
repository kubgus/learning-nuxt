<template>
    <div class="mt-7 p-5 max-w-sm mx-auto text-center">
        <p class="text-7xl font-bold">{{ error.statusCode }}</p>
        <p class="mt-7 text-3xl">Ooops...</p>
        <p class="mt-7 text-xl">{{ error.message }}</p>
        <button @click="handleClearError" class="flex flex-col btn mt-7 mx-auto">
            <i class="material-icons mx-auto text-5xl">home</i>
            <span>Take me home!</span>
        </button>
    </div>
</template>

<script setup>
    useHead({
        title: "My cool error page!",
        meta: [
            { name:"description", content: "This is an error page" }
        ]
    });

    defineProps(["error"]);

    const handleClearError = () => clearError({ redirect: "/"});
</script>

<style scoped>

</style>