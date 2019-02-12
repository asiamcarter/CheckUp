//component lists are symptoms added in the database that is associated with the logged in user
import React, { Component } from "react"
import SymptomCard from "./SymptomCard"

export default class SymptomList extends Component {
    render() {
        return (
            <>
                <div className="symptomList">
                    <h2>Symptom List</h2>
                    <button type="submit" onClick={() => {
                        this.props.history.push("/track")
                    }} >
                        Add
                </button>
                </div>
                <section>
                    {this.props.symptoms.map(symptom => (

                        <SymptomCard key={symptom.id} symptom={symptom} {...this.props} />

                    ))}
                </section>
            </>
        )
    }
}