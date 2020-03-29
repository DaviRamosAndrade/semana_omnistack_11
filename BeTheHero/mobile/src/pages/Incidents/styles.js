import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
      flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    headerText: {
        fontSize: 14,
        color: "#737380",
    },

    headerTextBold: {
        fontWeight: 700,
    },

    title: {
        fontSize: 30,
        color: "#171717",
        marginBottom: 16,
        marginTop: 48,
        fontWeight: 700
    },

    description: {
        fontSize: 18,
        lineHeight: 24,
        color: "#737380"
    },

    incidentsList: {
        marginTop:32,
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: "#fff",
        marginBottom: 16,
    },

    incidentProperty: {
        fontSize: 14,
        color: "#41414d",
        fontWeight: 700,
    },

    incidentValue: {
        fontSize: 16,
        color: "#727280",
        marginBottom: 24,
        marginTop: 8,
    },

    detailsButton: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",        
    },

    detailsButtonText: {
        color: "#e02041",
        fontSize: 14,
        fontWeight: 500
    },
});