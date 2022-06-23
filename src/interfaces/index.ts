export interface Products {
  name: string,
  amount: string,
  orderId: number
}
export interface IdProducts extends Products {
  id: number,
}