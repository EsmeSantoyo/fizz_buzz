const FizzbuzzService = require("../../lib/services/FizzbuzzService");

describe("Validacion del explorer explorer para obtener un campo nuevo", () => {
  test("validacion que obtiene el score si este no es divisible entre 3 o 5", () => {
    const explorer1 = {name: "Explorer1", score: 1};
    const Fizzbuzz = FizzbuzzService.applyValidationInExplorer(explorer1); // {name: "Explorer1", score: 1, trick: 1} 

    expect(Fizzbuzz.trick).toBe(1);
  });
  test("Validacion que obtiene fizz si el score es divisible entre 3", () => {
    const explorer3 = {name: "Explorer3", score: 3};
    const Fizzbuzz = FizzbuzzService.applyValidationInExplorer(explorer3); // {name: "Explorer1", score: 1, trick: 1} 

    expect(Fizzbuzz.trick).toBe("FIZZ");
  });
  test("Validacion que obtiene buzz si el score es divisible entre 5", () => {
    const explorer5 = {name: "Explorer5", score: 5};
    const Fizzbuzz = FizzbuzzService.applyValidationInExplorer(explorer5); // {name: "Explorer1", score: 1, trick: 1} 

    expect(Fizzbuzz.trick).toBe("BUZZ");
  });
  test("Validacion que obtiene fizzbuzz si el score es divisible entre 3 y 5", () => {
    const explorer15 = {name: "Explorer15", score: 15};
    const Fizzbuzz = FizzbuzzService.applyValidationInExplorer(explorer15); // {name: "Explorer1", score: 1, trick: 1} 

    expect(Fizzbuzz.trick).toBe("FIZZBUZZ");
  });
});
describe("Validacion del score para abtener el trick", () => {
  test("validacion que obtiene el score si este no es divisible entre 3 o 5", () => {
    const score = 1;
    const Fizzbuzz = FizzbuzzService.applyValidationInNumber(score); // {name: "Explorer1", score: 1, trick: 1} 

    expect(Fizzbuzz.trick).toBe(1);
  });
  test("Validacion que obtiene fizz si el score es divisible entre 3", () => {
    const score = 3;
    const Fizzbuzz = FizzbuzzService.applyValidationInNumber(score); // {name: "Explorer1", score: 1, trick: 1} 

    expect(Fizzbuzz.trick).toBe("FIZZ");
  });
  test("Validacion que obtiene buzz si el score es divisible entre 5", () => {
    const score = 5;
    const Fizzbuzz = FizzbuzzService.applyValidationInNumber(score); // {name: "Explorer1", score: 1, trick: 1} 

    expect(Fizzbuzz.trick).toBe("BUZZ");
  });
  test("Validacion que obtiene fizzbuzz si el score es divisible entre 3 y 5", () => {
    const score = 15;
    const Fizzbuzz = FizzbuzzService.applyValidationInNumber(score); // {name: "Explorer1", score: 1, trick: 1} 

    expect(Fizzbuzz.trick).toBe("FIZZBUZZ");
  });
});
