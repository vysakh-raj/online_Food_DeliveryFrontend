// src/models/order.model.ts
export interface Order {
  menuId: number;
  customerName: string;
  deliverAddress: string;
  name: string;
  description: string;
  price: number;
  restaurantName: string;
}
