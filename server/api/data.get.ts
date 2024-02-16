export default defineEventHandler(async (event) => {
  const params = new URLSearchParams(getQuery(event))
  const res: any = await $fetch(`https://www.renewables.ninja/api/data/wind?${params}&date_from=2022-01-01&date_to=2022-12-31&dataset=merra2&format=json`, {
    method: 'GET',
    headers: {
      "Authorization": "token 51a3d5f6ac0097c5929b213d619ef13efabc10d7"
    }
  })
  return { data: res.data }
})