import React from 'react';
import {Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class RestaurantsList extends React.Component {
    constructor() {
        super();
        this.state = {
            list:null
        };
    }

    componentDidMount(){
        fetch("http://localhost:3000/restaurants").then((response)=>{
            response.json().then((result)=>{
                console.log(result)
                this.setState({list:result})
            })
        })
    }
    render() {
        return (
            <div>
                <h1>Restaurants List</h1>
                {
                    this.state.list?
                    <div>
                        <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#ID</th>
                                <th>RESTAURANT Name</th>
                                <th>EMAIL</th>
                                <th>RATING</th>
                                <th>ADDRESS</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.list.map((item,i)=>
                                    <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.rating}</td>
                                    <td>{item.address}</td>
                                </tr>)
                                }
                            </tbody>
                        </Table>
                    </div>:0
                }
            </div>
        );
    }
}

export default RestaurantsList;
