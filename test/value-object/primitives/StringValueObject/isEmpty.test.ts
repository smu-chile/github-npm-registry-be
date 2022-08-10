import FirstName from '@test/value-object/primitives/StringValueObject/__mocks__/FirstName'

let firstName: FirstName;

describe('StringValueObject', () => {
  beforeEach(() => {
    firstName = new FirstName('');
  })

  describe('is empty', () => {
    it(`should return "true" if the "firstName" are empty`, () => {
      const expected = firstName.isEmpty()

      expect(expected).toBe(true);
    })

    it(`should return "false" if the "firstName" are empty`, () => {
      const noEmptyFirstName = new FirstName('No empty')

      const expected = noEmptyFirstName.isEmpty()

      expect(expected).toBe(false);
    })
  })
})
