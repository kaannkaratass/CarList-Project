import React from "react";
import { Text , TouchableOpacity } from "react-native";


const Button = props => {

return  (
        
    <TouchableOpacity  onPress = {props.buttonPress} style = {styles.buttonStyle}> 
        <Text style ={styles.textStyle}>CLICK ME</Text>
    </TouchableOpacity>

 //Bunu kullanıcıdan geri dönüş alabilmek için yazıyoruz.(onPress için yazdık.)

    ) ;
} ;

const styles = {
    textStyle : {
        fontSize : 15 ,
        fontWeight : "500" , //Fontun kalınlığı
        paddingTop : 6 ,
        paddingBottom : 6 ,
        color : "white"


    },
    buttonStyle : {
        flex : 1 , //Bunu yazdık çünkü butonun soldan sağa genişleyerek yazmasını istiyoruz.
        alignSelf : "stretch" , //Bulundugu tüm alanı kaplaması için yazılan bir flexbox özelliği
        backgroundColor : "black" ,
        borderWidth : 1 ,
        borderColor : "black" ,
        marginLeft : 7 ,
        marginRight : 7

    }
};






export default Button ;

