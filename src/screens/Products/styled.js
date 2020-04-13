import styled from 'styled-components/native';

export const SearchInput = styled.TextInput`
    border-width:1px;
    border-radius:3px;
    border-color:#eee;
    height:45px;
    flex:1;
    margin-top:20px;
    background-color:white;
    padding:10px;
`;
export const CardItem = styled.TouchableOpacity`
    flex-direction:row;
    border-radius:5px;
    background-color:white;
    height:120px;
    margin:5px 0px;
`;
export const CardItemImage = styled.Image`
    width:120px;
    height:120px;
    align-items:center;
`;
export const CardItemInfo = styled.View`
    flex:1;
    justify-content:center;
`;
export const OrderPriceButton = styled.TouchableOpacity`
    border-radius:5px;
    height:45px;
    width:45px;
    margin-left:5px;
    margin-top:20px;
    background-color:white;
    align-items:center;
    justify-content:center;
    align-self:center;
`;
export const CardItemButton = styled.TouchableOpacity`
    width:60px;
    height:40px;
    background-color:${props => props.bg?props.bg:'white'};
    align-items:center;
    justify-content:center;
    margin:10px 10px 10px 0px; 
    border-radius:5px;
`;
export const PaginateArea = styled.View`
    align-items:center;
    justify-content:center;
    flex-direction:row;
    margin: 10px;
`;
export const PaginateButton = styled.TouchableOpacity`
    border-radius:3px;
    background-color:white;
    align-items:center;
    justify-content:center;
    width:30px;
    height:30px;
    margin:0px 5px;
`;