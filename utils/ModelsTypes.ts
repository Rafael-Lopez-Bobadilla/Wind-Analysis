export interface Model {
  id: string
  name: string
  default_dataset: string
  datasets: Dataset[]
  license_url: string
  license_name: string
  citation_url: string
  citation_name: string
  max_daterange: string
  version: number
  fields: Field[]
}

interface Dataset {
  id: string
  name: string
  daterange: string[]
  bounds: number[]
}

export interface Field {
  id: string
  name: string
  help: string
  type: string
  min?: number
  default: any
  max?: number
  dropdown_type?: string
  options?: Option[]
  optional?: boolean
}

export interface Option {
  value: string
  label: string
}