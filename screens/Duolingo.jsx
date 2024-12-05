import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButton'


const Duolingo = () => {
  return (
    <View style = {styles.container}>
        <Image source={require('./../assets/duolingo.png')} style={styles.image}/>
        <Text style={styles.text}>Duolingo</Text>
        <Text style={styles.description}>The free, fun and effective way to learn a language</Text>
       
       <View style={styles.buttonContainer}>
        <CustomButton title= {'GET STARTED'} textColor={'black'} backgroundColor={'#2BD800'}/>
        <CustomButton title= {'I ALREADY HAVE AN ACCOUNT'} textColor={'green'} backgroundColor={'transparent'} borderWidth={2} borderColor={'#525D70'} />
       </View>

    </View>
  )
}

export default Duolingo

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        backgroundColor: "black",
        
    },

    text: {
        color: '#2BD800',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20
    },
    
    image: {
        width: 163,
        height: 153,
    },

    description: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'regular',
        textAlign: 'center',
        width: 255,
        marginTop: 20
    },

    buttonContainer: {
        marginTop: 100,
    }
})