import faker from 'faker';

const cartText = `You have ${faker.random.number()} items`;

document.querySelector('#cart-dev').innerHTML = cartText;