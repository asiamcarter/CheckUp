import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class AppointmentCard extends Component {

    state = {
        notes: []
    }

    getNote = () => {
        this.props.getAppointmentNotes(this.props.appointment.id)
            .then(allNotes => {
                allNotes.notes.map(note => (
                    this.setState({
                        notes: note.note
                    }, this.viewNote)
                ))

            })

    }

    viewNote = () => {
        return (console.log(this.state))
    }


    noteButton = () => {
        if (this.props.appointment.noteId === "") {
            return (
                <>
                    <button type="button" onClick={() => console.log("clicked!")}>Add Note</button>
                </>
            )
        } else {
            return (
                <>
                    <button type="button" onClick={() => this.getNote()}>View Note</button>
                </>
            )
        }

    }

    showUserAppointments = () => {
        // console.log(parseInt(sessionStorage.getItem("User")), this.props.appointment.userId)
        if (this.props.appointment.userId === parseInt(sessionStorage.getItem("User"))) {
            return (
                <>
                    <div key={this.props.appointment.id}
                        className="card">
                        <div className="card-body">
                            <div>
                                <h5 className="card-title">
                                    {this.props.appointment.doctor.name}
                                </h5>
                                <p>{this.props.appointment.doctor.location}</p>
                                <hr />
                            </div>
                            <div>
                                <Link to={`/appointments/editappointment/${this.props.appointments.id}`}>Edit</Link>
                                <p>Date: {this.props.appointment.date}</p>
                                <p>Time: {this.props.appointment.time}</p>
                                <p>Reason: {this.props.appointment.reason}</p>
                                <p>{this.state.notes}</p>
                                {this.noteButton()}
                            </div>
                        </div>

                    </div>
                </>

            )
        }
    }
    render() {
        return (
            <>
                {this.showUserAppointments()}
            </>
        )
    }
}