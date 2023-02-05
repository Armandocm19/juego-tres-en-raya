
interface Props {
    movements: string[],
    onChangeMovements: (position: number) => void
}

export const HomePageGame = ({ movements, onChangeMovements }: Props) => {

    return (
        <>
            <h1>TRES EN RAYA <strong style={{color: 'rgb(0, 248, 0)'}}>X</strong> / <strong style={{color: 'red'}}>O</strong></h1>
            <div className="container">
            {
              movements.map((item, i) => (
                <div 
                  className={item === 'X' ? 'select-player' : 'select-cpu'} 
                  key={i} 
                  onClick={() => 
                  item === '' && onChangeMovements(i)
                }
                >
                  <span>{item}</span>
                </div>
              ))
            }
      </div>
        </>
    )

}