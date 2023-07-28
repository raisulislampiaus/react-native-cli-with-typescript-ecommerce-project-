import React, {useState} from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import {Input, Heading} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Banner from '../components/Banner';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../type';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

var {width} = Dimensions.get('window');

interface Item {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  images: string[];
  price: string;
}

const initialData: Item[] = [
  {
    id: '1',
    name: 'Ballet flats ',
    category: 'shoes',
    description:
      'this my our new brand new shoe Our womens shoe style guide features fashionable ladies footwear for every occasion. Check out our top styling tips to help you pick the perfect shoe.',
    image:
      'https://cdn.pixabay.com/photo/2016/03/27/22/16/fashion-1284496_640.jpg',
    images: [
      'https://cdn.pixabay.com/photo/2014/04/03/10/05/stiletto-309788_640.png',
      'https://cdn.pixabay.com/photo/2013/09/01/18/12/womens-shoes-178162_640.jpg',
      'https://cdn.pixabay.com/photo/2012/04/15/18/36/shoes-34838_640.png',
    ],
    price: '50',
  },
  {
    id: '2',
    name: 'Scarpin',
    category: 'shoes',
    description:
      'this my our new brand new shoe They look great with jeans and a T-shirt for an easy and simple weekend outfit. Printed canvas shoes can also be styled with shorts for those sunny weekends in the park.',
    image:
      'https://cdn.pixabay.com/photo/2013/09/01/18/12/womens-shoes-178162_640.jpg',
    images: [
      'https://cdn.pixabay.com/photo/2016/03/27/22/16/fashion-1284496_640.jpg',
      'https://cdn.pixabay.com/photo/2016/03/27/22/16/fashion-1284496_640.jpg',
      'https://cdn.pixabay.com/photo/2016/03/27/22/16/fashion-1284496_640.jpg',
    ],
    price: '70',
  },
  {
    id: '3',
    name: 'Alice',
    category: 'shoes',
    description:
      'Flip flops are super versatile and come in a range of patterns and colours, so you can match them to any swimwear or outfit.',
    image:
      'https://cdn.pixabay.com/photo/2015/08/22/22/27/shoes-902200_640.jpg',
    images: [
      'https://cdn.pixabay.com/photo/2016/03/27/22/16/fashion-1284496_640.jpg',
      'https://cdn.pixabay.com/photo/2016/03/27/22/16/fashion-1284496_640.jpg',
      'https://cdn.pixabay.com/photo/2016/03/27/22/16/fashion-1284496_640.jpg',
    ],
    price: '90',
  },
  {
    id: '4',
    name: 'Winklipers',
    category: 'shoes',
    description:
      'They re stylish too. Gone are the days when wellies were all dull and green, you can now keep your feet protected from the infamous British weather with boots that come in a vibrant range of patterns and colours. Wellies are best bought in a size up from your normal shoes, so you can wear thick socks underneath without your wellies becoming too tight',
    image: 'https://cdn.pixabay.com/photo/2015/01/06/16/24/shoe-590516_640.jpg',
    images: [
      'https://cdn.pixabay.com/photo/2016/03/27/22/16/fashion-1284496_640.jpg',
      'https://cdn.pixabay.com/photo/2016/03/27/22/16/fashion-1284496_640.jpg',
      'https://cdn.pixabay.com/photo/2016/03/27/22/16/fashion-1284496_640.jpg',
    ],
    price: '100',
  },
  {
    id: '5',
    name: 'Lipstick',
    category: 'Beauty',
    description:
      'ipstick is crystal clear, moisturising, waterproof, protecting lips, delivering a concentrate of intense colour. Correct th',
    image: 'https://cdn.pixabay.com/photo/2021/10/10/21/52/makeup-6698881_1280.jpg',
    images: [
      'https://cdn.pixabay.com/photo/2021/01/06/07/52/lipsticks-5893480_1280.jpg',
      'https://cdn.pixabay.com/photo/2017/10/07/23/00/lipstick-2828223_640.jpg',
      'https://cdn.pixabay.com/photo/2021/10/10/21/52/makeup-6698881_1280.jpg',
    ],
    price: '100',
  },
  {
    id: '6',
    name: 'mackupBox',
    category: 'Beauty',
    description:
      'ipstick is crystal clear, moisturising, waterproof, protecting lips, delivering a concentrate of intense colour. Correct th',
    image: 'https://cdn.pixabay.com/photo/2017/01/16/14/17/make-up-1984115_640.jpg',
    images: [
      'https://cdn.pixabay.com/photo/2016/03/31/04/50/blush-1292054_640.jpg',
      'https://cdn.pixabay.com/photo/2014/04/03/10/10/make-up-310009_640.png',
      'https://cdn.pixabay.com/photo/2017/01/16/14/17/make-up-1984115_640.jpg',
    ],
    price: '100',
  },
];

export default function HomeScreen() {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('All');
  const [filteredData, setFilteredData] = useState<Item[]>(initialData);
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleFilter = (text: string, category: string) => {
    const filteredItems = initialData.filter(item => {
      const isNameMatched = item.name
        .toLowerCase()
        .includes(text.toLowerCase());
      const isCategoryMatched =
        item.category === category || category === 'All';
      return isNameMatched && isCategoryMatched;
    });
    setFilteredData(filteredItems);
  };
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ScrollView style={styles.main}>
      <SafeAreaView>
        <View style={styles.header}>
          <View style={styles.bars}>
            <Icon name="bars" size={25} color={'#fff'} />
          </View>
          <View>
            <Pressable>
              {/* <Image
                source={{
                  uri: 'https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_640.png',
                }}
                style={styles.avatar}
              />
              <Text style={styles.Login}>Login</Text> */}
              <Icon name="opencart" size={27} color={'#111'} />
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
      <View style={styles.container}>
        <Input
          style={styles.input}
          onChangeText={value => {
            setText(value);
            handleFilter(value, category);
          }}
          placeholder="Search"
          variant="rounded"
          width="100%"
          borderRadius="10"
          mx="3"
          InputLeftElement={<Icon name="search" style={styles.icon} />}
        />
      </View>
      <SafeAreaView style={styles.area}>
        <View>
          <Banner />
        </View>
        <View style={styles.categories}>
          <Heading>Categories</Heading>
        </View>

        <Picker
          style={styles.picker}
          selectedValue={category}
          onValueChange={value => {
            setCategory(value);
            handleFilter(text, value);
          }}>
          <Picker.Item label="All Categories" value="All" />
          <Picker.Item label="shoes" value="shoes" />
          <Picker.Item label="Beauty" value="Beauty" />
          <Picker.Item label="Kids" value="Kids" />
        </Picker>

        <FlatList
          data={filteredData}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Pressable
              onPress={() =>
                navigation.navigate('details', {
                  id: item.id,
                  name: item.name,
                  description: item.description,
                  images: item.images,
                  price: item.price
                })
              }>
              <View style={styles.card}>
                <Image source={{uri: item.image}} style={styles.images} />
                <Text style={styles.name}>{item.name}</Text>

                <Button style={styles.cart} icon="cart" mode="contained">
                  Add Cart
                </Button>
              </View>
            </Pressable>
          )}
          horizontal={false}
          numColumns={2}
        />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#e0f2fe',
    flex: 1,
  },
  container: {
    paddingRight: 18,
    marginTop: 8,
  },
  input: {
    backgroundColor: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
  icon: {
    fontSize: 20,
    fontWeight: '700',
    color: '#6366f1',
  },
  picker: {
    backgroundColor: '#fff',
    marginTop: 8,
    marginHorizontal: 10,
    color: '#6366f1',
  },
  categories: {
    paddingHorizontal: 10,
  },
  area: {
    marginTop: 15,
  },
  images: {
    width: 100,
    height: 110,
    borderRadius: 20,
    position: 'relative',
    top: -20,
  },
  card: {
    width: width / 2 - 20,
    height: width / 1.8,
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 5,
    marginLeft: 12,
    alignItems: 'center',
    elevation: 8,
    backgroundColor: 'white',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    height: 60,
    alignItems: 'center',
  },
  bars: {
    backgroundColor: '#111',
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
  },
  UserScetion: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#111',
    borderRadius: 10,
    padding: 5,
  },
  avatar: {
    height: 28,
    width: 28,
    marginRight: 5,
  },
  Login: {
    color: '#111',
    fontWeight: 'bold',
  },
  cart: {
    marginTop: 10,
  },
});
