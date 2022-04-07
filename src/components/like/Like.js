import axios from "axios";
import React, { useState } from "react";
import like from "../../img/icons/like1 - copia.png";
import like2 from "../../img/icons/like2.png";
import { useStateValue } from "../../StateProvider";

const Likes = (props) => {

        const [{ user }, dispatch] = useStateValue();
        const [likes, setLikes] = useState(props.likes);
        
        console.log(props)

        const likeDislike= async ()=>{
            const token = localStorage.getItem("token")
        console.log(user)
        await axios.put(`http://localhost:4000/api/likesDislike/${props.id}`, {}, {
            headers:{
              'Authorization':'Bearer ' + token
            }
          })
        .then(response=>setLikes(response.data.response))
        }

        const colorheart= likes?.includes(user.datosUser.id) ? (
            <span>
              <img src={like2} className="icobut btn d-block w-100" alt="..." />
            </span>
          ) : (
            <span>
              <img src={like} className="icobut btn d-block w-100" alt="..." />
            </span>
          )

        
        return (
            <div>
                <div className="likes">
                <button className="likes2 btn btn-transparency" onClick={likeDislike}>{colorheart}</button>
                <p className="textolike">{likes?.length}</p>
                </div>
            </div>
        )
    }

    export default Likes;