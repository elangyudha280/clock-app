


function reducerZone(state={},action){
    switch (action.type) {
        case 'toggleZone':
                console.log(state.toggleZone)
            return {...state,toggleZone:(state.toggleZone) ? false :true}
        default:
            break;
    }
}

export default reducerZone