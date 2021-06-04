import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import {
    NavLink
} from "react-router-dom";


export default function () {
    return (
        <Navbar expand="sm" variant="dark" bg="dark" className=" h-16">
            <Nav>
                <Nav.Link><NavLink className="text-white hover:no-underline" to="Casters">Casters</NavLink></Nav.Link>

                <Nav.Link><NavLink className="text-white hover:no-underline" to="Matchup">Matchup</NavLink></Nav.Link>

                <Nav.Link><NavLink className="text-white hover:no-underline" to="LeagueOverlay">Spectator Overlay</NavLink></Nav.Link>
                
                <Nav.Link><NavLink className="text-white hover:no-underline" to="">End of Stream</NavLink></Nav.Link>
            </Nav>
        </Navbar>
    )
}