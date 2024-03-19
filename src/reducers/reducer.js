import { SELECT_APPOINTMENT, UPDATE_APPOINTMENT, UPDATE_FORM, TOGGLE_MODAL } from "../actions/action";

export default function appointmentsReducer(state = initialState, action) {
    switch(action.type) {
        case SELECT_APPOINTMENT:
            return {
                ...state,
                selectedAppointment: action.payload
            }      
        case UPDATE_FORM:
            return {
                ...state,
                selectedAppointment: action.payload
            };
        
        case TOGGLE_MODAL:
            return {
            ...state,
            open: !state.open
            }

        case UPDATE_APPOINTMENT:
            return {
                ...state,
                appointments: action.payload.appointments
            }

        default:
            return state;
  }
}

const initialState = {
    open: false,
    appointments: 
[
      {
        time: '9:00am - 10:00am',
        name: '',
        number: '',
        available: true
      },
      {
        time: '10:00am - 11:00am',
        name: '',
        number: '',
        available: true
      },
      {
        time: '11:00am - 12:00pm',
        name: '',
        number: '',
        available: true
      },
      {
        time: '12:00pm - 1:00pm',
        name: '',
        number: '',
        available: true
      },
      {
        time: '1:00pm - 2:00pm',
        name: '',
        number: '',
        available: true
      },
      {
        time: '2:00am - 3:00pm',
        name: '',
        number: '',
        available: true
      },
      {
        time: '3:00pm - 4:00pm',
        name: '',
        number: '',
        available: true
      },
      {
        time: '4:00pm - 5:00pm',
        name: '',
        number: '',
        available: true
      },
  ],
  selectedAppointment: [{
    time: '',
    name: '',
    number: '',
    available: true
  }]
};