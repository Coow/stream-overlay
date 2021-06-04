import SpectatorOverlay from "../Images/Overlay/Overlay.png"
import ScoreOverlay from "../Images/Overlay/Overlay_Score.png"

import ScoreDisplayer from '../Components/ScoreDisplayer'
//import { useSelector, useDispatch } from 'react-redux';

//import { blueImage, blueName, blueScore, redImage, redName, redScore, tournamentName, gameState } from '../Actions'

import GameState from './GameState.json'

export default function () {

    return (
        <div style={{
            fontSize: "2rem",
            textAlign: "center",
            color: "white"
        }}>

            {/*Blue Team Image*/}
            <a className="" style={{
                position: "absolute",
                textAlign: "center",
                //border: "1px solid red",
                top: "45px",
                left: "420px"
            }}>
                <img src={GameState.blueImage}
                    style={{
                        position: "relative",
                        transform: "translate(-50%, -50%)",
                        //border: "1px solid red",
                        maxHeight: "90px",
                        maxWidth: "90px",
                        color: "white"
                    }}
                />
            </a>

            {/*Blue Team Name*/}
            <a style={{
                position: "absolute",
                textAlign: "center",
                //border: "1px solid red",
                top: "4px",
                left: "552px",

            }}>
                <h1 style={{
                    position: "relative",
                    transform: "translate(-50%, 0)",
                    //border: "1px solid red",
                    color: "white"
                }}>
                    {GameState.blueShortName}</h1>
            </a>

            {/*Blue Team Score*/}
            <a style={{
                position: "absolute",
                textAlign: "center",
                //border: "1px solid red",
                top: "55px",
                left: "552px",

            }}>
                <h3 style={{
                    position: "relative",
                    transform: "translate(-50%, 0)",
                    //border: "1px solid red",
                    color: "white"
                }}>
                    {GameState.showScore ?
                        <ScoreDisplayer
                            className=""
                            displayType={GameState.showScore}
                            score={GameState.blueScore}
                            bestOf={GameState.bestOf}
                            seriesWins={GameState.blueSeries}
                            reverse={true}
                        /> : ""}</h3>
            </a>

            {/*Red Team Image*/}
            <a className="" style={{
                position: "absolute",
                textAlign: "center",
                //border: "1px solid red",
                top: "45px",
                right: "320px"
            }}>
                <img src={GameState.redImage}
                    style={{
                        position: "relative",
                        transform: "translate(-50%, -50%)",
                        //border: "1px solid red",
                        maxHeight: "90px",
                        maxWidth: "90px",
                        color: "white"
                    }}
                />
            </a>

            {/*Red Team Name*/}
            <a style={{
                position: "absolute",
                textAlign: "center",
                //border: "1px solid red",
                top: "4px",
                right: "545px",

            }}>
                <h1 style={{
                    position: "relative",
                    //border: "1px solid red",
                    transform: "translate(50%, 0)"
                }}>
                    {GameState.redShortName}</h1>
            </a>

            {/*Red Team Score*/}
            <a style={{
                position: "absolute",
                textAlign: "center",
                //border: "1px solid red",
                top: "55px",
                right: "545px",

            }}>
                <h3
                    //className="borderer"
                    style={{
                        position: "relative",
                        //border: "1px solid red",
                        transform: "translate(50%, 0)"
                    }}>
                    {GameState.showScore ?
                        <ScoreDisplayer
                            className=""
                            displayType={GameState.showScore}
                            score={GameState.redScore}
                            bestOf={GameState.bestOf}
                            seriesWins={GameState.redSeries}
                            reverse={false}
                        /> : ""}</h3>
            </a>

            {/*Tournament Name*/}
            <a style={{
                position: "absolute",
                textAlign: "center",
                //border: "1px solid red",
                top: "822px",
                left: "966px",

            }}>
                <h1 style={{
                    position: "relative",
                    //border: "1px solid red",
                    transform: "translate(-50%, 0)"
                }}>
                    {GameState.tournamentName}</h1>
            </a>

            <img style={{
                position: "absolute",
                zIndex: "-1"
            }} src={SpectatorOverlay} />

            {GameState.showScore != "" ?
                <img style={{
                    zIndex: "-1",
                    position: "absolute"
                }} src={ScoreOverlay}
                />
                : <></>}
        </div>
    )
}