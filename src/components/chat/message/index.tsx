import { ImageMessage } from "./image";
import { LinkMessage } from "./link";
import { TextMessage } from "./text";

export interface IMessageProps {
    text: string;
    chatType?: 'text' | 'image' | 'link';
}
export const Message = (props: IMessageProps) => {
    switch (props.chatType) {
        case 'image':
            return <ImageMessage url={props.text} />;
        case 'link':
            return <LinkMessage url={props.text} />;
        default:
            return <TextMessage text={props.text} />;
    }
};