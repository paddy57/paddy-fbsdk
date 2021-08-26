import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  Dimensions
} from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const dummyData = [
  { _id: 1, name: 'dsfsd' },
  { _id: 2, name: 'dsfsd' },
  { _id: 3, name: 'dsfsd' },
  { _id: 4, name: 'dsfsd' },
  { _id: 5, name: 'dsfsd' },
  { _id: 6, name: 'dsfsd' },
  { _id: 7, name: 'dsfsd' },
  { _id: 8, name: 'dsfsd' },
  { _id: 9, name: 'dsfsd' },
  { _id: 10, name: 'dsfsd' },
  { _id: 11, name: 'dsfsd' },
  { _id: 12, name: 'dsfsd' },
  { _id: 13, name: 'dsfsd' },
  { _id: 14, name: 'dsfsd' },
  { _id: 15, name: 'dsfsd' },
  { _id: 16, name: 'dsfsd' },
  { _id: 17, name: 'dsfsd' },
  { _id: 18, name: 'dsfsd' },
  { _id: 19, name: 'dsfsd' },
  { _id: 20, name: 'dsfsd' },
  { _id: 21, name: 'dsfsd' },
  { _id: 22, name: 'dsfsd' },
  { _id: 23, name: 'dsfsd' },
  { _id: 24, name: 'dsfsd' },
  { _id: 25, name: 'dsfsd' },

]

const videoList = [
  {
    id: '1',
    title: 'First video',
    url: 'https://img-9gag-fun.9cache.com/photo/ad8zPjB_460svh265.mp4'
  },
  {
    id: '2',
    title: 'Second video',
    url: 'https://img-9gag-fun.9cache.com/photo/aR0WQqQ_460sv.mp4'
  },
  {
    id: '3',
    title: 'Third video',
    url: 'https://img-9gag-fun.9cache.com/photo/aqjEj67_460svh265.mp4'
  },
  {
    id: '4',
    title: 'Forth video',
    url: 'https://img-9gag-fun.9cache.com/photo/ad8zgPV_460svh265.mp4'
  },
  {
    id: '5',
    title: 'Fifth video',
    url: 'https://img-9gag-fun.9cache.com/photo/aqjEGOZ_460svh265.mp4'
  },
];

const App: () => Node = () => {

  function renderItem({ item, index }) {
    const { _id } = item._id;
    return (
      <View key={_id} style={{ height: 200 }}>
        <Text>{item.name}</Text>
      </View>


    )
  }



  return (
    <FlatList
      nestedScrollEnabled={true}
      data={dummyData}
      renderItem={renderItem}
      keyExtractor={(item) => item._id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
