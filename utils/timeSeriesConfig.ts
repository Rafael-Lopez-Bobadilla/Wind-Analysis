const timeSeriesConfig = (values: Data | null) => {
  const series = [
    {
      x: values!.dates,
      y: values!.energy,
      type: 'scatter',
      mode: 'lines',
      name: 'Electricity (kW)'
    }
  ]
  const layout = {
    title: 'Time Series',
    xaxis: {
      rangeselector: {
        buttons: [
          {
            count: 1,
            label: '1 Month',
            step: 'month',
            stepmode: 'backward'
          },
          {
            count: 6,
            label: '6 Months',
            step: 'month',
            stepmode: 'backward'
          },
          { step: 'all' }
        ]
      },
      rangeslider: { range: ['2022-01-01', '2022-12-31'] },
      type: 'date'
    },
    yaxis: {
      title: 'Electricity (kW)'
    }
  }
  return { data: series, layout: layout }
}

export default timeSeriesConfig