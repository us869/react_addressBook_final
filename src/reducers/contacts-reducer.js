import {
    ADD_CONTACT,
    DELETE_CONTACT,
    FETCH_CONTACTS,
    GET_CONTACT
} from "../actions/types";

export default (state = {
    contacts: []
}, action) => {

    switch (action.type) {
        case ADD_CONTACT: {
            let contacts = [...state.contacts];
            // let newId = 1;

            // if (contacts.length > 0) {
            //     newId = Math.max(...contacts.map(c => c.id)) + 1
            // }
            // action.data.id = newId;
            contacts.push(action.data);
            return {
                ...state,
                contacts
            }
        }

        case DELETE_CONTACT: {
            let contacts = [...state.contacts];
            let index = contacts.findIndex(c => c.id === action.data);
            if (index !== -1) {
                contacts.splice(index, 1);
            }
            return {
                ...state,
                contacts
            }
        }

        case FETCH_CONTACTS: {
            return {
                ...state,
                contacts: action.data
            }
        }

        case GET_CONTACT: {
            return {
                ...state,
                contact: action.data
            }
        }

        default:

            return state;
    }
}