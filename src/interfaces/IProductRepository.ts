import { ProductDto } from "../dto/product.dto";

export interface IProductRepository {
  create(product: ProductDto): Promise<ProductDto>;
  update(product: ProductDto): Promise<ProductDto>;
  delete(id: any);
  findAll(limit: number, offset: number): Promise<ProductDto[]>;
  findById(id: number): Promise<ProductDto | null>;
}
