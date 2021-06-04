import axios from 'axios'

import { Form, Button, Dropdown } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import { Col, Grid, Row } from 'react-flexbox-grid';

import { BiDotsVertical } from 'react-icons/bi'
import FileSaver from 'file-saver';

export default function (props) {

    const dispatch = useDispatch();

    return (
        <Col className={`w-1/3 m-8 ${props.borderColor} border-2 rounded-xl`}>
            <Form className="text-white text-center p-8" onSubmit={props.handleSubmit}>
                <h1 className={`${props.headerColor}`}>{props.side} Team</h1>
                <Form.Group>

                    <Form.Label>{props.side} Team Name / Abbriviation</Form.Label>
                    <Form.Row inline className="mb-2">
                        <Form.Control
                            inline
                            className="col-xs-8"
                            value={props.name}
                            onChange={e => dispatch(props.dispatch_name(e.target.value))}
                        ></Form.Control>

                        <Form.Control
                            inline
                            className="col-xs-3 ml-4"
                            value={props.shortName}
                            onChange={e => dispatch(props.dispatch_shortName(e.target.value))}
                        ></Form.Control>
                    </Form.Row>

                    <Form.Label>{props.side} Team Icon</Form.Label>

                    <Form.Row inline>
                        <Form.File
                            inline
                            className="w-5/12"
                            accept="image/*"
                            onChange={event => {
                                event.preventDefault();

                                const data = new FormData()
                                data.append('file', event.target.files[0])

                                const file = event.target.files[0];
                                dispatch(props.dispatch_image(`TeamImages/${file.name}`))

                                fetch('http://localhost:30061/uploadImage', {
                                    method: 'post',
                                    body: data
                                })
                            }}
                        ></Form.File>
                        <Form.Label className="p-2 mr-4">Or Select</Form.Label>

                        <Form.Control inline as="select"
                            onChange={event => {
                                console.log(event)
                                dispatch(props.dispatch_image(`${event.target.value}`))
                            }}
                            value={props.image}
                            className=" col-xs-4">
                            {props.images}
                        </Form.Control>
                    </Form.Row>

                    <Form.Label>Preview</Form.Label>

                    <img className="m-auto"
                        style={{
                            maxWidth: "100%",
                            height: "12rem",
                            maxHeight: "12rem"
                        }}

                        src={props.image ? props.image : ""} />

                    <Form.Row inline className="pt-4 items-center">
                        <Form.Label className="p-2 mr-4 ">{props.side} Team Score</Form.Label>
                        <Form.Control
                            className="col-xs-3 "
                            value={props.score}
                            onChange={e => dispatch(props.dispatch_score(e.target.value))}
                        ></Form.Control>
                        <Form.Label className="mx-2">Series Wins</Form.Label>
                        <Button
                            variant="outline-primary"
                            onClick={() => dispatch(props.dispatch_series(props.series - 1))}>
                            -</Button>
                        <Form.Control
                            className="mx-2 col-xs-1 "
                            value={props.series}
                            onChange={event => dispatch(props.dispatch_series(event.target.value))}></Form.Control>
                        <Button
                            variant="outline-primary"
                            onClick={() => dispatch(props.dispatch_series(props.series + 1))}>
                            +</Button>
                    </Form.Row>0

                </Form.Group>
                <div className="inline-flex items-center border-gray-600 border-2 rounded-xl p-2">
                    <Button
                        className="m-auto"
                        variant="outline-success"
                        onClick={event => {
                            event.preventDefault();

                            axios.post('http://localhost:30061/saveTeam', {
                                teamName: props.name,
                                info: {
                                    name: props.name,
                                    shortName: props.shortName,
                                    image: props.image,
                                    score: props.score,
                                    series: 0
                                }
                            })
                        }}>
                        Save to File
                    </Button>

                    <a className="m-auto text-white">Or Load</a>

                    <Form.Control inline as="select"
                        onChange={event => {
                            axios.get(`Teams/${event.target.value}`, {
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Accept': 'application/json'
                                }
                            })
                                .then(response => {
                                    console.log(response)
                                    //If the input value was `` it will return an array instead, so check if the length is something and return
                                    if(response.data.length >= 0) return;
                                    dispatch(props.dispatch_name(response.data.name))
                                    dispatch(props.dispatch_shortName(response.data.shortName))
                                    dispatch(props.dispatch_image(response.data.image))
                                    dispatch(props.dispatch_score(response.data.score))
                                    dispatch(props.dispatch_series(response.data.series))
                                })
                        }}
                        className="col-xs-4 m-auto">
                        {props.teams}
                    </Form.Control>
                </div>
            </Form>
        </Col>
    )
}