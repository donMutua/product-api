import { ProductDto } from "../dto/product.dto";
import { IProductRepository } from "../interfaces/IProductRepository";

export class ProductService {
  constructor(private _repository: IProductRepository) {}

  async createProduct(product: ProductDto): Promise<ProductDto> {
    const existingProduct = await this._repository.findById(product.id!);
    if (existingProduct) {
      throw new Error("Product already exists");
    }

    return await this._repository.create(product);
  }

  async updateProduct(product: ProductDto): Promise<ProductDto> {
    if (!product.id) {
      throw new Error("Product id  is required");
    }

    return await this._repository.update(product);
  }

  async getAllProducts(limit: number, offset: number): Promise<ProductDto[]> {
    const products = await this._repository.findAll(limit, offset);
    return products;
  }

  async getProductById(id: number): Promise<ProductDto | null> {
    const product = await this._repository.findById(id);
    return product;
  }

  async deleteProduct(id: number) {
    await this._repository.delete(id);
  }
}
