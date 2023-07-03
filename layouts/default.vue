<template>
    <div>
        <NuxtLoadingIndicator color="#fcc203" height="5" />
        <header class="shadow-md bg-back">
            <nav class="container p-4 flex justify-between">
                <h1 class="text-xl font-bold">My cool website!</h1>

                <ul class="ml-auto flex gap-8 font-medium">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/users" class="btn">Users</NuxtLink></li>
                </ul>
            </nav>
        </header>
    </div>

    <div class="container text-center p-4">
        <slot />
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .router-link-exact-active:not(.btn) {
        @apply text-test;
    }
</style>