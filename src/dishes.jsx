import React, { Component } from "react";
import axios from "axios"
class Dishes extends Component {
    state = {
        data: []
    }
    async componentDidMount() {
        const data = await axios.get(" https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json")
            // const data= fetch("https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json")
            .then(response => {
                console.log(response.data)
                this.setState({ data: response.data })
            })
            .catch(error =>
                console.log(error))
    }
    render() {
        return (
            <div>
                <h1>disg</h1>

                <div className="container">
                    <div className="col-md-12">
                        <div className="row ">
                            {this.state.data.map(datas => (
                                <div className="col-md-4 mb-4">
                                    <div className="card" key={datas.id}>
                                        <img src={datas.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{datas.dishName}</h5>
                                            <p className="card-text">{datas.description}</p>
                                            <a href="#" className="btn btn-primary">Click to add mark</a>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
             )
            }
}

export default Dishes;