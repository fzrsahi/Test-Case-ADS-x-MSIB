export interface CreateProductDto  {
    name: string;
    slug?: string;
    price: number;
    category_id: string | number;
  }