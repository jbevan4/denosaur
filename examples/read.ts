const text = Deno.readTextFile("./examples/people.json");

const file = await text;

console.log(file);
