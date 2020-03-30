import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

// Logo
import logoImg from '../../assets/logo.png';

// Styles
import styles from './styles';

export default function Detail() {

    const navigation = useNavigation();
    const route = useRoute();

    const incident = route.params.incident;

    const message = `Olá ${ incident.name }, gostaria em ajudar no caso da ${ incident.title } com o valor de ${ Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value) }`;

    function navigateToBack() {
        navigation.navigate('Incidents');
    }

    function sendEmail() {
        MailComposer.composeAsync({
            subject: `Herói do caso: ${ incident.title }`,
            recipients: [ incident.email ],
            body: message,
        })
    }

    function sendWhatsApp() {
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&t=${message}`)
    }


    return(
        <View style={ styles.container }>
            <View style={ styles.header }>
                
                <TouchableOpacity onPress={ navigateToBack }>
                    <Feather name="arrow-left" size={28} color="#e02041"/>
                </TouchableOpacity>
                <Image source={ logoImg }/>
            </View>

            <View style={ styles.incident } >
                <Text style={ [ styles.incidentProperty, { marginTop: 0 } ]}> ONG </Text>
                <Text style={ styles.incidentValue }> { incident.name } de { incident.city } - { incident.uf } </Text>

                <Text style={ styles.incidentProperty }> Caso </Text>
                <Text style={ styles.incidentValue }> { incident.title } </Text>

                <Text style={ styles.incidentProperty }> Valor </Text>
                <Text style={ styles.incidentValue }>  { 
                    Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value) 
                } </Text>
            </View>

            <View style={ styles.contentBox }>
                <Text style={ styles.heroTitle }>Salve o dia</Text>
                <Text style={ styles.heroTitle }>Seja o herói desse caso!</Text>

                <Text style={ styles.heroDescription }>Meios de contato</Text>
                <View style={ styles.actionsButton } >
                    <TouchableOpacity style={ styles.button } onPress={ sendWhatsApp }>
                        <Text style={ styles.actionButtonText }>WhatsApp</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={ styles.button } onPress={ sendEmail }>
                        <Text style={ styles.actionButtonText }>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
