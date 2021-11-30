import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getExampleData} from '../../../appRedux/actions/exampleAction';
import {Loader} from '../../../component';
import {SnackBarMessage} from '../../../utils';
import styles from './style';
export default function Example() {
  const dispatch = useDispatch();
  const reduxExampleData = useSelector(state => state.example);
  const [isLoading, setIsLoading] = useState(false);
  const [exampleData, setExampleData] = useState([]);
  useEffect(() => {
    dispatch(getExampleData());
    setIsLoading(true);
  }, [dispatch]);

  useEffect(() => {
    if (isLoading) {
      if (
        !reduxExampleData.getExampleDataIsLoading &&
        reduxExampleData.getExampleDataErrorMessage === null
      ) {
        setExampleData(reduxExampleData.getExampleData);
        setIsLoading(false);
      }
      if (
        !reduxExampleData.getExampleDataIsLoading &&
        reduxExampleData.getExampleDataErrorMessage !== null
      ) {
        SnackBarMessage(reduxExampleData.getExampleDataErrorMessage, 'error');
        setIsLoading(false);
      }
    }
  }, [isLoading, reduxExampleData]);

  const renderItem = ({item}) => {
    return (
      <View style={styles.exampleItemWrap}>
        <Text>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Loader isShow={isLoading} />
      <FlatList
        data={exampleData}
        renderItem={renderItem}
        contentContainerStyle={styles.flatListContainer}
        bounces={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
