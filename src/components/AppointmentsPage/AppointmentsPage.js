import { Component } from "react";
import { List } from "@material-ui/core";
import AppointmentList from "../AppointmentsList/AppointmentsList";
import { connect } from "react-redux";
import AppointmentsModal from "./AppointmentsModal";
import { bindActionCreators } from "redux";
import * as actions from '../../actions/action'


class AppointmentsPage extends Component {
    openModal = (appointment) => {
        this.props.action.toggleModal();
        this.props.action.selectAppointment(appointment);
    }

    closeModal = () => {
        this.props.action.toggleModal();
    }

    handleChange = (e) => {
        let newAppointment = {
            ...this.props.selectedAppointment,
            [e.target.id]: e.target.value
        };
        this.props.action.updateForm(newAppointment)
    }

    handleSave = () => {
        let updatedAppointment;

        if(this.props.selectedAppointment.name !== '' || this.props.selectedAppointment.number !== '') {
            updatedAppointment = {
                ...this.props.selectedAppointment,
                available: false
            };
        } else {
            updatedAppointment = {
                ...this.props.selectedAppointment,
                available: true
            };
        }

        let newAppointment = this.props.appointments.map(appointment => {
            if(appointment.time === this.props.selectedAppointment.time) {
                return updatedAppointment;
            } else {
                return appointment;
            }
        });

        this.props.action.updateAppointment(newAppointment);
        this.props.action.toggleModal();
    }

    render() {
        console.log(this.props);
        let appointmentsList = this.props.appointments.map(appointment => {
            return(
                <div onClick={() => this.openModal(appointment)} key={appointment.time}>
                    <AppointmentList 
                        time = {appointment.time}
                        name = {appointment.name}
                        number = {appointment.number}
                        available = {appointment.available}
                    />
                </div>
            )
        });

        return(
            <div>
                <List>
                    {appointmentsList}
                </List>
                <AppointmentsModal 
                   open={this.props.open}
                   handleClose={this.closeModal}
                   selectedAppointment={this.props.selectedAppointment}
                   handleChange={this.handleChange}
                   handleSave={this.handleSave}
                />
            </div>
        );
    };
}

const mapStateToProps = (state) => ({
    open: state.open,
    appointments: state.appointments,
    selectedAppointment: state.selectedAppointment
});


const mapDispatchToProps = (dispatch) => ({
  action: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentsPage)
