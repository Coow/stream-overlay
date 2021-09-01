import GameState from './GameState.json'

import Small from "../Images/Overlay/Small.png"
import Scoreboard from "../Images/Overlay/Scoreboard.png"

import pscale0 from "../Images/Reference/1920x1080p scale0.png"
import pscale100 from "../Images/Reference/1920x1080p scale100.png"
import scale0 from "../Images/Reference/scale0.png"
import scale68 from "../Images/Reference/scale68.png"
import scale100 from "../Images/Reference/scale100.png"

export default function () {
    const HudScale = parseInt(GameState.hudScale)
    const imageWidth = 172;
    const left = `${716 - ((imageWidth + HudScale) * 1.1)}px`

    function chooseImage() {
        if (HudScale === 1) {
            return pscale0;
        } else {
            return pscale100;
        }
    }
    return (
        <div>
            <img src={chooseImage()} style={{
                position: "absolute",
                width: "1920px",
                height: "1080px"
            }} />

            <a
                className="borderer"
                style={{
                    zIndex: "2",
                    position: "absolute",
                    width: "200px",
                    height: "20px"
                }}>
            </a>

            <a style={{
                position: "absolute",
                textAlign: "center",
                //border: "1px solid red",
                top: "0px",
                left: left,
                //right: `${1200 + (parseInt(GameState.hudScale) * 0.9)}px`,
                //right: `${61.8 + (parseInt(GameState.hudScale) / 13)}%`,

            }}>
                <img src={Small}
                    style={{
                        position: "relative",
                        transform: "translate(0, 0)",
                        //border: "1px solid red",
                        //width: `${112 + (parseInt(GameState.hudScale))}px`,
                        //maxWidth: `${112 * (parseInt(GameState.hudScale))}px`,
                        maxHeight: "100%",
                        //maxWidth: "81%",
                        //maxWidth: `${71 + (parseInt(GameState.hudScale) /10)}%`,
                        color: "white"
                    }}
                />
            </a>
        </div>
    )
}