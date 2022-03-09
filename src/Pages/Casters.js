import ash from '../Images/Casters/ash.png'
import camran from '../Images/Casters/camran.png'
import cow from '../Images/Casters/cow.gif'
import docm77 from '../Images/Casters/docm77.png'
import doublife from '../Images/Casters/doublife.jpg'
import doublex from '../Images/Casters/doublex.png'
import joe from '../Images/Casters/joe.jpg'
import manipendeh from '../Images/Casters/manipendeh.jpg'
import marksman from '../Images/Casters/marksman.png'
import mimowei from '../Images/Casters/mimowei.jpg'
import methodzz from '../Images/Casters/methodzz.jpg'
import guomayo from '../Images/Casters/guomayo.jpg'
import thesnowspy from '../Images/Casters/thesnowspy.jpg'
import gizmo from '../Images/Casters/gizmo.jpg'

import { Col, Grid, Row } from 'react-flexbox-grid';

export default function Casters() {
    return (
        <Row center="xs" className="h-screen px-80 content-center flex justify-center ">

            <Col xs className="text-white caster ">
                <img src={cow} className="mb-4 "/>
                <h3 className="text-5xl"> @AnMagicalCow</h3>
            </Col>

            <Col xs className="text-white caster ">
                <img src={gizmo} className="mb-4 "/>
                <h3 className="text-5xl"> @SupGizmo</h3>
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