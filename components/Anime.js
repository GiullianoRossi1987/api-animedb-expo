import React, {Component, Fragment} from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const style = StyleSheet.create({
    anime_card: {
		backgroundColor: "#ccc",
		justifyContent: "left",
		borderWidth: 2,
		marginBottom: 10,
		alignSelf: "center",
        padding: 10,
        borderRadius: 30,
        flex: 1,
        flexWrap: "wrap",
        flexDirection: "row",
	},
    img: {
        height: 200,
        width: 200,
        alignSelf: "flex-end",
        marginLeft: 90
    },
    title:{
        alignSelf: "center",
        fontSize: 25,
    },
    subtitle:{
        alignSelf: "flex-start",
    }
});

class Anime extends Component{

    constructor(props){
        super(props);
    }

    render(){
        const data = this.props.data;
        return(
            <View style={style.anime_card}>
                <View>
                    <Text h1 style={style.title}>Anime: {data.title}</Text>
                    <Text h2 style={style.subtitle}>Data de Lançamento: {data.date}</Text>
                </View>
                <Image source={data.cover} style={style.img}/>
            </View>
        );
    }
}

export default Anime;
