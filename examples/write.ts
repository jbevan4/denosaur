function writeJson(path: string, data: Record<string, unknown>): string {
  try {
    Deno.writeTextFileSync(path, JSON.stringify(data));

    return "Written to " + path;
  } catch (e) {
    return e.message;
  }
}

console.log(writeJson("./data.json", { hello: "World" }));
