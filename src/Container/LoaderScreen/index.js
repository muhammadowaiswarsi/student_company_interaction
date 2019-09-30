import React from "react";
import { isLoggedIn } from "./../../Service/AuthService"

class Loading extends React.Component {


    componentDidMount() {
        isLoggedIn()
            .then((res) => {
                console.log(res)
                if (res === "not authenticated") {
                    this.props.history.push("/login")
                } else {
                    console.log("hello world")
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        return (
            <div>
                loading
           </div>
        )
    }
}


export default Loading;