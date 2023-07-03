<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="u in users" :key="u.id">
                <NuxtLink :to="`/users/${u.id}`">{{ u.email }}</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
    const { data: users } = await useFetch("https://fakestoreapi.com/users");
</script>

<style lang="scss" scoped>

</style>