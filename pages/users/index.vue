<template>
    <div>
        <div class="grid grid-cols-6 gap-5">
            <div v-for="u in users" :key="u.id">
                <UserCard :user="u" />
            </div>
        </div>
    </div>
</template>

<script setup>
    const { data: users } = await useFetch("https://fakestoreapi.com/users");

    useHead({
        title: "My cool users!",
        meta: [
            { name:"description", content: "The list of all users" }
        ]
    });

</script>

<style lang="scss" scoped>

</style>