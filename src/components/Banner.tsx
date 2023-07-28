import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Dimensions, View, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';

var { width } = Dimensions.get('window');

const Banner: React.FC = () => {
  const [bannerData, setBannerData] = useState<string[]>([]);

  useEffect(() => {
    setBannerData([
      'https://cdn.pixabay.com/photo/2016/11/22/19/08/hangers-1850082_1280.jpg',
      'https://cdn.pixabay.com/photo/2017/12/26/09/15/woman-3040029_1280.jpg',
      'https://cdn.pixabay.com/photo/2016/11/22/21/57/apparel-1850804_640.jpg',
      'https://cdn.pixabay.com/photo/2017/08/06/17/58/people-2594683_640.jpg',
      'https://cdn.pixabay.com/photo/2015/04/04/18/51/offer-706850_640.jpg',
      'https://cdn.pixabay.com/photo/2015/04/04/19/08/ten-706887_640.jpg'
    ]);
    return () => {
      setBannerData([]);
    };
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.swiper}>
          <Swiper style={{ height: width / 2 }} autoplay={true} autoplayTimeout={2}>
            {bannerData.map((item) => {
              return (
                <Image key={item} style={styles.imageBanner} resizeMode="contain" source={{ uri: item }} />
              );
            })}
          </Swiper>
          
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e7eb',
  },
  swiper: {
    width: width,
    alignItems: 'center',
    marginTop: 10,
  },
  imageBanner: {
    height: width / 2,
    width: width - 40,
    borderRadius: 10,
    marginHorizontal: 20,
  },
});

export default Banner;
