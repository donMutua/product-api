import { ProductDto } from "../dto/product.dto";
import { IProductRepository } from "../interfaces/IProductRepository";

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
    throw new Error("Method not implemented.");
  }
  findById(id: number): Promise<ProductDto | null> {
    throw new Error("Method not implemented.");
  }
}
