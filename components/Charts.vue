<script setup lang="ts">
const data = useState('data')
const dates = Object.keys((data.value as any).data).map(timestamp => new Date(Number(timestamp)))
const energy = Object.values((data.value as any).data).map((dot: any) => dot.electricity)
const series = [
  {
    x: dates,
    y: energy,
    type: 'scatter'
  }
]
</script>

<template>
  <div>Charts</div>
  <div class="w-[800px] m-[50px]">
    <nuxt-plotly :data="series">
    </nuxt-plotly>
  </div>
</template>