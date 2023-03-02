


function reducerZone(state={},action){
    switch (action.type) {
        case'getDataZone':
        return{...state,dataZone:action.payload}
        case 'toggleZone':
            return {...state,toggleZone:(state.toggleZone) ? false :true}
        default:
            break;
    }
}

export default reducerZone