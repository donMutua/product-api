import { MockProductRepository } from "./../repositories/mockProductRepository";
import { ProductService } from "./productService";
import { IProductRepository } from "./../interfaces/IProductRepository";
import { de, faker } from "@faker-js/faker";
import { ProductFactory } from "../utils/fixtures";

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

      jest.spyOn(repository, "findById").mockResolvedValue(null);

      const result = await service.createProduct(product);
      expect(result).toMatchObject({
        id: expect.any(Number),
        name: expect.any(String),
        price: expect.any(Number),
        description: expect.any(String),
        stock: expect.any(Number),
      });
    });

    it("should throw an error if product already exists", async () => {
      const existingProduct = mockProduct();

      jest.spyOn(repository, "findById").mockResolvedValue(existingProduct);

      await expect(service.createProduct(existingProduct)).rejects.toThrow(
        "Product already exists"
      );
    });
  });

  describe("updateProduct", () => {
    it("should update a product", async () => {
      const product = mockProduct();

      jest.spyOn(repository, "update").mockResolvedValue(product);

      const result = await service.updateProduct(product);
      expect(result).toMatchObject(product);
    });

    it("should throw an error if product id is not provided", async () => {
      const product = {
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        stock: faker.number.int({ min: 10, max: 100 }),
        price: +faker.commerce.price(),
      };

      await expect(service.updateProduct(product)).rejects.toThrow(
        "Product id  is required"
      );
    });
  });

  describe("getAllProducts", () => {
    it("should return all products by limit and offset", async () => {
      const randomLimit = faker.number.int({ min: 10, max: 50 });
      const products = ProductFactory.buildList(randomLimit);

      jest.spyOn(repository, "findAll").mockResolvedValue(products);
      const result = await service.getAllProducts(randomLimit, 0);
      expect(result.length).toEqual(randomLimit);
      expect(result).toMatchObject(products);
    });
  });

  describe("getProductById", () => {
    it("should return a product by id", async () => {
      const product = mockProduct();

      jest.spyOn(repository, "findById").mockResolvedValue(product);

      const result = await service.getProductById(product.id!);
      expect(result).toMatchObject(product);
    });
  });

  describe("deleteProduct", () => {
    it("should delete a product", async () => {
      const product = mockProduct();

      jest.spyOn(repository, "delete").mockResolvedValue(product.id);

      await service.deleteProduct(product.id!);
      expect(repository.delete).toHaveBeenCalledWith(product.id);
    });
  });
});
