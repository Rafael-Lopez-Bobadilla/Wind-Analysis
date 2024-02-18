<script setup lang="ts">
import type { NuxtPlotlyData, NuxtPlotlyLayout } from 'nuxt-plotly';

const props = defineProps<{
  type: string
}>()
const formValues: globalThis.Ref<FormValues> = useState('formValues')
const hourlyData: globalThis.Ref<Data | null> = useState('hourlyData')
const dailyData = useState<Data | null>('dailyData', () => null)
const monthlyData = useState<Data | null>('monthlyData', () => null)
const dataType = ref('Hourly')
const chartConfig = computed(() => {
  let config: { data: NuxtPlotlyData, layout: NuxtPlotlyLayout } | null = null
  let data: Data | null = null
  if (dataType.value === 'Hourly') data = hourlyData.value
  if (dataType.value === 'Monthly') data = monthlyData.value
  if (dataType.value === 'Daily') data = dailyData.value
  if (props.type === 'time') config = timeSeriesConfig(data)
  if (props.type === 'histogram') config = histogramConfig(data)
  return config
})
const handleChange = async (type: string) => {
  const params = new URLSearchParams(formValues.value as any)
  if (type === 'Monthly Average') {
    if (!monthlyData.value) {
      params.set('mean', 'month')
      const data = await getData(params)
      monthlyData.value = data
    }
    dataType.value = 'Monthly'
  }
  if (type === 'Daily Average') {
    if (!dailyData.value) {
      params.set('mean', 'day')
      const data = await getData(params)
      dailyData.value = data
    }
    dataType.value = 'Daily'
  }
  if (type === 'Hourly') {
    dataType.value = 'Hourly'
  }
}
</script>

<template>
  <DataSelect @type-change="handleChange" />
  <nuxt-plotly :data="chartConfig!.data" :layout="chartConfig!.layout">
  </nuxt-plotly>
</template>