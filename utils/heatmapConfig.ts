const heatmapConfig = (zvalues: (string | null)[][], days: Date[], hours: string[]) => {
  const data = [{
    z: zvalues,
    x: days,
    y: hours,
    type: 'heatmap',
    hovertemplate: '<i>Day</i>: %{x}<br>' +
      '<i>Hour</i>: %{y}<br>' +
      '<i>Electricity (kW): %{z}</i><extra></extra>'
  }]
  const layout = {
    title: 'Heatmap',
    height: 650,
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
      rangeslider: { range: ['2022-01-01', '2022-12-31'], thickness: 0.10 },
      type: 'date'
    }
  }
  return { data: data, layout: layout }
}

export default heatmapConfig