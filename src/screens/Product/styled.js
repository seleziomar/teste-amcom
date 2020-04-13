import styled from 'styled-components/native';

export const Image = styled.Image`
    width:90%;
    margin:10px;
    align-self:center;
`;
export const Description = styled.View`
    align-self:stretch;
`;
export const PriceArea = styled.View`
    flex-direction:row;
    justify-content:space-between;
    margin:10px 0px;
    border-radius:5px;
    border-width:1px;
    border-color:#ddd;
    padding:10px;
`;
export const ButtonArea = styled.View`
    flex-direction:row;
    justify-content:space-between;
`;
export const Buttons = styled.TouchableOpacity`
    align-items:center;
    justify-content:center;
    margin:2px;
    background-color:${props => props.bg};
    flex:1;
    border-radius:5px;
    height:40px;
    margin-top:10px;
    margin-bottom:10px;
`;
export const CommentsArea = styled.View`
    border-radius:5px;
    width:100%;
    border-width:1px;
    border-color:#ddd;
    padding:10px
    margin-bottom:20px;
    margin-top:10px;
`;