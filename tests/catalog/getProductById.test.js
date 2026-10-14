const products = require("../../src/data/products");
const { getProductById } = require("../../src/catalog");

describe("getProductById", () => {
  test("ID 1 возвращает products[0]", () => {
    const id = 1;
    const expectedProduct = products[0];
    expect(getProductById(products, id)).toEqual(expectedProduct);
  });
  test("ID 4 возвращает products[3]", () => {
    const id = 4;
    const expectedProduct = products[3];

    expect(getProductById(products, id)).toEqual(expectedProduct);
  });

  test("ID 6 возвращает products[5]", () => {
    const id = 6;
    const expectedProduct = products[5];

    expect(getProductById(products, id)).toEqual(expectedProduct);
  });

  test("ID 0 возвращает null", () => {
    const id = 0;
    const expectedProduct = null;

    expect(getProductById(products, id)).toEqual(expectedProduct);
  });

  test("ID 999 возвращает null", () => {
    const id = 999;
    const expectedProduct = null;

    expect(getProductById(products, id)).toEqual(expectedProduct);
  });

  test("ID -1 возвращает null", () => {
    const id = -1;
    const expectedProduct = null;

    expect(getProductById(products, id)).toEqual(expectedProduct);
  });
  test("строковый ID '1' возвращает null", () => {
    const id = "1";
    const expectedProduct = null;

    expect(getProductById(products, id)).toEqual(expectedProduct);
  });
  test("ID undefined возвращает null", () => {
    const id = undefined;
    const expectedProduct = null;

    expect(getProductById(products, id)).toEqual(expectedProduct);
  });
  test("ID NaN возвращает null", () => {
    const id = NaN;
    const expectedProduct = null;

    expect(getProductById(products, id)).toEqual(expectedProduct);
  });
});
