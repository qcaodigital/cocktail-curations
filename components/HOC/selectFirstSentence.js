export default function SelectFirstSentence({ children, style, styleRest }){
    const stringArr = children.props.children.split('');
    let firstPunc;
    for(let i = 0; i < stringArr.length; i++){
        if(['.', '!', '?', ':'].includes(stringArr[i])){
            firstPunc = i;
            break;
        }
    }
    
    const first = [];
    const rest = [];
    for(let i = 0; i < stringArr.length; i++){
        if(i <= firstPunc){
            first.push(stringArr[i])
        } else {
            rest.push(stringArr[i])
        }
    }

    return (
        <h2>
            <span style={style}>{first.join('')}</span>
            <span style={styleRest}>{rest.join('')}</span>
        </h2>
    )
}