import { Form } from "react-bootstrap"
import { BsCircle, BsFillCircleFill } from 'react-icons/bs';

export default function (props) {

    function seriesDisplayer() {

        let array = []
        let maxGames = 0;

        if (props.bestOf === "5") {
            maxGames = 3
        }

        if (props.bestOf === "3" || props.bestOf === "2") {
            maxGames = 2
        }

        if (props.bestOf === "1") {
            maxGames = 1
        }


        for (let i = 0; i < props.seriesWins; i++) {
            array.push(<BsFillCircleFill className="text-green-600 inline mx-1" size={20}/>)
        }

        for (let i = 0; i < maxGames - parseInt(props.seriesWins); i++) {
            array.push(<BsCircle className="text-white inline mx-1" size={20}/>)
        }

        if(props.reverse){
            array.reverse();
        }

        return array;
    }

    if (props.displayType === "score") {
        return (
            <h2>
                {props.score}
            </h2>
        )
    }
    if (props.displayType === "series") {
        return (
            <a className="m-auto seriesButtons inline">
                {seriesDisplayer()}
            </a>
        )
    }
    else { return (<></>) }
}