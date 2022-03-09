import GameState from './GameState.json'

export default function Matchup() {
    return (
        <div className="text-center text-white">
            
            <img className="team1Logo" src={GameState.blueImage}/>
            <div className="team1Score text-9xl">{GameState.blueSeries}</div>

            <div className="centered text-9xl" style={{}}></div>

            <div className="team2Score text-9xl">{GameState.redSeries}</div>
            <img className="team2Logo" src={GameState.redImage}/>
            
        </div>
    )
}