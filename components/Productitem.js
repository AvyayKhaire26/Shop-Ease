import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'

const Productitem = ({item}) => {
  return (
      <Pressable style={{marginHorizontal:15,marginVertical:20}}>
      <Image
        style={{ width: 150, height: 150, resizeMode: "contain" }}
        source={{ uri: item?.image }}
      />
      <Text numberOfLines={1} style={{width:150,marginTop:10}}>{item?.title}</Text>
      <View style={{marginTop:5,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>₹{item?.price}</Text>
        <Text style={{ color: "#FFC72C", fontWeight: "bold" }}>
          {item?.rating?.rate} ratings
        </Text>
      </View>

      <Pressable
        style={{
          backgroundColor: "#E57903",
          padding: 10,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 10,
          marginTop: 10,
        }}
      >
        {/* {addedToCart ? (
          <View>
            <Text>Added to Cart</Text>
          </View>
        ) : (
          <Text>Add to Cart</Text>
        )} */}
        <Text>Add to Cart</Text>  
        {/* Remove above text later */}
      </Pressable>

      </Pressable>
  )
}

export default Productitem

const styles = StyleSheet.create({})