export function MultiLineText({text}:{text:string}){
    const lines = text.split("\n")

    return (
        <>
        {
            lines.map(
                (e, i)=><p key={i}>{e}</p>
            )
        }
        </>
    );

}