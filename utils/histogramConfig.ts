
const histogramConfig = (values: Data | null) => {
  const data = [
    {
      type: 'histogram',
      x: values!.energy,
      xbins: {
        size: 0.2
      }
    }
  ]
  const layout = {
    title: 'Histogram',
    yaxis: { title: 'Count' },
    xaxis: { title: 'Electricity (kW)' }
  }
  return { data: data, layout: layout }
}

export default histogramConfig