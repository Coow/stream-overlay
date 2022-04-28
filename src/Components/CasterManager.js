import axios from 'axios'

import { useSelector, useDispatch } from 'react-redux';

import { Col, Grid, Row } from 'react-flexbox-grid';
import { Form, Button } from 'react-bootstrap';

export default function (props) {

    const dispatch = useDispatch();

    return (
        <Row center="xs" className="text-white m-auto items-center border border-gray-200 rounded-xl">
            <Form>
                <Form.Label>Caster Name</Form.Label>
                <Form.Control
                    inline
                    className="mx-16 col-xs-8"
                    value={props.caster}
                    onChange={e => dispatch(props.dispatch_caster(e.target.value))}
                ></Form.Control>


                <Form.Label className="text-white mt-2">Caster Picture</Form.Label>
                <Form.Row inline className="mx-2 mb-2">
                    <Form.File inline className="w-5/12" accept="image/*"
                        onChange={event => {
                            event.preventDefault();

                            const data = new FormData()
                            data.append('file', event.target.files[0])

                            const file = event.target.files[0];
                            dispatch(props.dispatch_caster_image(`CasterImages/${file.name}`))

                            fetch('http://localhost:30061/uploadImage/CasterImages', {
                                method: 'post',
                                body: data
                            })
                        }}
                    ></Form.File>
                    <Form.Label className="p-2 mr-4">Or Select</Form.Label>

                    <Form.Control inline as="select"
                        onChange={event => {
                            console.log(event)
                            dispatch(props.dispatch_caster_image(`${event.target.value}`))
                        }}
                        value={props.casterImage}
                        className=" col-xs-4">
                        {props.images}
                    </Form.Control>
                </Form.Row>

                <img className="m-auto"
                    style={{
                        maxWidth: "100%",
                        height: "12rem",
                        maxHeight: "12rem"
                    }}
                    src={props.casterImage ? props.casterImage : ""} />

                <div className="inline-flex w-80 items-center border-gray-600 border-2 rounded-xl p-2">
                    <Button
                        className="m-auto"
                        variant="outline-success"
                        onClick={event => {
                            event.preventDefault();

                            axios.post('http://localhost:30061/saveCaster', {
                                casterName: props.caster,
                                info: {
                                    name: props.caster,
                                    casterImage: props.casterImage
                                }
                            })
                        }}>
                        Save to File
                    </Button>

                    <a className="m-auto text-white">Or Load</a>

                    <Form.Control inline as="select"
                        onChange={event => {
                            axios.get(`Casters/${event.target.value}`, {
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Accept': 'application/json'
                                }
                            })
                                .then(response => {
                                    console.log(response)
                                    //If the input value was `` it will return an array instead, so check if the length is something and return
                                    if (response.data.length >= 0) return;
                                    dispatch(props.dispatch_caster(response.data.name))
                                    dispatch(props.dispatch_caster_image(response.data.casterImage))
                                })
                        }}
                        className="col-xs-4 m-auto">
                        {props.casters}
                    </Form.Control>
                </div>
            </Form>
        </Row>
    )
}