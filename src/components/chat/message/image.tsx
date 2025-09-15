import Image from "next/image";

export interface IImageMessageProps {
  url: string;
}
export const ImageMessage = (props: IImageMessageProps) => {
  if (!props.url) return null;

  return (
    <Image
      className="dark:invert rounded-lg"
      src={props.url}
      alt="Image message"
      width={180}
      height={180}
      priority
    />
  );
};
