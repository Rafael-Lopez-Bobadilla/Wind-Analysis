<script setup lang="ts">
import type { Option } from '~/utils/ModelsTypes'
import type { FormValues } from '~/utils/FormTypes'
const turbines = useState<Option[] | null>('turbines', () => null)
const formValues: globalThis.Ref<FormValues> = useState('formValues')
const error = useState('selectError')
const onChange = () => {
  if (formValues.value.turbine !== '') error.value = false
}
onMounted(() => setTurbines(turbines))
</script>

<template>
  <div class="flex w-[550px] mb-4">
    <label class="mr-4 w-[250px] inline-block font-bold flex-none">Turbine Type</label>
    <div class="w-[300px]">
      <el-select @change="onChange" filterable v-model="formValues.turbine" :loading="turbines ? false : true"
        size="large">
        <el-option v-for="item in turbines" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
      <span class="text-red-600 text-sm pl-1" v-if="error">Please select turbine type</span>
    </div>
  </div>
</template>