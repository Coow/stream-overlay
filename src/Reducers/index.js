import { combineReducers } from 'redux';

import counter from './counter'

const allReducers = combineReducers({
    counter,
    blueImage,
    blueName,
    blueShortName,
    blueScore,
    blueSeries,
    redImage,
    redName,
    redShortName,
    redScore,
    redSeries,
    gameState,
    tournamentName,
    hudScale,
    gameResolution,
    bestOf,
    showScore,
    casters
})

export default allReducers;

//#region GLOBALS
function tournamentName(state = null, action) {
    switch (action.type) {
        case 'TOURNAMENT_NAME':
            return state = action.payload;
        default:
            return state;
    }
};

function gameState(state = null, action) {
    switch (action.type) {
        case 'GAME_STATE':
            return state = action.payload;
        default:
            return state;
    }
};

function showScore(state = null, action) {
    switch (action.type) {
        case 'SHOW_SCORE':
            return state = action.payload;
        default:
            return state;
    }
};

function hudScale(state = 0, action) {
    switch (action.type) {
        case 'SET_HUD_SCALE':
            return state = action.payload;
        default:
            return state;
    }
};

function gameResolution(state = null, action) {
    switch (action.type) {
        case 'SET_RESOLUTION':
            return state = action.payload;
        default:
            return state;
    }
};

function bestOf(state = 0, action) {
    switch (action.type) {
        case 'SET_BEST_OF':
            return state = action.payload;
        default:
            return state;
    }
};

function casters(state = [], action) {
    switch (action.type) {
        case 'SET_CASTERS':
            return state = action.payload;
        default:
            return state;
    }
};

//#endregion

//#region BLUE SIDE
function blueName(state = null, action) {
    switch (action.type) {
        case 'BLUE_NAME':
            return state = action.payload;
        default:
            return state;
    }
};

function blueShortName(state = null, action) {
    switch (action.type) {
        case 'BLUE_SHORT_NAME':
            return state = action.payload;
        default:
            return state;
    }
};

function blueScore(state = null, action) {
    switch (action.type) {
        case 'BLUE_SCORE':
            return state = action.payload;
        default:
            return state;
    }
};

function blueSeries(state = 0, action) {
    switch (action.type) {
        case 'BLUE_SERIES':
            return state = action.payload;
        default:
            return state;
    }
};

function blueImage(state = null, action) {
    switch (action.type) {
        case 'BLUE_IMAGE':
            return state = action.payload;
        default:
            return state;
    }
};
//#endregion

//#region RED SIDE
function redName(state = null, action) {
    switch (action.type) {
        case 'RED_NAME':
            return state = action.payload;
        default:
            return state;
    }
};

function redShortName(state = null, action) {
    switch (action.type) {
        case 'RED_SHORT_NAME':
            return state = action.payload;
        default:
            return state;
    }
};

function redScore(state = null, action) {
    switch (action.type) {
        case 'RED_SCORE':
            return state = action.payload;
        default:
            return state;
    }
};

function redSeries(state = 0, action) {
    switch (action.type) {
        case 'RED_SERIES':
            return state = action.payload;
        default:
            return state;
    }
};

function redImage(state = null, action) {
    switch (action.type) {
        case 'RED_IMAGE':
            return state = action.payload;
        default:
            return state;
    }
};


//#endregion
