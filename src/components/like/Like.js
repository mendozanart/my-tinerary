import React from "react";
import Icon from "../like/Icon"

export default class Like extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLiked : true,
        }
        
    }

    buttonLike = () => {
        this.setState({
            isLiked : !this.state.isLiked,
        })
    }

    render () {
        return (
            <div>
                <div className="likes">
                <button className="btn btn-transparency" onClick={this.buttonLike}><Icon gustar={this.state.isLiked}/></button>
                <p className="textolike">1310</p>
                </div>
            </div>
        )
    }

}