<template>
    <div class="card text-center">
        <NuxtLink :to="`/users/${user.id}`">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="User Icon" class="icon">
            <p class="font-bold m-4 truncate">{{ user.username }}</p>
        </NuxtLink>
    </div>
</template>

<script setup>
    const { user } = defineProps(["user"]);
</script>

<style scoped>
    .icon {
        @apply mx-auto;

        max-width: 100px;
    }
</style>