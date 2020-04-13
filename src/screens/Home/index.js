import React from 'react';
import { Container } from '../../components/GlobalComponents';
import { CategoriesContent, CategoriesCard } from './styled';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { Text } from 'react-native';


const Screen = ({navigation}) => {

    const moveTo = (section) => {
        navigation.navigate('Produtos', {section:section});
    }

    return(
        <Container align="center">
            <CategoriesContent>
                <CategoriesCard onPress={()=>moveTo('hortifruti')}>
                    <Icon name="md-nutrition" size={40} color={'#324975'}/>
                    <Text style={{color:'#324975'}}>Hortifruti</Text>
                </CategoriesCard>
                <CategoriesCard onPress={()=>moveTo('pet')}>
                    <Icon name="md-paw" size={40} color={'#324975'}/>
                    <Text style={{color:'#324975'}}>Pet</Text>
                </CategoriesCard>
                <CategoriesCard onPress={()=>moveTo('alimentacao')}>
                    <Icon name="md-restaurant" size={40} color={'#324975'}/>
                    <Text style={{color:'#324975'}}>Alimentação</Text>
                </CategoriesCard>
            </CategoriesContent>
            <CategoriesContent>
                <CategoriesCard onPress={()=>moveTo('eletro')}>
                    <Icon name="md-tv" size={40} color={'#324975'}/>
                    <Text style={{color:'#324975'}}>Eletro</Text>
                </CategoriesCard>
                <CategoriesCard onPress={()=>moveTo('esporte')}>
                    <Icon name="md-bicycle" size={40} color={'#324975'}/>
                    <Text style={{color:'#324975'}}>Esporte</Text>
                </CategoriesCard>
                <CategoriesCard onPress={()=>moveTo('filmes')}>
                    <Icon name="md-film" size={40} color={'#324975'}/>
                    <Text style={{color:'#324975'}}>Filmes</Text>
                </CategoriesCard>
            </CategoriesContent>
        </Container>
    )
}

export default Screen;