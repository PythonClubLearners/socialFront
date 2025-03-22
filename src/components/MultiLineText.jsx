export function MultiLineText({text}){
    const lines = text.split("\n")

    return lines.map(
        (e, i)=><p key={i}>{e}</p>
    )
}