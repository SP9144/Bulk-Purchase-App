import React, {Component} from 'react';
import axios from 'axios';

export default class PdtsList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            pdts: [],
            vendorname: this.props.match.params.id
        }
    }

    componentDidMount() {
        
        const details = {
            vendorname: this.state.vendorname,
            quantity: 0
        }

        console.log(details);

        axios.get('http://localhost:4000/vendor_disppdt', details)
             .then(response => {
                 console.log(response.data)
                 this.setState({pdts: response.data});
             })
             .catch(function(error) {
                 console.log(error);
             })
    }

    render() {
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                    { 
                        this.state.pdts.map((currentPdt, i) => {
                            return (
                                <tr>
                                    <td>{currentPdt.name}</td>
                                    <td>{currentPdt.price}</td>
                                    <td>{currentPdt.quantity}</td>
                                    <td>{currentPdt.status}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}