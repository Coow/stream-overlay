import axios from 'axios'

import { useSelector, useDispatch } from 'react-redux';

import { Col, Grid, Row } from 'react-flexbox-grid';
import { Form, Button } from 'react-bootstrap';

import { useEffect, useState } from 'react'

export default function (props) {

    const dispatch = useDispatch();

	const [cssOptions, set_cssOptions] = useState([])

    useEffect(() => {

        let options = [];

        fetch(`http://localhost:30061/css/${props.page}`)
        .then(response => response.json())
        .then(data => {
            //Add empty image if ya know, empty
            options.push(<option value={``}></option>)
            data.forEach(element => {
                options.push(<option value={`CSS/${props.page}/${element}`}>{element}</option>)
            });
            set_cssOptions(options)
        })
    }, [])

    return (
        <Row center="xs" className="pt-3 m-auto items-center text-white">
            <Form.Label className="pt-2 text-white">{props.page} CSS</Form.Label>
            <Form.Row inline className="mx-2 mb-2">
                <Form.File inline className="w-5/12" accept='.css'
                    onChange={event => {
                        event.preventDefault();

                        const data = new FormData()
                        data.append('file', event.target.files[0])

                        const file = event.target.files[0];
                        dispatch(props.dispatch_state(`${file.name}`))

                        fetch(`http://localhost:30061/css/${props.page}`, {
                            method: 'post',
                            body: data
                        })
                    }}></Form.File>
                    <Form.Label className="p-2 mr-4">Or Select</Form.Label>

                    <Form.Control inline as="select"
                        onChange={event => {
                            console.log(event.target.value)
                            dispatch(props.dispatch_state(`${event.target.value}`))
                        }}
                        value={props.state}
                        className="col-xs-4">
                        {cssOptions}
                    </Form.Control>
            </Form.Row>
        </Row>
    )
}