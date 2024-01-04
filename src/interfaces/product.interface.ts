export interface CreateProductDto {
  name: string;
  slug?: string;
  price: number;
  category_id: number;
}

export interface UpdateProductDto {
  name?: string;
  price?: number;
  category_id?: number;
  slug?: string;
}
