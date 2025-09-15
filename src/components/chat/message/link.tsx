export interface ILinkMessageProps {
    url: string;
}
export const LinkMessage = (props: ILinkMessageProps) => {
    return (
        <a href={props.url} className="text-blue-500 hover:underline">
            {props.url}
        </a>
    )
};