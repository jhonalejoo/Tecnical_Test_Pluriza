import { StyleSheet, Text, View,TouchableOpacity  } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import { colors } from '../../../utils/constants'

const CriptoItem = ({ item, index,action }) => {
    return (
        <TouchableOpacity onPress={()=>action()} index={index} style={styles.container}>
            <FastImage source={{ uri: item.image }} style={styles.image} />
            <View style={styles.containerText}>
                <Text style={styles.textTitle}>{item.name}</Text>
                <Text style={styles.textDescription}>{`$ ${item.current_price}`}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CriptoItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 20,
        borderColor: '#F6F6F6',
        borderRadius: 5,
        marginVertical: 5,
    },
    containerText: {
        justifyContent: 'space-evenly',
        marginLeft: 20
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: 15,
        color:colors.white
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 10
    },
    textDescription:{
        color:colors.white
    }
})