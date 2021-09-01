import ash from '../Images/Casters/ash.png'
import camran from '../Images/Casters/camran.png'
import cow from '../Images/Casters/cow.gif'
import doublife from '../Images/Casters/doublife.jpg'
import joe from '../Images/Casters/joe.jpg'
import manipendeh from '../Images/Casters/manipendeh.jpg'
import mimowei from '../Images/Casters/mimowei.jpg'
import methodzz from '../Images/Casters/methodzz.jpg'

import { Col, Grid, Row } from 'react-flexbox-grid';

export default function Casters() {
    return (
        <Row center="xs" className="h-screen px-80 content-center flex justify-center ">

            <Col xs className="text-white caster caster1">
                <img src={cow} className="mb-4 "/>
                <h3 className="text-5xl"> @ANMAGICALCOW</h3>
            </Col>

            <Col xs className="text-white caster caster2">
                <img src={ash} className="mb-4 "/>
                <h3 className="text-5xl"> @FLUFFYCHAOS</h3>
            </Col>
        </Row>
    )
}
/*
                  <div>
            <div className="caster caster1 text-white">
                <img src={joe}/>
                <h3 className="text-5xl"> @KINGRAMBOJOE</h3>
            </div>
            <div className="caster caster2 text-white">
                <img src={cow}/>
                <h3 className="text-5xl"> @ANMAGICALCOW</h3>
            </div>
        </div>  
*/