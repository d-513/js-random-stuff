const random = require("../src/index");

// TESTS
// only checking if stuff doesn't throw

random.genNumber(1, 10);
random.genHex();
random.genString(10);
random.genNumbers(10, 1, 10);
random.genStrings(10, 10);
