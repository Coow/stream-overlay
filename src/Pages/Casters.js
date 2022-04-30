import { useEffect, useState } from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid';

import GameState from './GameState.json'

export default function Casters() {

    const [casters, set_casters] = useState([])

    let casterArray = [{
        handle: GameState.caster1,
        name: GameState.caster1Name,
        image: GameState.caster1Image,
    }, {
        handle: GameState.caster2,
        name: GameState.caster2Name,
        image: GameState.caster2Image,
    }, {
        handle: GameState.caster3,
        name: GameState.caster3Name,
        image: GameState.caster3Image,
    }, {
        handle: GameState.caster4,
        name: GameState.caster4Name,
        image: GameState.caster4Image,
    }]

    useEffect(() => {
        let array = []

        for (let i = 0; i < GameState.casterAmount; i++) {

            array.push(<Col xs className="text-white caster ">
                <img src={`/${casterArray[i].image}`} className={`caster${i + 1}Image`} />
                <div className="casterText">
                    <h3 className={`text-5xl casterName caster${i + 1}Name`}>{casterArray[i].name}</h3>
                    <h3 className={`text-5xl casterHandle caster${i + 1}`}>{casterArray[i].handle}</h3>
                </div>
            </Col>)
        }

        set_casters(array)
    }, [])

    return (
        <>
            <link rel="stylesheet" type="text/css" href={`../${GameState.casterCSS}`} />
            <Row center="xs" className="casterDesk h-screen content-center flex justify-center ">
                {casters}
            </Row>
        </>
    )
}