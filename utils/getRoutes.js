export default async () => {
  const { $content } = require("@nuxt/content");
  const files = await $content({ deep: true }).only(["path"]).fetch();
  debugger

  return files.map((file) => (file.path === "/index" ? "/" : file.path));
}