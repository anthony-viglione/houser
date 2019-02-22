import React, {Component} from 'react';
import House from '../House/House';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Dashboard extends Component {
    constructor(){
        super()
        this.state={
            housesArr:[]
        }
    }

    componentDidMount(){
        axios.get(`/api/houses`).then(res=>{
            console.log(`hit mount`)
            console.log(res.data)
            this.setState({
                housesArr: res.data
            })
            console.log(this.state.housesArr)
        })
    }

    render(){
        let houseList = this.state.housesArr.map((val,i)=>{
            return <House key={i} houseInfo={val} /*style={{borderStyle:'solid', borderWidth:'5px'}}*//>
        })
        return (
            <div>
                <h1>
                    Dashboard
                </h1>
                <Link to='/Wizard'>
                    <button>
                        Add New Property
                    </button>
                </Link>
                {houseList}
            </div>
        )
    }
}

export default Dashboard;