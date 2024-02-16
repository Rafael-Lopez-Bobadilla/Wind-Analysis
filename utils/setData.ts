const setData = async (data: globalThis.Ref<any>, params: URLSearchParams) => {
  const simData = await $fetch(`/api/data?${params}`, { method: 'GET' })
  data.value = simData
}

export default setData