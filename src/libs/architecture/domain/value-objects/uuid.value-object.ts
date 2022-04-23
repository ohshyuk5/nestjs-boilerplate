import { DomainPrimitive } from '@Arch/domain/base-classes/base-value-object';
import { ID } from '@Arch/domain/value-objects/id.value-object';
import { v4 as uuidV4, validate } from 'uuid';

export class UUID extends ID {
  /**
   *Returns new ID instance with randomly generated ID value
   * @static
   * @return {*}  {ID}
   * @memberof ID
   */
  static generate(): UUID {
    return new UUID(uuidV4());
  }

  protected validate({ value }: DomainPrimitive<string>): void {
    if (!validate(value)) {
      throw new Error('Incorrect UUID format');
    }
  }
}
