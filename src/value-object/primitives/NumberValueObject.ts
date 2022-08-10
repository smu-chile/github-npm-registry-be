/**
 * Value Object for number values
 */
export abstract class NumberValueObject {
  readonly value: number;

  /**
   * @argument value for number value object.
   */
  constructor(value: number) {
    this.value = value;
  }

  /**
   * @method equalsTo Compares one value to another value to determine if they are equal
   * @param { number } otherNumber Value to compare
   * @returns { boolean }
   */
  equalsTo(otherNumber: NumberValueObject): boolean {
    return this.value === otherNumber.value;
  }

  /**
   * @method isBiggerThan Compares if one value is greater than another value
   * @param { number } otherNumber Value to compare
   * @returns { boolean }
   */
  isBiggerThan(otherNumber: NumberValueObject): boolean {
    return this.value > otherNumber.value;
  }

  /**
   * @method isSmallerThan Compares if one value is less than another value
   * @param { number } otherNumber Value to compare
   * @returns { boolean }
   */
  isSmallerThan(otherNumber: NumberValueObject): boolean {
    return this.value < otherNumber.value;
  }
}
