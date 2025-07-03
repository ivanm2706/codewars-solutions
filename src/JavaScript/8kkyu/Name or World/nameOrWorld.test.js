const hello = require('./nameOrWorld');

test('should return "Hello, World!" if empty name', () => {
  const responce = hello('');

  expect("Hello, World!").toBe(responce);
});

test('should return "Hello, World!" if name not given', () => {
  const responce = hello();

  expect("Hello, World!").toBe(responce);
});

test('should work with cases', () => {
  const responce = hello("aliCE");

  expect("Hello, Alice!").toBe(responce);
})
