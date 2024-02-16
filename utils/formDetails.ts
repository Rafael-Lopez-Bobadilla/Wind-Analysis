const formDetails = {
  lat: {
    id: 'lat',
    label: 'Latitude (-79 - 79)',
    min: '-79',
    max: '79'
  },
  lon: {
    id: 'lon',
    label: 'Longitude (-179 - 179)',
    min: '-179',
    max: '179'
  },
  height: {
    id: 'height',
    label: 'Height in meters (10 - 300)',
    min: '10',
    max: '300'
  },
  capacity: {
    id: 'capacity',
    label: 'Capacity (kW)',
    min: '0',
    max: 'infinity'
  }
}

export default formDetails