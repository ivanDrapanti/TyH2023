const Hashes = require('jshashes');

class HashingStrategy {
  generateHash(data) {
    throw new Error('generateHash() method must be implemented.');
  }

  verifyHash(data, hash) {
    throw new Error('verifyHash() method must be implemented.');
  }
}

class MD5HashingStrategy extends HashingStrategy {
  generateHash(data) {
    const md5 = new Hashes.MD5();
    return md5.hex(data);
  }

  verifyHash(data, hash) {
    const md5 = new Hashes.MD5();
    const computedHash = md5.hex(data);
    return computedHash === hash;
  }
}

class SHA256HashingStrategy extends HashingStrategy {
  generateHash(data) {
    const sha256 = new Hashes.SHA256();
    return sha256.hex(data);
  }

  verifyHash(data, hash) {
    const sha256 = new Hashes.SHA256();
    const computedHash = sha256.hex(data);
    return computedHash === hash;
  }
}

module.exports = {
  HashingStrategy,
  MD5HashingStrategy,
  SHA256HashingStrategy,
};
