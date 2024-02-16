import type { Model, Option, Field } from '~/utils/ModelsTypes'

const setTurbines = async (turbines: globalThis.Ref<Option[] | null>) => {
  const res = await fetch('https://www.renewables.ninja/api/models')
  const models = await res.json()
  const windModel = models.find((model: Model) => model.id === 'wind')
  const turbineTypes = windModel.fields.find((field: Field) => field.id === 'turbine')
  turbines.value = turbineTypes.options
}

export default setTurbines