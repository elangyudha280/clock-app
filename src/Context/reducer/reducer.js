


function reducerZone(state={},action){
    switch (action.type) {
        case'getDataZone':
        return{...state,dataZone:action.payload}
        case 'toggleZone':
            return {...state,toggleZone:(state.toggleZone) ? false :true}
        case 'getClockZone':
            return {...state,clockZone:action.payload}
        default:
            break;
    }
}

export default reducerZone