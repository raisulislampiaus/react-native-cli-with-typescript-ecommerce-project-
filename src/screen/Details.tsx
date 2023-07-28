import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {useRoute, RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../type';
import Swiper from 'react-native-swiper';
import {Button} from 'react-native-paper';

const Details = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'details'>>();
  const {name, description, images, price} = route.params;
  return (
    <ScrollView>
      <View style={styles.wrapper}>
        <Swiper style={styles.swiper} showsButtons={true}>
          {images.map((imageUrl, index) => (
            <View key={index} style={styles.slide}>
              <Image source={{uri: imageUrl}} style={styles.image} />
            </View>
          ))}
        </Swiper>
      </View>

      <View style={styles.name}>
        <Text style={styles.nameText}> {name}</Text>
      </View>

      <View>
        <Text style={styles.des}> {description}</Text>
      </View>
      <View style={styles.priceBtn}>
        <Text style={styles.price}>${price}</Text>
        <Button icon="cart" mode="contained">
          Add Cart
        </Button>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  slide: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  swiper: {
    height: 400,
  },
  name: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  des: {
    fontSize: 18,
    color: '#000',
    fontWeight: '700',
    padding: 10,
  },
  priceBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  price: {
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default Details;
