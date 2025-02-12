const { faker } = require("@faker-js/faker");

const generateUser = () => {
  return {
    nome: faker.name.fullName(),
    email: faker.internet.email(),
    senha: faker.internet.password(),
  };
};

module.exports = { generateUser };
