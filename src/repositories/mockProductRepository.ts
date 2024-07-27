import { ProductDto } from "../dto/product.dto";
import { IProductRepository } from "../interfaces/IProductRepository";
import { Product } from "../models/productModel";

export class MockProductRepository implements IProductRepository {
  create(product: ProductDto): Promise<ProductDto> {
    return Promise.resolve(product);
  }
  update(product: ProductDto): Promise<ProductDto> {
    return Promise.resolve(product);
  }
  delete(id: any) {
    return Promise.resolve(id);
  }
  findAll(limit: number, offset: number): Promise<ProductDto[]> {
    return Promise.resolve([]);
  }
  findById(id: number): Promise<ProductDto | null> {
    return Promise.resolve({ id }) as unknown as Promise<Product>;
  }
}
