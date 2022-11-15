import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_DONE = "FETCH_DONE";
export const GET_DATA = "GET_DATA";




export function fetchStart() {
    return{
        type: FETCH_START
    }
}
export function fetchDone(users,event) {
    return{
        type: FETCH_DONE,
        payload :{
            users,event
        }
    }
}


export function getData() {
    return(async (dispatch) => {
        dispatch(fetchStart())
        const userList = await axios.get("https://634c991cf5d2cc648e90dc64.mockapi.io/gre/1/users")
        const eventList = await axios.get("https://634c991cf5d2cc648e90dc64.mockapi.io/gre/1/event")

        dispatch(fetchDone(userList.data,eventList.data))
    })
}