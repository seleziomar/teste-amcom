import React, { useState, useEffect } from 'react';
import { Container } from '../../components/GlobalComponents';
import { Image, Description, PriceArea, ButtonArea, Buttons, CommentsArea } from './styled';
import {Text, ScrollView, FlatList, View} from 'react-native';
import {connect} from 'react-redux';
import useApi from '../../useApi';
import { useIsFocused } from '@react-navigation/native';

const Screen = ({navigation, route, cart, setCart}) => {
    
    const {item} = route.params;
    const [comments, setComments] = useState([]);
    const [, forceUpdate] = useState(0);
    const isFocused = useIsFocused();
    const api = useApi();


    const getNota = () => {
        let response = api.getNota(item.id);
        return response;
    }

    const addToCart = ()=>{
        let aux = cart;
        if(aux.indexOf(item) == -1){
            aux.push(item);
        }else{
            aux.splice(aux.indexOf(item));
        }
        setCart(aux);
        forceUpdate(n => !n);
    }
    const Buy = () => {
        let aux = cart;
        if(aux.indexOf(item) == -1){
            aux.push(item);
            setCart(aux);
        }
        navigation.navigate('Carrinho');
    }

    const flatRender = (item) => {
        return(
            <View style={{marginBottom:10}}>
                <Text>Comentário:{item.comment}</Text>
                <Text>Nota: {item.nota}</Text>
            </View>
        )
    }

    const emptyList = ()=>{
        return(
            <View style={{alignItems:'center',justifyContent:'center' , margin:20}}>
                <Text>Não há comentários sobre esse produto</Text>
            </View>
        )
    }

    useEffect(()=>{
        let response = api.getComments(item.id);
        setComments(response);
    } ,[])

    useEffect(()=>{
        forceUpdate(n => !n);
    }, isFocused);

    return(
        <Container align="flex-start">
            <ScrollView>
            <Text style={{fontSize:22, textAlign:'center', marginTop:10}} >{item.name}</Text>
            <Image resizeMode="contain" source={item.url} />
            <Description>
                <Text style={{fontSize:18, fontWeight:'bold', textAlign:'center'}}>Descrição do Produto: </Text>
                <Text>{item.description}</Text>
            </Description>
            <PriceArea>
                <Text style={{fontSize:18}}>Valor: R${item.price.toFixed(2)}</Text>
                <Text style={{fontSize:18, color:'red'}}>{item.discount > 0? 'Desconto: R$'+item.discount.toFixed(2):null}</Text>
            </PriceArea>
            <ButtonArea>
                <Buttons onPress={addToCart} bg="#3B62A4"><Text style={{color:'white'}}>{cart.indexOf(item) > -1?'Remover do Carrinho':'Adicionar Carrinho'}</Text></Buttons>
                <Buttons onPress={Buy} bg="#324975"><Text style={{color:'white'}}>Comprar</Text></Buttons>
            </ButtonArea>
            <CommentsArea>
                <Text style={{textAlign:'center', fontSize:22, marginBottom:10}}>Média: {getNota()}</Text>
                <FlatList 
                    data={comments}
                    renderItem={({item})=>flatRender(item)}
                    keyExtractor={item => item.id}
                    ListEmptyComponent={emptyList}
                />
            </CommentsArea>
            </ScrollView>
        </Container>
    )
}
console.disableYellowBox = true;

const mapStateToProps = (state) => {
    return{
        cart:state.shoppingCartReducer.cart
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        setCart:(cart)=>dispatch({type:'SET_CART', payload:{cart}})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Screen);