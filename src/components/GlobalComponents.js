import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex:1;
    padding: 0px 20px;
    justify-content:${props => props.align};
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
export const CardItemButton = styled.TouchableOpacity`
    width:60px;
    height:40px;
    background-color:${props => props.bg?props.bg:'white'};
    align-items:center;
    justify-content:center;
    margin:10px 10px 10px 0px; 
    border-radius:5px;
`;