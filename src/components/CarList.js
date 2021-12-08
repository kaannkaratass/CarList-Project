import React , {Component} from "react";
import { View , ScrollView } from "react-native";
import axios from "axios";

import CarDetail from "./CarDetail";

class CarList extends Component { //ClassBased component yaptık
    constructor() {
        super() ;
        
        this.state = { carList : [] } ; //Başlangıç state i (Boş state)


    }


    componentDidMount() {
        axios.get('https://givecars.herokuapp.com').then(response => {
                this.setState({ carList : response.data }) ; //Güncelleme
            } ) ;
    }

    renderList = () => {
        return this.state.carList.map((brand) => {
            return <CarDetail key = {brand.model[0].name}  brand = {brand} />


        }) ;


    }


    render () {
        console.log(this.state) ;
        return(
            <ScrollView>
                { this.renderList() }
            </ScrollView>
    
        );
    }
}
// Clasbased component için 1. satırda reactin yanına component eklemek zorundayız.

export default CarList ;
