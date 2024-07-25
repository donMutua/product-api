import { MockProductRepository } from "./../repositories/mockProductRepository";
import { ProductService } from "./productService";
import { IProductRepository } from "./../interfaces/IProductRepository";
import { de, faker } from "@faker-js/faker";

const mockProduct = () => {
  return {
    id: faker.number.int({ min: 1, max: 1000 }),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    stock: faker.number.int({ min: 10, max: 100 }),
    price: +faker.commerce.price(),
  };
};
describe("Product Service", () => {
  let repository: IProductRepository;
  let service: ProductService;

  beforeEach(() => {
    repository = new MockProductRepository();
    service = new ProductService(repository);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("createProduct", () => {
    it("should create a product", async () => {
      const product = mockProduct();
      const result = await service.createProduct(product);
      expect(result).toEqual(product);
    });
  });
});
