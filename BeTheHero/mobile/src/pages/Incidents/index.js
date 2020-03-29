import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Logo
import logoImg from '../../assets/logo.png';

// Styles
import styles from './styles';

export default function Incidents() {

    const navigation = useNavigation();

    function navigateToDetail() {
        navigation.navigate();
    }

    return(
        <View style={ styles.container }>
            <View style={ styles.header }>

                <Image source={ logoImg }/>
                
                <Text style={ styles.headerText }>
                    Total de <Text style={ styles.headerTextBold }> 0 casos </Text>
                </Text>

            </View>

            <Text style={ styles.title }>
                    Bem-vindo !
            </Text>
            <Text style={ styles.description }>
                Escolha um dos casos abaixo e salve o dia
            </Text>

            <FlatList 
                data={ [1,2,3] }
                keyExtractor={ incident => String(incident) }
                showsVerticalScrollIndicator={ false }
                style={ styles.incidentsList }
                renderItem={ () => (
                    <View style={ styles.incident } >
                        <Text style={ styles.incidentProperty }> ONG </Text>
                        <Text style={ styles.incidentValue }> APAD </Text>

                        <Text style={ styles.incidentProperty }> Caso </Text>
                        <Text style={ styles.incidentValue }> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima magni dignissimos repellendus ratione reiciendis quae, laudantium adipisci ea deserunt recusandae sunt autem labore voluptates dolorem praesentium fugit odio cumque aspernatur! </Text>

                        <Text style={ styles.incidentProperty }> Valor </Text>
                        <Text style={ styles.incidentValue }> R$ 120.00 </Text>

                        <TouchableOpacity 
                            style={ styles.detailsButton } 
                            onPress={ () => {} }
                        >
                            <Text  style={ styles.detailsButtonText } >Saiba mais...</Text>
                            <Feather name="arrow-right" size={ 16 } color="#e02041"/>
                        </TouchableOpacity>
                    </View>
                ) }
            />
        </View>
    );
}
