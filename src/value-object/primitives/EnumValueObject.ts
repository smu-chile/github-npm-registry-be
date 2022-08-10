/**
 * Value Object for enum values
 */
export abstract class EnumValueObject<T> {
  readonly value: T;

  /**
   * @argument value for enum value object.
   * @argument validValues for valid enums
   */
  constructor(value: T, public readonly validValues: T[]) {
    this.value = value;
    this.checkValueIsValid(value);
  }

  /**
   * @method checkValueIsValid Check that the value exists inside the enum
   * @param value Value to check
   */
  public checkValueIsValid(value: T): void {
    if (!this.validValues.includes(value)) {
      this.throwErrorForInvalidValue(value);
    }
  }

  /**
   * @method throwErrorForInvalidValue
   * @param value Invalid value in enum
   */
  protected abstract throwErrorForInvalidValue(value: T): void;
}
