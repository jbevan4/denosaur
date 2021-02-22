let first_response = await fetch("https://api.github.com/users/denoland");
console.log(await first_response.json())

let second_response = await fetch("https://deno.land/");
console.log(await second_response.text())

try {
    let third_response = await fetch("https://does.not.exist/");

} catch(error){
    console.log(error.message)
}