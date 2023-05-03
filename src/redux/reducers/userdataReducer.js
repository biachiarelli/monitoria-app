const INITIAL_STATE = {
    id: 0,
    name: '',
    role: '',
    course: '',
    discipline: '',
    class: '',
    email: '',
}

const userdataReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SAVE_USER_DATA':
            return action.payload
        default:
            return state
    }
}

export default userdataReducer