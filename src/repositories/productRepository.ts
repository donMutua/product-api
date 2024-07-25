import { ProductDto } from "../dto/product.dto";
import { IProductRepository } from "../interfaces/IProductRepository";

export class ProductRepository implements IProductRepository {
  create(product: ProductDto): Promise<ProductDto> {
    throw new Error("Method not implemented.");
  }
  update(product: ProductDto): Promise<ProductDto> {
    throw new Error("Method not implemented.");
  }
  delete(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
  findAll(): Promise<ProductDto[]> {
    throw new Error("Method not implemented.");
  }
  findById(id: number): Promise<ProductDto | null> {
    throw new Error("Method not implemented.");
  }
}
