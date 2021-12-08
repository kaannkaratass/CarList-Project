//import libraries
import React from "react";
import { AppRegistry, View } from "react-native";

import Header from "./src/components/Header";
import CarList from "./src/components/CarList";


//create components (View tagi dökümanda bir bölümü temsil eder.)
const App = () => {
    return (
    <View style = {{flex : 1}}>    
        <Header title = {'Cars'}/>
        <CarList />
    </View>
    );
};

//render component to screen(ekranda gösterme)
AppRegistry.registerComponent("AwesomeProject", () => App);
// flex : 1 eklememizin nedeni react native le alakalı bir hata gibi düşün bunu eklemezsen aşağı kaydırdığında otomatik yukarı gider.