import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button} from 'react-bootstrap';

export default class Vendor extends Component {
     constructor(props) {
        super(props);

        this.state = {
            vendor: this.props.match.params.id
            
        }
    }

    disp_pdt(e){
        this.props.history.push({
            pathname: "/vendor/disp_pdt/" + this.state.vendor
        })
    }

    add_pdt(e){
        this.props.history.push({
                pathname: "/vendor/add_pdt/" + this.state.vendor
            })
    }

    todispatch_pdt(e){
        this.props.history.push({
                pathname: "/vendor/todispatch_pdt/" + this.state.vendor
            })
    }
    
    dispatched_pdt(e){
        this.props.history.push
                        ({
                            pathname: "/vendor/dispatched_pdt/" + this.state.vendor
                        })
    }
    render() {
        return (
            <div>
                <Button variant="dark" size="lg" disabled block>
                    Welcome, Vendor  {this.state.vendor}
                    <br></br>
                {/* </Button>
                <Button variant="dark" size="lg" disabled block> */}
                    Select Action for Products:
                </Button>
                <Button variant="primary" onClick={(e)=>this.disp_pdt(e)} block>
                    View
                </Button>
                <Button variant="success" onClick={(e)=>this.add_pdt(e)} block>
                    Add
                </Button>
                <Button variant="warning" onClick={(e)=>this.todispatch_pdt(e)} block>
                    Dispatch
                </Button>
                <Button variant="danger" onClick={(e)=>this.dispatched_pdt(e)} block>
                    Dispatched
                </Button>
            </div>
        
        )
    }
}