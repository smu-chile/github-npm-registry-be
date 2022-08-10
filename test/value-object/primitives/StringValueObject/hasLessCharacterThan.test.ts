import FirstName from '@test/value-object/primitives/StringValueObject/__mocks__/FirstName'

let firstName: FirstName;

describe('StringValueObject', () => {
  beforeEach(() => {
    firstName = new FirstName('First Name');
  })

  describe('has less character than', () => {
    it(`should return "true" if the "firstName" have less of thirty characters`, () => {
      const expected = firstName.hasLessCharacterThan(30)

      expect(expected).toBe(true);
    })

    it(`should return "false" if the "firstName" have less of five characters`, () => {
      const expected = firstName.hasLessCharacterThan()

      expect(expected).toBe(false);
    })
  })
})
