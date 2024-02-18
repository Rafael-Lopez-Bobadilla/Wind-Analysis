<script setup lang="ts">
const data: globalThis.Ref<Data | null> = useState('hourlyData')
const loading = useState('loadingCharts', () => false)
</script>
<template>
  <Head>
    <Title>Wind Analysis</Title>
  </Head>
  <Form />
  <div class="text-center" v-if="loading">Loading...</div>
  <Charts v-if="data && !loading" />
</template>

<style>
body {
  background-color: #f1f1f1;
}
</style>
