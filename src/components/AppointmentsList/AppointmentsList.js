import { Component } from 'react';


export default class AppointmentList extends Component {
    render() {
        let time = this.props.time;
        let name = this.props.name ? this.props.name : 'Available';
        let number = this.props.number ? ` : ${this.props.number}` : '';
        let status = this.props.available ? 'available' : 'booked';

        return(
            <div>
                <hr />
                    <button className={status}>
                    {time} {name} {number}
                    </button>
                <hr/>
            </div>
        )
    }
}