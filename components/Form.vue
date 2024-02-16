<script setup lang="ts">
const formValues = useState('formValues', () => {
  return {
    lat: '',
    lon: '',
    capacity: '',
    height: '',
    turbine: ''
  }
})
const data = useState('data', () => null)
const selectError = useState('selectError', () => false)
const onSubmit = (e: Event) => {
  e.preventDefault()
  if (formValues.value.turbine === '') {
    selectError.value = true
    return
  }
  const params = new URLSearchParams(formValues.value)
  setData(data, params)
}
</script>

<template>
  <form class="m-6" @submit="(e) => onSubmit(e)">
    <NumberInput :value="formValues.lat" :details="formDetails.lat" />
    <NumberInput :value="formValues.lon" :details="formDetails.lon" />
    <NumberInput :value="formValues.height" :details="formDetails.height" />
    <NumberInput :value="formValues.capacity" :details="formDetails.capacity" />
    <Select />
    <button class="text-white bg-black px-4 py-1 rounded-lg hover:bg-slate-700">Display Charts</button>
  </form>
</template>