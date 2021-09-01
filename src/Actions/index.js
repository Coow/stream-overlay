export const tournamentName = (data) => {
    return {
        type: 'TOURNAMENT_NAME',
        payload: data
    }
}

export const blueName = (data) => {
    return {
        type: 'BLUE_NAME',
        payload: data
    }
}

export const blueShortName = (data) => {
    return {
        type: 'BLUE_SHORT_NAME',
        payload: data
    }
}

export const blueImage = (data) => {
    return {
        type: 'BLUE_IMAGE',
        payload: data
    }
}


export const blueScore = (data) => {
    return {
        type: 'BLUE_SCORE',
        payload: data
    }
}

export const blueSeries = (data) => {
    return {
        type: 'BLUE_SERIES',
        payload: data
    }
}


export const redName = (data) => {
    return {
        type: 'RED_NAME',
        payload: data
    }
}

export const redShortName = (data) => {
    return {
        type: 'RED_SHORT_NAME',
        payload: data
    }
}


export const redImage = (data) => {
    return {
        type: 'RED_IMAGE',
        payload: data
    }
}


export const redScore = (data) => {
    return {
        type: 'RED_SCORE',
        payload: data
    }
}

export const redSeries = (data) => {
    return {
        type: 'RED_SERIES',
        payload: data
    }
}

export const gameState = (data) => {
    return {
        type: 'GAME_STATE',
        payload: data
    }
}

export const showScore = (data) => {
    return {
        type: 'SHOW_SCORE',
        payload: data
    }
}

export const hudScale = (data) => {
    return {
        type: 'SET_HUD_SCALE',
        payload: data
    }
}

export const gameResolution = (data) => {
    return {
        type: 'SET_RESOLUTION',
        payload: data
    }
}

export const bestOf = (data) => {
    return {
        type: 'SET_BEST_OF',
        payload: data
    }
}

export const casters = (data) => {
    return {
        type: 'SET_CASTERS',
        payload: data
    }
}