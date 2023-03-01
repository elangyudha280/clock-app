


function reducerZone(state={},action){
    switch (action.type) {
        case 'toggleZone':
            return {...state,toggleZone:(state.toggleZone) ? false :true}
        default:
            break;
    }
}

export default reducerZone