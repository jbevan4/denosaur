const write = Deno.writeTextFile("./hello.txt", "Hello World!");

await write;

console.log("File written to ./hello.txt");
