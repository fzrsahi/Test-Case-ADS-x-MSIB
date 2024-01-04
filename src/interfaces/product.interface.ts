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

export interface ProductQueryDto {
  sort?: string;
  order?: string;
  limit?: string;
  page?: number;
}
