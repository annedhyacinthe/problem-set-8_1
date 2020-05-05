function Board (){
  const [board,setBoard] = React.useState([])
  const [turn,setTurn] = React.useState('X')
  const [winner, setWinner] = React.useState('')
  
  function nextPlayer(){
    console.log(turn)
    turn === 'O' ? setTurn('X') : setTurn('O')
    return turn
  }

  const check = (board) =>{
        
    const conditions = [
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [2,5,8],
        [1,4,7],
        [3,5,4],
        [6,7,8]
    ]
    for(let i = 0; i < conditions.length; i++) {
        const [a,b,c] = conditions[i]
        if(board[a] && board[a] === board[b] && board[a] === board[c]){
          console.log( `winner ${board[a]}`)  
          setWinner(board[a])
        } 
    }
    return false
}

  function makeBoard(id){
    return <Box id={id} turn={turn} board={board} setBoard={setBoard} clickEvent={() => {nextPlayer(turn)}} check={check} disabled={false} />
  }
  return(
    <div className='board'>
      { winner === '' ? <h1>it is {turn} turn</h1> :  <h1>Gane Over {winner} Wins!</h1> }
      <div className="row">
        {makeBoard(0)}
        {makeBoard(1)}
        {makeBoard(2)}
      </div>
      <div className="row">
        {makeBoard(3)}
        {makeBoard(4)}
        {makeBoard(5)}
      </div>
      <div className="row">
        {makeBoard(6)}
        {makeBoard(7)}
        {makeBoard(8)}
      </div>
    </div>
  )
}