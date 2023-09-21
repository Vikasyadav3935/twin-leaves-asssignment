import { View, Text,StyleSheet,Image, TouchableOpacity, FlatList } from 'react-native'
import React,{useEffect,useState} from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {addItem, removeItem } from './cartSlice';



const Product = () => {
  
    
    const dispatch = useDispatch();
    const [state,setState]=useState();
    const products = useSelector((state) => state.cart.items);

 const getData=()=>{
    fetch(`https://fakestoreapi.com/products`)
     .then(res=>res.json())
     .then(res=>setState(res))
 }
    useEffect(() => {
       
         getData();
      }, []);
    if(state){
        console.log(state);
    }
    console.log(products.length);
    const handleAddToCart = (product) => {
        dispatch(addItem(product));
      };
   
      const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
          <Image style={styles.itemImage} source={{ uri: item.image }} />
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemPrice}>{item.price}</Text>
          <TouchableOpacity onPress={()=>handleAddToCart(item)} style={styles.addToCartButton}>
            <Text style={styles.addToCartButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      );
      
    
        return (
            <View>
            <View style={{backgroundColor: 'blue',width:80,padding:4}} >
                <Text style={{color:'white'}}>Cart:{products.length}</Text>
            </View>
            <FlatList
            data={state}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
            </View>
         
        );
        };
      
      const styles = StyleSheet.create({
        itemContainer: {
          flexDirection: 'column',
          alignItems: 'center',
          padding: 16,
          borderBottomWidth: 1,
          borderBottomColor: '#ddd',
        },
        itemImage: {
          width: 150,
          height: 150,
          resizeMode: 'cover',
          marginBottom: 8,
        },
        itemTitle: {
          fontSize: 16,
          fontWeight: 'bold',
          marginBottom: 8,
        },
        itemPrice: {
          fontSize: 14,
          color: 'green',
          marginBottom: 8,
        },
        addToCartButton: {
          backgroundColor: 'blue',
          padding: 8,
          borderRadius: 5,
        },
        addToCartButtonText: {
          color: 'white',
          fontWeight: 'bold',
        },
      });
    
export default Product