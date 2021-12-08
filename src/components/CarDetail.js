import React from "react";
import { View , Text, Image , Linking } from "react-native";

import Item from "./Item";
import ItemSection from "./ItemSection";
import Button from "./Button";

const CarDetail = ({brand}) => {
// istersek eğer const = {headerContainer , headerText , imageStyle} = styles yaparak "styles" ı ortadan kaldırabiliriz.

    return  (

        <Item>
            <ItemSection>
                <View style = {styles.headerContainer}>
                    <Text style = {styles.headerText}>{brand.brand}</Text>
                    <Text style = {styles.headerText}>{brand.model[0].name}</Text>
                </View>
            </ItemSection>
            <ItemSection>
                <Image
                    style ={styles.imageStyle}
                    source={{uri : brand.model[0].image  }} />
            </ItemSection>
            <ItemSection>
                <Button buttonPress={ () => {
                     
                    Linking.openURL(brand.model[0].url);
                } } />  
            </ItemSection>
        </Item> 
    ) ;
} ;
//buttonPress diye tanımladığımız şey bir proptur çünkü reusable bir fonksiyon oluşturmak istiyoruz.

const styles = {
    headerContainer : {
        flexDirection : "column" ,
        justifyContent : "space-between"
    } ,
    headerText : {
        fontSize : 20 ,
        fontWeight : "700",
        textTransform : "uppercase"
    },
    imageStyle : {  //image'in ne kadar alan kaplayacağını manuel olarak belirtmemiz gerekiyor.
        height : 300,
        flex : 1 ,  // Görüntünün görülen telenonun soldan sağa tamamını kaplaması için böyle yaptık.
        width : 0
    }
} ;



export default CarDetail ;