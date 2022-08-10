import { StringValueObject } from './StringValueObject';

/**
 * Value Object for enum values
 */
export abstract class DateValueObject extends StringValueObject {
  readonly value: string;

  /**
   * @argument value for date value object.
   */
  constructor(value: string) {
    super(value);
    this.checkDateIsValue(value);
    this.value = this.format(value);
  }

  /**
   * @method checkDateIsValue Check if the value is a valid date
   * @param { string } date
   */
  private checkDateIsValue(date: string): void {
    if (!Number.isNaN(new Date(date).getTime())) {
      this.throwErrorForInvalidDate(date);
    }
  }

  /**
 * @method format Formats a string with a valid date to ISO
 * @param { string } date
 * @returns { string } Date in iso string format
 */
  public format(date: string): string {
    return new Date(date).toISOString();
  }

  /**
   * @method isBetweenTheDates Check if the current date is between these two dates
   * @param { string } startDate
   * @param { string } lastDate
   * @returns { boolean }
   */
  public isBetweenTheDates(startDate: string, lastDate: string): boolean {
    this.checkDateIsValue(startDate);
    this.checkDateIsValue(lastDate);
    return this.isAfterThisDate(startDate) && this.isBeforeThisDate(lastDate);
  }

  /**
   * @method isBeforeThisDate Check if the current date is before these date
   * @param { string } anotherDate
   * @returns { boolean }
   */
  public isBeforeThisDate(anotherDate: string): boolean {
    this.checkDateIsValue(anotherDate);
    return this.value < this.format(anotherDate);
  }

  /**
   * @method isAfterThisDate Check if the current date is after these date
   * @param { string } anotherDate
   * @returns { boolean }
   */
  public isAfterThisDate(anotherDate: string): boolean {
    this.checkDateIsValue(anotherDate);
    return this.value > this.format(anotherDate);
  }

  /**
   * @method throwErrorForInvalidDate
   * @param { string } value Invalid date
   */
  protected abstract throwErrorForInvalidDate(value: string): void;
}
