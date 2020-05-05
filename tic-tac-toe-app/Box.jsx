function Box (props){
    const [box, setBox] = React.useState('')

    function change(){
      if(box === ''){
        props.clickEvent();
        
        //makes a copy of board uses the button clicked id to place into array and board is reset to the updated board 
        const updatedBoard = [...props.board];
        updatedBoard[props.id]=(props.turn);
        props.setBoard(updatedBoard)
        console.log('updated board', updatedBoard);
        
        props.check(updatedBoard)
        setBox(props.turn)
        }
    }
    return(
        <div>
            <button className="boxes" onClick={change}>{box}</button>
        </div>
    )
}




