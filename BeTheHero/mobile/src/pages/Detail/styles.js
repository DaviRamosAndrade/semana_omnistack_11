import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    incidentsList: {
        marginTop:32,
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: "#fff",
        marginBottom: 16,
        marginTop: 48,
    },

    incidentProperty: {
        fontSize: 14,
        color: "#41414d",
        fontWeight: "bold",
        marginTop: 24,
    },

    incidentValue: {
        fontSize: 16,
        color: "#727280",
        marginTop: 8,
    },

    contentBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: "#fff",
        marginBottom: 16,
    },

    heroTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131a',
        lineHeight: 30
    },

    heroDescription: {
        fontSize: 16,
        color: '#737380',
        marginTop: 16
    },

    actionsButton: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    button: {
        backgroundColor: '#E02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems:'center',
    },

    actionButtonText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: '700'
    }
});