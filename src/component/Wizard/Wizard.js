import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Wizard extends Component {
    constructor(){
        super()
        this.state={
            property_name:'',
            address:'',
            city:'',
            state:'',
            zipcode:'',
            test:'testLine'
        }
    }
    //input handle methods------------------------------------------------------
    handlePropertyNameInput(val){
        this.setState({
            property_name: val,
            test: val
        })
    }

    handleAddressInput(val){
        this.setState({
            address: val,
            test: val
        })
    }

    handleCityInput(val){
        this.setState({
            city: val,
            test: val
        })
    }

    handleStateInput(val){
        this.setState({
            state: val,
            test: val
        })
    }

    handleZipcodeInput(val){
        this.setState({
            zipcode: val,
            test: val
        })
    }

    //----------------------------------------------
    handleNewHouse(property_name,address,city,state,zipcode){
        let newHouse={
            property_name,
            address,
            city,
            state,
            zipcode
        }

        axios.post('/api/houses',newHouse).then(res=>{
            console.log(res)
            // this.setState({
                
            // })
        })
    }


    
    render(){
        return (
            <div>
                <h1>
                    Wizard
                </h1>
                <input placeholder={'name'} onChange={e=>this.handlePropertyNameInput(e.target.value)}/>
                <input placeholder={'address'} onChange={e=>this.handleAddressInput(e.target.value)}/>
                <input placeholder={'city'} onChange={e=>this.handleCityInput(e.target.value)}/>
                <input placeholder={'state'} onChange={e=>this.handleStateInput(e.target.value)}/>
                <input placeholder={'zipcode'} onChange={e=>this.handleZipcodeInput(e.target.value)}/>
                <input placeholder={this.state.test} />
                <div>
                    <Link to='/'>
                        <button>
                            Cancel
                        </button>
                    </Link>
                    <button onClick={()=>{this.handleNewHouse(this.state.property_name,this.state.address,this.state.city,this.state.state,this.state.zipcode)}}>Complete</button>
                </div>
            </div>
        )
    }
}

export default Wizard;