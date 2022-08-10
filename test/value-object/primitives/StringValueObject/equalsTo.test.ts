import FirstName from '@test/value-object/primitives/StringValueObject/__mocks__/FirstName'

let firstName: FirstName;

describe('StringValueObject', () => {
  beforeEach(() => {
    firstName = new FirstName('First Name');
  })

  describe('equals to', () => {
    it(`should return "true" if the values are the same`, () => {
      const expected = firstName.equalsTo('First Name');

      expect(expected).toBe(true);
    })

    it(`should return "false" if the values are not the same`, () => {
      const expected = firstName.equalsTo('Other Name');

      expect(expected).toBe(false);
    })
  })
})
