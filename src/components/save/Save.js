import React from "react";
import Icons from "../save/Icons"


export default class Save extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isSaved : false,
        }
        
    }

    buttonSave = () => {
        this.setState({
            isSaved : !this.state.isSaved,
        })
    }

    render () {
        return (
            <div>
                <div className="save">
                <button className=" btn btn-transparency" onClick={this.buttonSave}><Icons guardar={this.state.isSaved}/></button>
                </div>
            </div>
        )
    }

}