export default function Subpost(props) {
    const { parentTitle } = props;
    return (
        <p>Subpost page is used for {parentTitle}</p>
    );
}