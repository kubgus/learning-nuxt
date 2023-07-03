<template>
    <div>
        <Head>
            <Title>My cool users!</Title>
            <Meta name="description" content="The list of all users" />
        </Head>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div v-for="u in users" :key="u.id">
                <UserCard :user="u" />
            </div>
        </div>
    </div>
</template>

<script setup>
    const { data: users } = await useFetch("https://fakestoreapi.com/users");
</script>

<style scoped>

</style>