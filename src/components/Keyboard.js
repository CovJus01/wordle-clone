
function Key({letter, id , keyPress}) {

    const keyPressHandler = (e) => {
        keyPress(letter);
      }

    return <h2 className = "key" onClick = {keyPressHandler}>{letter}</h2>;
}

function Keyboard({keyPress}) {
    const  rowOne = ["Q","W", "E", "R", "T", "Y", "U", "I", "O", "P"]
    const  rowTwo = ["A","S", "D", "F", "G", "H", "J", "K", "L" , "<"]
    const  rowThree = ["Z","X", "C", "V", "B", "N", "M", ">"]
    const keysMap = (letter, i) => <Key letter = {letter} id = {i} keyPress = {keyPress} key ={i}/>
    return (
        <>
        <div className="flex-container">
        {rowOne.map(keysMap)}
        </div>

        <div className="flex-container">
        {rowTwo.map(keysMap)}
        </div>

        <div className="flex-container">
        {rowThree.map(keysMap)}
        </div>
        </>
    );
}

export default Keyboard;