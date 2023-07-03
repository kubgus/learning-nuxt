<template>
    <div>
        <Head>
            <Title>{{ capitalize(user.name.firstname) }}'s cool profile!</Title>
            <Meta name="description" :content="user.phone" />
        </Head>

        <h1 class="text-3xl capitalize">{{ user.name.firstname }} {{ user.name.lastname }}</h1>
        <div class="mt-3 gap-2">
            <p>Email: {{ user.email }}</p>
            <p>Password: {{ user.password }}</p>
            <p>Phone: {{ user.phone }}</p>
        </div>
    </div>
</template>

<script setup>
    const { email } = useRoute().params;
    const uri = "https://fakestoreapi.com/users/" + email;

    const { data: user } = await useFetch(uri, { key: email });

    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
</script>

<style lang="scss" scoped>

</style>