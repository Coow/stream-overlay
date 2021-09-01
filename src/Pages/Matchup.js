import FlowenzLogo from '../Images/flowenz.png'
import starwish from '../Images/starwish.png'
import bitfix from '../Images/bitfix.png'

import GameState from './GameState.json'

export default function Matchup() {
    return (
        <div className="text-center text-white">
            <div className="team1 text-7xl">{(GameState.blueName).toUpperCase()}</div>
            <img className="team1Logo" src={GameState.blueImage}/>
            <div className="team1Score text-9xl">{GameState.blueSeries}</div>

            <div className="centered text-9xl" style={{}}>VS</div>

            <div className="team2Score text-9xl">{GameState.redSeries}</div>
            <img className="team2Logo" src={GameState.redImage}/>
            <div className=" team2 text-7xl text-center">{(GameState.redName).toUpperCase()}</div>
        </div>
    )
}