import { PROPERTY_TYPES } from "@babel/types";
import React from "react";
import { View , Text } from "react-native";


const ItemSection = props => {

    return <View style = {styles.viewStyle}>{props.children}</View> 
}



const styles = {
    viewStyle : {
        borderBotttomWidth : 1 ,
        borderColor : "black" ,
        flexDirection : "row" , //flex direction row ile ana ekseni yatay yaptık soldan sağa
        justifyContent : "flex-start" ,
        padding : 5

    }
} ;


export default ItemSection ;