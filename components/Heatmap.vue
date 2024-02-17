<script setup lang="ts">
const data: globalThis.Ref<Data | null> = useState('hourlyData')
const daysNumber = data.value!.energy.length / 24
let zvalues: string[][] = []
let index = 0
for (let i = 0; i < daysNumber; i++) {
  let zvalue: string[] = []
  for (let j = 0; j < 24; j++) {
    zvalue = [...zvalue, data.value!.energy[index]]
    index++
  }
  zvalues = [...zvalues, zvalue]
}
const chartConfig = computed(() => {

})
</script>

<template></template>