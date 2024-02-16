<script setup lang="ts">
const data = useState('data')
</script>
<template>
  <Head>
    <Title>Wind Analysis</Title>
  </Head>
  <Form />
  <Charts v-if="data" />
</template>

<style>
body {
  background-color: #f1f1f1;
}
</style>
