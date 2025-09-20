export interface Stock {
  id: number;
  productName: string;
  productPrice: number;
  productQuantity: number;
  productDetails: string;
  masked: boolean;
}

export interface Tracking {
  id: number;
  trackingNumber: string;
  status: string;
}
