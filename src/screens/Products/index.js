import React, { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { Container } from '../../components/GlobalComponents';
import { SearchInput, CardItem, CardItemImage, PaginateArea, PaginateButton, CardItemInfo, CardItemButton, OrderPriceButton } from './styled';
import useApi from '../../useApi';
import { FlatList, View, Text } from 'react-native';
import {connect} from 'react-redux';
import  Icon  from 'react-native-vector-icons/Ionicons';


const Screen = ({navigation, route, cart, setCart}) => {

    var Timer = null;
    const {section} = route.params;
    const [, forceUpdate] = useState(0);
    const isFocused = useIsFocused();
    const [page, setPage ] = useState(1);
    const [input, setInput] = useState('');
    const [data, setData] = useState([]);
    const [refresh, setRefresh] = useState(false);

    const api = useApi();


    const emptyData = () => {
        return(
            <View style={{alignItems:'center'}}>
                <Text style={{fontSize:20, color:"#AAA"}}>Carregando lista...</Text>
            </View>
        )
    }
    const findItem = () => {
        let response = api.findItem(input);
        setData(response);
        setRefresh(!refresh);
    }

    const Search = (t) => {
        setInput(t);
        if(Timer == null){
            Timer = setTimeout(findItem,500);
            return;
        }
        clearTimeout(Timer);
    }

    const priceOrder = (order) => {
        let aux = data;
        if(order == 'cres'){
            aux.sort(function(a,b){
                return a.price > b.price
            });
        }
        if(order == 'desc'){
            aux.sort(function(a,b){
                return a.price < b.price
            });
        }
        setData(aux);
        setRefresh(!refresh);
    }

    const addToCart = (item)=>{
        let aux = [];
        aux = cart;
        if(aux.indexOf(item) < 0){
            aux.push(item);
        }else{
            aux.splice(aux.indexOf(item));
        }
        setCart(aux);
        setRefresh(!refresh);
    }
    const Buy = (item) => {
        let aux = cart;
        if(aux.indexOf(item) == -1){
            aux.push(item);
            setCart(aux);
        }
        navigation.navigate('Carrinho');
    }

    const getNota = (id) => {
        let response = api.getNota(id);
        return response;
    }

    const flatRender = (item) => {
        return(
         <CardItem onPress={()=>navigation.navigate('Produto', {item:item})}>
             <CardItemImage resizeMode="contain" source={item.url} />
             <CardItemInfo>
                 <Text style={{fontSize:12}}>{item.name}</Text>
                 <Text style={{fontSize:12}}>Preço: R${item.price.toFixed(2)}</Text>
                 <Text style={{fontSize:12, color:'red'}}>{item.discount > 0 && 'Desconto: R$'+item.discount}</Text>
                 <Text style={{fontSize:12}}>Média: {getNota(item.id)}</Text>
             </CardItemInfo>
             <View>
                 <CardItemButton onPress={()=>addToCart(item)} bg="#3B62A4"><Text style={{color:'white', fontSize:11}}>{cart.indexOf(item) > -1?'Remove':'Add'}</Text></CardItemButton>
                 <CardItemButton onPress={()=>Buy(item)} bg="#324975"><Text style={{color:'white', fontSize:11}}>Comprar</Text></CardItemButton>
             </View>
         </CardItem>   
        )
    }

    useEffect(()=>{
        let response = api.getItens(section, page);
        setData(response);
    }, [page]);
    useEffect(()=>{
        forceUpdate(n => !n);
    }, isFocused);

    return(
        <Container align="flex-start" >
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <SearchInput onChangeText={t=>Search(t)} placeholder="Buscar produto..." />
                <OrderPriceButton onPress={()=>priceOrder('cres')}><Icon name="md-arrow-down" /></OrderPriceButton>
                <OrderPriceButton onPress={()=>priceOrder('desc')}><Icon name="md-arrow-up" /></OrderPriceButton>
            </View>
            <FlatList
                data={data}
                style={{marginTop:10}}
                renderItem={({item})=>flatRender(item)}
                ListEmptyComponent={emptyData}
                keyExtractor={item=>item.id}
                extraData={refresh}
            />
            <PaginateArea>
                <PaginateButton onPress={()=>setPage(1)}><Text>1</Text></PaginateButton>
                <PaginateButton onPress={()=>setPage(2)}><Text>2</Text></PaginateButton>
            </PaginateArea>
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
        setCart:(cart)=>dispatch({type:'SET_CART', payload:{cart}})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Screen);