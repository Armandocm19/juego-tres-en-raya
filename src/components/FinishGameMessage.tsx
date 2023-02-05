
interface Props {
    colorMessage: string,
    reset: () => void,
    message: string
}

export const FinishGameMessage = ({ colorMessage, reset, message }: Props) => {

    return (
        <div className="win" >
            <h1 style={{ color: `${colorMessage}` }}>{message}</h1>
            <button onClick={ reset }>Volver a jugar</button>
        </div>
    )

}