<script setup lang="ts">
import type { FormValues } from '~/utils/FormTypes';
import type { InputDetails } from '~/utils/FormTypes';
const fields: globalThis.Ref<FormValues> = useState('formValues')
const props = defineProps<{
  value: string,
  details: InputDetails
}>()
const onInput = (e: Event) => {
  const value = (e.target as HTMLInputElement).value
  if (props.details.id === 'lat') fields.value.lat = value
  if (props.details.id === 'lon') fields.value.lon = value
  if (props.details.id === 'height') fields.value.height = value
  if (props.details.id === 'capacity') fields.value.capacity = value
}
</script>

<template>
  <div class="mb-4">
    <label class="mr-4 w-[250px] inline-block font-bold">{{ details.label }}</label>
    <input :value="value" :min="details.min" :max="details.max" @input="onInput" required
      class="px-4 py-1 shadow-md rounded border-[1px] border-gray-300 required w-[150px]" type="number" />
  </div>
</template>