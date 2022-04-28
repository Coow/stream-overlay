import { useEffect, useState } from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid';

import GameState from './GameState.json'

export default function Casters() {

    const [casters, set_casters] = useState([])

    let casterArray = [{
        name: GameState.caster1,
        image: GameState.caster1Image,
    }, {
        name: GameState.caster2,
        image: GameState.caster2Image,
    }, {
        name: GameState.caster3,
        image: GameState.caster3Image,
    }, {
        name: GameState.caster4,
        image: GameState.caster4Image,
    }]

    useEffect(() => {
        let array = []

        for (let i = 0; i < GameState.casterAmount; i++) {

            array.push(<Col xs className="text-white caster ">
                <img src={`/${casterArray[i].image}`} className={`mb-4 caster${i + 1}image`} />
                <h3 className={`text-5xl caster${i + 1}`}>{casterArray[i].name}</h3>
            </Col>)
        }

        set_casters(array)
    }, [])

    return (
        <>
            <link rel="stylesheet" type="text/css" href={`../${GameState.casterCSS}`} />
            <Row center="xs" className="h-screen px-80 content-center flex justify-center ">
                {casters}
            </Row>
        </>
    )
}