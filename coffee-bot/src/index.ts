import { Clipboard, open } from "@raycast/api";

export default async function main() {
  await open(`slack://app?team=T03FE7QJV&id=AJMMV6ELC&tab=messages`);
  await Clipboard.paste("/커싸봇");
}
