import { v4 } from 'uuid';
import validate from 'uuid-validate';

/**
 * Value Object for uuid values
 */
export class Uuid {
  readonly value: string;

  /**
   * @argument value for uuid value object.
   */
  constructor(value: string) {
    this.ensureIsValidUuid(value);
    this.value = value;
  }

  static random(): Uuid {
    return new Uuid(v4());
  }

  /**
   * @method ensureIsValidUuid Make sure the id sent is a valid uuid
   * @param { string } id uuid
   */
  private ensureIsValidUuid(id: string): void {
    if (!validate(id)) {
      throw new Error(`<${this.constructor.name}> does not allow the value <${id}>`);
    }
  }

  /**
   * @method toString Convert value to string
   * @returns { string }
   */
  toString(): string {
    return this.value;
  }
}
