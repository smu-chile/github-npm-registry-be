/**
 * Value Object for string values
 */
export abstract class StringValueObject {
  readonly value: string;

  /**
   * @argument value for string value object.
   */
  constructor(value: string) {
    this.value = value;
  }

  /**
   * @method equalsTo Compares one value to another value to determine if they are equal
   * @param { string } anotherValue Value to compare
   * @returns { boolean }
   */
  equalsTo(anotherValue: string): boolean {
    return this.value === anotherValue;
  }

  /**
   * @method isEmpty Check if value is null
   * @returns { boolean }
   */
  isEmpty(): boolean {
    return !this.value
  }

  /**
   * @method differentTo Compares one value to another value to determine if they are different
   * @param { string } anotherValue value to compare
   * @returns { boolean }
   */
  differentTo(anotherValue: string): boolean {
    return this.value !== anotherValue;
  }

  /**
   * @method hasMoreCharacterThan Compares if the value has more characters than requested
   * @param {number} length
   * @returns boolean
   */
  hasMoreCharacterThan(length: number = 30): boolean {
    if (this.value.length > length) return true;
    else return false;
  }

  /**
   * @method hasLessCharacterThan Compares if the value has fewer characters than requested
   * @param { number } length
   * @returns { boolean }
   */
  hasLessCharacterThan(length: number = 5): boolean {
    if (this.value.length < length) return true;
    else return false;
  }

  /**
   * @method toString Convert value to string
   * @returns string
   */
  toString(): string {
    return this.value;
  }
}
