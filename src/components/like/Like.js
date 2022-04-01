import axios from "axios";
import React from "react";
import Icon from "../like/Icon"
import Text from "../like/Text"

export default class Like extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLiked : false,
        }
    }


    buttonLike = () => {
        this.setState({
            isLiked : !this.state.isLiked,
        })
    }


    render (props) {

        //const [{ user }, dispatch] = useStateValue();



        //const likeDislike= async ()=>{
        //await axios.put(`http://localhost:4000/api//likesDislike/${user.id}`)
        //}

        
        return (
            <div>
                <div className="likes">
                <button className="likes2 btn btn-transparency" onClick={this.buttonLike}><Icon gustar={this.state.isLiked}/></button>
                <p className="textolike"><Text isLiked={this.state.isLiked}/></p>
                </div>
            </div>
        )
    }


}