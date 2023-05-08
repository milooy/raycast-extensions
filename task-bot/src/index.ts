import { Clipboard, LaunchProps, open } from "@raycast/api";

interface Arguments {
  title: string;
}

export default async function main(props: LaunchProps<{ arguments: Arguments }>) {
  const { title } = props.arguments;
  await open(`slack://app?team=T03FE7QJV&id=C04UR16F81H&tab=messages`);
  await Clipboard.paste(title);
}
