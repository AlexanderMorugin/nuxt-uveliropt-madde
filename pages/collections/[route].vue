<template>
  <div>
    <Head>
      <Title>{{route}}</Title>
    </Head>
    <h1>Name of Collection - {{ route }}</h1>
  </div>
</template>

<script setup>
const { route } = useRoute().params;
</script>
