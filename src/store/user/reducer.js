const defaultState = {
    name: "z",
    email: "m",
    address: "22",
    phone: "",
    gender: "g",
    birthday: "O9",
    new_client: true,
    note: "o"
}
//console.log("user", defaultState)

function userReducer (state = defaultState, action){

    //console.log("user reducer", action.payload)

    switch(action.type){
    default: 
         return state
    }
}

export default userReducer