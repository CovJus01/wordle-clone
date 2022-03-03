import "../App.css"

function GridSquare({value, id}) {
    return <div className="gridSquare"/>;
}

function WordGrid() {
    var gridComponents = [];
    for(let i = 0; i < 30; i++) {
        gridComponents = [...gridComponents, <GridSquare value = {null} id = {i} key = {i}/>]
    }
    return (
        <div className="grid-container">
            {gridComponents.map((value) => value)}
        </div>
        
    );
}

export default WordGrid;