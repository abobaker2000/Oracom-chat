export interface ITextMessageProps {
    text: string;
}
export const TextMessage = (props: ITextMessageProps) => {
    return (
        <p className="text-gray-800">
            {props.text}
        </p>
    )
};