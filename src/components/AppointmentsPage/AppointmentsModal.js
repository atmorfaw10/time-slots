import { Component } from "react";
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class AppointmentsModal extends Component {
    render() {
      let name = this.props.selectedAppointment.name ? this.props.selectedAppointment.name : '';
      let number = this.props.selectedAppointment.number ? this.props.selectedAppointment.number : '';
      let isEnabled = (name !== '' && number !== '') || (name === '' && number === '');
        return (
          <div>
            <Dialog
              open={this.props.open}
              onClose={this.props.handleClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">Appointment Details</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    {this.props.selectedAppointment.time ? this.props.selectedAppointment.time : ''}
                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Name"
                    type="text"
                    fullWidth
                    value={this.props.selectedAppointment.name}
                    onChange={this.props.handleChange}
                  />
                  <TextField
                    margin="dense"
                    id="number"
                    label="Phone Number"
                    type="tel"
                    fullWidth
                    value={this.props.selectedAppointment.number}
                    onChange={this.props.handleChange}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.props.handleClose} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={this.props.handleSave} color="primary" disabled={!isEnabled}>
                    Save
                  </Button>
                </DialogActions>
            </Dialog>
          </div>
        );
      }
}