// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given 
//   or `name` = ""        => return "Hello, World!"

function hello(name) {
  if (!name || !name.trim()) {
    return "Hello, World!";
  }
  
  console.log(`Hello, ${name.trim().charAt(0).toUpperCase() + name.trim().toLowerCase().slice(1)}!`)
  return `Hello, ${name.trim().charAt(0).toUpperCase() + name.trim().toLowerCase().slice(1)}!`;
}

module.exports = hello;