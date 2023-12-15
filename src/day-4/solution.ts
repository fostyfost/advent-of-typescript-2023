export type Address = {
  address: string
  city: string
}

export type PresentDeliveryList<T extends { [name: string]: unknown }> = { [name in keyof T]: Address }
