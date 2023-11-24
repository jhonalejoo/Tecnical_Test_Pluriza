import { StyleSheet, FlatList, View, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CriptoItem from './components/CriptoItem';
import { focusCripto, getCriptosLoading } from '../../state/features/cripto/reducers';
import Money from '../lotties/Money';


const Home = ({ navigation }) => {

  const dispatch = useDispatch();
  const criptoState = useSelector(state => state.cripto.getCriptos);

  useEffect(() => {
    dispatch(getCriptosLoading())
  }, [])


  const handleAction = (item) => {
    navigation.navigate('CriptoDetails')
    dispatch(focusCripto(item))
  }
  const renderItem = ({ item, index }) => {
    return (
      <CriptoItem action={() => handleAction(item)} index={index} item={item} />
    )
  }

  return (
    <View style={[styles.container, criptoState.isLoading && { alignItems: 'center', justifyContent: 'center' }]}>
      {
        criptoState.isLoading &&
        <Money />
      }
      <FlatList
        keyExtractor={item => item.id}
        data={criptoState.criptos}
        renderItem={renderItem}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  },
  activityIndicator: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})