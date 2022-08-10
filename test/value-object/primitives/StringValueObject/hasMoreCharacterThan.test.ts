import FirstName from '@test/value-object/primitives/StringValueObject/__mocks__/FirstName'

let firstName: FirstName;

describe('StringValueObject', () => {
  beforeEach(() => {
    firstName = new FirstName('First Name');
  })

  describe('has more character than', () => {
    it(`should return "true" if the "firstName" have more of five characters`, () => {
      const expected = firstName.hasMoreCharacterThan(5)

      expect(expected).toBe(true);
    })

    it(`should return "false" if the "firstName" have more of thirty characters`, () => {
      const expected = firstName.hasMoreCharacterThan()

      expect(expected).toBe(false);
    })
  })
})
