export const SELECT_APPOINTMENT = 'SELECT_APPOINTMENT';
export const UPDATE_APPOINTMENT = 'UPDATE_APPOINTMENT';
export const UPDATE_FORM = 'UPDATE_FORM';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';

export const selectAppointment = appointment => ({
    type: SELECT_APPOINTMENT,
    payload: {
        time: appointment.time,
        name: appointment.name,
        number: appointment.number,
        available: appointment.available
    }
});

export const updateAppointment = (appointments) => ({
    type: UPDATE_APPOINTMENT,
    payload: {
        appointments: appointments
    }
});

export const toggleModal = () => ({
    type: TOGGLE_MODAL
});

export const updateForm = (appointment) => ({
    type: UPDATE_FORM,
    payload: {
        time: appointment.time,
        name: appointment.name,
        number: appointment.number,
        available: appointment.available
    }
});
