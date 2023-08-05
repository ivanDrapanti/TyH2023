const { MD5HashingStrategy, SHA256HashingStrategy } = require('../src/hashing');

describe('Hashing Strategies', () => {
  describe('MD5HashingStrategy', () => {
    test('should generate correct MD5 hash', () => {
      const md5HashingStrategy = new MD5HashingStrategy();
      const data = 'hello';
      const expectedHash = '5d41402abc4b2a76b9719d911017c592';
      const hash = md5HashingStrategy.generateHash(data);
      expect(hash).toEqual(expectedHash);
    });

    test('should verify correct MD5 hash', () => {
      const md5HashingStrategy = new MD5HashingStrategy();
      const data = 'hello';
      const hash = '5d41402abc4b2a76b9719d911017c592';
      const isValid = md5HashingStrategy.verifyHash(data, hash);
      expect(isValid).toBe(true);
    });

    test('should verify incorrect MD5 hash', () => {
      const md5HashingStrategy = new MD5HashingStrategy();
      const data = 'hello';
      const hash = 'wronghash';
      const isValid = md5HashingStrategy.verifyHash(data, hash);
      expect(isValid).toBe(false);
    });
  });

  describe('SHA256HashingStrategy', () => {
    test('should generate correct SHA256 hash', () => {
      const sha256HashingStrategy = new SHA256HashingStrategy();
      const data = 'hello';
      const expectedHash = '2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824';
      const hash = sha256HashingStrategy.generateHash(data);
      expect(hash).toEqual(expectedHash);
    });

    test('should verify correct SHA256 hash', () => {
      const sha256HashingStrategy = new SHA256HashingStrategy();
      const data = 'hello';
      const hash = '2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824';
      const isValid = sha256HashingStrategy.verifyHash(data, hash);
      expect(isValid).toBe(true);
    });

    test('should verify incorrect SHA256 hash', () => {
      const sha256HashingStrategy = new SHA256HashingStrategy();
      const data = 'hello';
      const hash = 'wronghash';
      const isValid = sha256HashingStrategy.verifyHash(data, hash);
      expect(isValid).toBe(false);
    });
  });
});

describe('MD5HashingStrategy', () => {
    test('should generate the correct hash', () => {
      const md5HashingStrategy = new MD5HashingStrategy();
      const data = 'hello'; // Replace 'hello' with the data for which you want to generate the hash.
      const expectedHash = '5d41402abc4b2a76b9719d911017c592'; // Replace with the expected hash for the given data.
  
      const generatedHash = md5HashingStrategy.generateHash(data);
      expect(generatedHash).toEqual(expectedHash);
    });
  });
