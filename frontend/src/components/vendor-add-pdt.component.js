import React, {Component} from 'react';
import axios from 'axios';

export default class add_pdt extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            price: '',
            quantity: '',
            status: 'Not Dispatched',
            vendorname: this.props.match.params.id
        }

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);
    }
    

    onChangeName(event) {
        this.setState({ name: event.target.value });
    }

    onChangePrice(event) {
        this.setState({ price: event.target.value });
    }

    onChangeQuantity(event) {
        this.setState({ quantity: event.target.value });
    }
    onSubmit(e) {
        e.preventDefault();

        const newPdt = {
            name: this.state.name,
            price: this.state.price,
            quantity: this.state.quantity,
            status: this.state.status,
            vendorname: this.state.vendorname
        }

        console.log(newPdt)

        axios.post('http://localhost:4000/vendor/add_pdt', newPdt)
             .then(res => console.log(res.data));

        this.setState({
            name: '',
            price: '',
            quantity: ''
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.name}
                               onChange={this.onChangeName}
                               />  
                    </div>

                   

                    <div className="form-group">
                        <label>Price: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.price}
                               onChange={this.onChangePrice}
                               />  
                    </div>

                    <div className="form-group">
                        <label>Quantity: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.quantity}
                               onChange={this.onChangeQuantity}
                               />  
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Add Pdt" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}