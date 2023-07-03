<template>
    <div>
        <NuxtLoadingIndicator color="#fcc203" :height="5" />
        <header class="shadow-md bg-back">
            <nav class="p-4 flex justify-between">
                <h1 class="text-xl font-bold">My cool website!</h1>

                <ul class="ml-auto flex gap-8 font-medium">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/users" class="btn">Users</NuxtLink></li>
                </ul>
            </nav>
        </header>
    </div>

    <div class="text-center p-4">
        <slot />
    </div>
</template>

<script setup>

</script>

<style>
    .router-link-exact-active:not(.btn) {
        @apply text-test;
    }

    .page-enter-active,
    .page-leave-active {
        transition: all 0.4s;
    }
    .page-enter-from,
    .page-leave-to {
        opacity: 0;
        filter: blur(1rem);
    }
</style>