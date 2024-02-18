const getData = async (params: URLSearchParams) => {
  const res = await $fetch(`/api/data?${params}`, { method: 'GET' })
  const dates = Object.keys((res as any).data).map(time => {
    if (params.has('mean')) return new Date(time)
    return new Date(Number(time))
  })
  const energy = Object.values((res as any).data).map((dot: any) => dot.electricity)
  return {
    dates: dates,
    energy: energy
  }
}

export default getData