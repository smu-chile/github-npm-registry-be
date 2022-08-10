import FirstName from '@test/value-object/primitives/StringValueObject/__mocks__/FirstName'

let firstName: FirstName;

describe('StringValueObject', () => {
  beforeEach(() => {
    firstName = new FirstName('First Name');
  })

  describe('different to', () => {
    it(`should return "true" if the values are different`, () => {
      const expected = firstName.differentTo('Other Name');

      expect(expected).toBe(true);
    })

    it(`should return "false" if the values are not different`, () => {
      const expected = firstName.differentTo('First Name');

      expect(expected).toBe(false);
    })
  })
})
