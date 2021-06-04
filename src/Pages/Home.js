import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import axios from 'axios'

import Header from '../Components/Header'
import { blueImage, blueName, blueShortName, blueScore, blueSeries, redImage, redName, redShortName, redScore, redSeries, tournamentName, gameState, showScore, hudScale, gameResolution, bestOf } from '../Actions'

import { Form, Button } from 'react-bootstrap';
import RangeSlider from 'react-bootstrap-range-slider';
import { Col, Grid, Row } from 'react-flexbox-grid';

import TeamInfoSetter from '../Components/TeamInfoSetter'

export default function Home() {
	const dispatch = useDispatch();

	const state_blueImage = useSelector(state => state.blueImage)
	const state_blueName = useSelector(state => state.blueName)
	const state_blueShortName = useSelector(state => state.blueShortName)
	const state_blueScore = useSelector(state => state.blueScore)
	const state_blueSeries = useSelector(state => state.blueSeries)

	const state_redImage = useSelector(state => state.redImage)
	const state_redName = useSelector(state => state.redName)
	const state_redShortName = useSelector(state => state.redShortName)
	const state_redScore = useSelector(state => state.redScore)
	const state_redSeries = useSelector(state => state.redSeries)

	const state_bestOf = useSelector(state => state.gameState)
	const state_gameState = useSelector(state => state.gameState)
	const state_tournamentName = useSelector(state => state.tournamentName)
	const state_showScore = useSelector(state => state.showScore)
	const state_hudScale = useSelector(state => state.hudScale)
	const state_gameResolution = useSelector(state => state.gameResolution)
	const state = useSelector(state => state)

	const [_hudScale, set_hudScale] = useState(state_hudScale)

	const [imageOptions, set_imageOptions] = useState([])
	const [teamOptions, set_teamOptions] = useState([])

	const handleSubmit = (event) => {
		event.preventDefault();

		axios.post('http://localhost:30061/saveConfig', state)
	}

	//Gets avaliable images
	useEffect(() => {
		let options = [];

		fetch('http://localhost:30061/images')
			.then(response => response.json())
			.then(data => {
				//Add empty image if ya know, empty
				options.push(<option value={``}></option>)
				data.forEach(element => {
					options.push(<option value={`TeamImages/${element}`}>{element}</option>)
				});
				set_imageOptions(options)
			})
	}, [state_blueImage, state_redImage])

	//Gets avaliable teams
	useEffect(() => {
		let options = [];

		fetch('http://localhost:30061/teams')
			.then(response => response.json())
			.then(data => {
				//Add empty image if ya know, empty
				options.push(<option value={``}></option>)
				data.forEach(element => {
					options.push(<option value={`${element}`}>{element}</option>)
				});
				set_teamOptions(options)
			})
	}, [])

	//Oh god this is jank but fine
	const swapTeams = (event) => {
		event.preventDefault();
		//console.log("Swapping teams")

		let temp_blueImage = state_blueImage;
		let temp_blueName = state_blueName;
		let temp_blueShortName = state_blueShortName;
		let temp_blueScore = state_blueScore;
		let temp_blueSeries = state_blueSeries;

		let temp_redImage = state_redImage;
		let temp_redName = state_redName;
		let temp_redShortName = state_redShortName;
		let temp_redScore = state_redScore;
		let temp_redSeries = state_redSeries;

		dispatch(blueImage(temp_redImage))
		dispatch(blueName(temp_redName))
		dispatch(blueShortName(temp_redShortName))
		dispatch(blueScore(temp_redScore))
		dispatch(blueSeries(temp_redSeries))
		dispatch(redImage(temp_blueImage))
		dispatch(redName(temp_blueName))
		dispatch(redShortName(temp_blueShortName))
		dispatch(redScore(temp_blueScore))
		dispatch(redSeries(temp_blueSeries))

		axios.post('http://localhost:30061/saveConfig', state)
	}

	return (
		<div>

			<Header />
			<Grid fluid className="content-center pb-16">
				<Row center="xs" className="content-center">
					<Col className=" w-4/6 m-8 border-gray-600 border-2 rounded-xl">
						<Form>
							<Grid fluid className="pt-4">
								<Row center="xs">
									<Col className="w-5/12 p-2 border border-gray-200 rounded-xl mx-2">
										<Form.Label className="text-white">Show Score or Series & Overlay Elements</Form.Label>
										<Form.Control
											className="m-auto col-xs-4"
											onChange={e => dispatch(showScore(e.target.value))}
											value={state_showScore}
											as="select">
											<option value="">None</option>
											<option value="score">Score</option>
											<option value="series">Series Progress</option>
										</Form.Control>
									</Col>
									<Col className="w-5/12 p-2 border border-gray-200 rounded-xl mx-2">
										<Form.Label className="text-white">Tournament Name</Form.Label>
										<Form.Control
											onChange={e => dispatch(tournamentName(e.target.value))}
											value={state_tournamentName}></Form.Control>
									</Col>
								</Row>
								<Row center="xs" className="my-4">
									<Col className="w-5/12 p-2 border border-gray-200 rounded-xl mx-2 items-center">
										<Form.Label className="text-white">Series Settings</Form.Label>
										<Form.Control
											value={state_bestOf}
											className="col-xs-4 m-auto"
											as="select"
											onChange={e => dispatch(bestOf(e.target.value))}>
											<option value={"1"}>Best of 1</option>
											<option value={"2"}>Best of 2</option>
											<option value={"3"}>Best of 3</option>
											<option value={"5"}>Best of 5</option>
										</Form.Control>
									</Col>
									<Col className="w-5/12 p-2 border border-gray-200 rounded-xl mx-2">
										<Row center="xs" className="m-auto items-center">
											<Form.Label className="text-white">Game HUD Scale</Form.Label>
											<RangeSlider
												tooltip="off"
												className="mx-4"
												min="1"
												max="100"
												value={_hudScale}
												onChange={changeEvent => set_hudScale(changeEvent.target.value)}
												onAfterChange={changeEvent => dispatch(hudScale(changeEvent.target.value))}
											/>
											<Form.Control
												className="col-xs-2"
												value={_hudScale}
												onChange={changeEvent => {
													set_hudScale(changeEvent.target.value)
													dispatch(hudScale(changeEvent.target.value))
												}}>
											</Form.Control>
										</Row>
										{/*}
										<Row center="xs" className="m-auto items-center pt-2">
											<Form.Label className="text-white">Game Resolution</Form.Label>
											<Form.Control
												as="select"
												className="ml-4 col-xs-5"
												value={state_gameResolution}
												onChange={event => dispatch(gameResolution(event.target.value))}
											>
												<option value="1920x1080">1920 x 1080</option>
												<option value="2560x1440">2560 x 1440</option>
											</Form.Control>
										</Row>
										{*/}
									</Col>
								</Row>
							</Grid>
							<Button className="mb-2" variant="outline-success" type="submit" onClick={handleSubmit}>
								<h5 className="pt-2 px-2">Save</h5>
							</Button>
						</Form>
					</Col>
				</Row>
				<Row center="xs" className="content-center">
					<TeamInfoSetter
						side="Blue"
						borderColor="border-blue-600"
						headerColor="text-blue-600"
						images={imageOptions}
						handleSubmit={handleSubmit}
						name={state_blueName}
						shortName={state_blueShortName}
						image={state_blueImage}
						score={state_blueScore}
						series={state_blueSeries}
						dispatch_name={blueName}
						dispatch_shortName={blueShortName}
						dispatch_image={blueImage}
						dispatch_score={blueScore}
						dispatch_series={blueSeries}
						teams={teamOptions}
					/>

					<Col className="flex content-center">
						<Button className="m-auto" variant="outline-info" onClick={swapTeams}>
							Swap Teams
							<br />
							{`<->`}
						</Button>
					</Col>

					<TeamInfoSetter
						side="Red"
						borderColor="border-red-600"
						headerColor="text-red-600"
						images={imageOptions}
						handleSubmit={handleSubmit}
						name={state_redName}
						shortName={state_redShortName}
						image={state_redImage}
						score={state_redScore}
						series={state_redSeries}
						dispatch_name={redName}
						dispatch_shortName={redShortName}
						dispatch_image={redImage}
						dispatch_score={redScore}
						dispatch_series={redSeries}
						teams={teamOptions}
					/>

				</Row>
			</Grid>

		</div>

	)
}