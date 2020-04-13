import React, { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { View, Text, FlatList } from 'react-native';
import { Container, CardItem, CardItemImage, CardItemInfo, CardItemButton } from '../../components/GlobalComponents';
import { Title, TotalArea } from './styled';
import {connect} from 'react-redux';
import useApi from '../../useApi';


const Screen = ({navigation, cart, setCart}) => {


    const api = useApi();
    const [, forceUpdate] = useState(0);
    const [total, setTotal] = useState(0);
    const isFocused = useIsFocused();

    const removeToCart = (item) => {
        let aux = cart;
        aux.splice(aux.indexOf(item));
        setCart(aux);
        totalCalculate();
        forceUpdate(n => !n);
    }

    const totalCalculate = ()=>{
        let sum = 0;
        cart.map((item)=>{
            sum = sum + (item.price - item.discount);
        });
        return sum;
    }

    useEffect(()=>{
        forceUpdate(n => !n);
    }, isFocused);

    const flatRender = (item) => {
        return(
            <CardItem>
                <CardItemImage source={item.url} />
                <CardItemInfo>
                    <Text>{item.name}</Text>
                    <Text>Preço: R${item.price.toFixed(2)}</Text>
                    <Text style={{color:'red'}}>{item.discount > 0 && 'Desconto: R$'+item.discount}</Text>
                    <Text>Média: {api.getNota(item.id)}</Text>
                </CardItemInfo>
                <View>
                    <CardItemButton onPress={()=>removeToCart(item)} bg="#3B62A4"><Text style={{color:'white', fontSize:11}}>Remover</Text></CardItemButton>
                </View>
            </CardItem>
        )
    }

    return(
        <Container align="flex-start">
            <Title>Itens:</Title>
            <FlatList 
                data={cart}
                renderItem={({item})=>flatRender(item)}
            />
            <TotalArea>
                <Text>Valor Total:</Text>
                <Text>R${totalCalculate()}</Text>
            </TotalArea>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return{
        cart:state.shoppingCartReducer.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setCart:(cart)=>dispatch({type:'SET_CART', payload:{cart}} )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Screen);