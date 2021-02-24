const firstResponse = await fetch("https://api.github.com/users/denoland");
console.log(await firstResponse.json());

const secondResponse = await fetch("https://deno.land/");
console.log(await secondResponse.text());

try {
  await fetch("https://does.not.exist/");
} catch (error) {
  console.log(error.message);
}
