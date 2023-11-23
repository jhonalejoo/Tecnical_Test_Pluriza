import { StyleSheet, FlatList, View, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CriptoItem from './components/CriptoItem';
import { focusCripto, getCriptosLoading } from '../../state/features/cripto/reducers';


const Home = ({navigation}) => {

  const dispatch = useDispatch();
  const criptoState = useSelector(state => state.cripto.getCriptos);

  useEffect(() => {
     dispatch(getCriptosLoading())
  }, [])


  const handleAction=(item)=>{
     navigation.navigate('CriptoDetails')
     dispatch(focusCripto(item))
  }  
   const renderItem = ({ item, index }) => {
    return (
      <CriptoItem action={()=>handleAction(item)} index={index} item={item} />
    )
  }
  const ListFooterComponent = () => {
    return (

      <View>
        {
           criptoState.isLoading
           &&
           <ActivityIndicator style={styles.activityIndicator} color={'blue'} />
        }
      </View>
    )
  }; 

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        data={criptoState.criptos}
        renderItem={renderItem}
        ListFooterComponent={ListFooterComponent}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:20    
  },
  activityIndicator: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})