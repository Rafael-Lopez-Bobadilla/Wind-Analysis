<script setup lang="ts">
const hourlyData: globalThis.Ref<Data | null> = useState('hourlyData')
const chartConfig = computed(() => {
  const daysNumber = hourlyData.value!.energy.length / 24
  let energy: (string | null)[] = [...hourlyData.value!.energy]
  energy.pop()
  energy.unshift(null)
  let zvalues: (string | null)[][] = []
  let days: Date[] = []
  let hours = [...Array(24).keys()].map(hour => `${hour}:00 hrs`)
  let index = 0
  for (let i = 0; i < daysNumber; i++) {
    let day = hourlyData.value!.dates[index]
    day.setHours(0, 0, 0, 0)
    days = [...days, day]
    for (let j = 0; j < 24; j++) {
      if (!zvalues[j]) zvalues[j] = []
      zvalues[j] = [...zvalues[j], energy[index]]
      index++
    }
  }
  const config = heatmapConfig(zvalues, days, hours)
  return config
})
</script>

<template>
  <nuxt-plotly :data="chartConfig.data" :layout="chartConfig.layout"></nuxt-plotly>
</template>