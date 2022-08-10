import FirstName from '@test/value-object/primitives/StringValueObject/__mocks__/FirstName'

let firstName: FirstName;

describe('StringValueObject', () => {
  beforeEach(() => {
    firstName = new FirstName('First Name');
  })

  describe('to string', () => {
    it(`should return "true" if the "firstName" are empty`, () => {
      const expected = firstName.toString();

      expect(expected).toBe('First Name');
    })
  })
})
