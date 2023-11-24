import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { colors } from '../../utils/constants';
import { handlePriceFormat } from '../../utils/functions';


const CriptoDetails = () => {

    const criptoState = useSelector(state => state.cripto)
    const focusCripto = criptoState.cripto
    const [convertNumber, setConvertNumber] = useState('')
    const [copNumber, setCopNumber] = useState(0)
     
     const handleConvertNumber =(number)=>{
        const quantityUSD =  parseFloat(number) * focusCripto.current_price;
        if (isNaN(number) || number < 0) {
            alert('Debe ingresar un valor valido');
        } else {
            setConvertNumber(number)
            setCopNumber(quantityUSD * 4066.51)
        }
    
     }

    return (
        <View style={styles.container}>
            <Text style={styles.titleText} >{focusCripto.symbol.toUpperCase()}</Text>
            <Text style={styles.priceText} >{handlePriceFormat(focusCripto.current_price)}</Text>
            <Text style={styles.titleText} >{`Acerca de ${focusCripto.symbol.toUpperCase()}`} </Text>
            <View style={styles.containerAbout}>
                <Text style={styles.titleText} >Ranking: </Text>
                <Text style={styles.titleSubText} >{`N° ${focusCripto.market_cap_rank}`}</Text>
            </View>
            <View style={styles.containerAbout}>
                <Text style={styles.titleText} >Capitalización mercado: </Text>
                <Text style={styles.titleSubText} >{handlePriceFormat(focusCripto.market_cap)}</Text>
            </View>

            <Text style={{ ...styles.titleSubText, fontSize: 20, fontWeight: 'bold', marginTop: 20, alignSelf: 'center', }} >Conversion</Text>
            <Text style={styles.titleText} >{`De ${focusCripto.symbol.toUpperCase()} :`}</Text>
            <TextInput
                keyboardType='number-pad'
                style={styles.inputCripto}
                onChangeText={(text) => { handleConvertNumber(text) }}
                value={convertNumber}
            />
            <Text style={styles.titleText} >A COP :</Text>
            <Text style={{...styles.titleSubText,marginTop: 15,}} >{copNumber ? handlePriceFormat(copNumber):0}</Text>
        </View>
    )
}

export default CriptoDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 5,
    },
    containerAbout: {
        flexDirection: 'row',
        marginTop: 10,
    },
    inputCripto:{ 
        marginVertical: 15, 
        color: colors.white, 
        backgroundColor: colors.secondary, 
        borderRadius: 5,
        padding: 5, 
    },
    titleText: {
        color: colors.secondary
    },
    titleSubText: {
        color: colors.white
    },
    priceText: {
        color: colors.white,
        fontSize: 45,
        marginVertical: 10,
    }

})