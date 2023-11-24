import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import { colors } from '../../../utils/constants'
import { handlePriceFormat } from '../../../utils/functions'

const CriptoItem = ({ item, index, action }) => {
    return (
        <TouchableOpacity onPress={() => action()} index={index} style={styles.container}>
            <View style={{flexDirection: 'row'}}>
                <FastImage source={{ uri: item.image }} style={styles.image} />
                <View style={styles.containerText}>
                    <View>
                        <Text style={styles.textTitle}>{item.symbol.toUpperCase()}</Text>
                        <Text style={styles.textSubTitle}>{item.name}</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.textDescription}>{handlePriceFormat(item.current_price)}</Text>
        </TouchableOpacity>
    )
}

export default CriptoItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 20,
        borderRadius: 5,
        marginVertical: 5,
        justifyContent: 'space-between'

    },
    containerText: {
        marginLeft: 20,
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: 15,
        color: colors.white
    },
    textSubTitle: {
        fontSize: 13,
        color: colors.secondary
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 10
    },
    textDescription: {
        color: colors.white
    }
})