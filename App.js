import { StatusBar } from 'expo-status-bar';
import React, {Component, Fragment} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Anime from "./components/Anime.js";
import Api_Anime from "./components/Api_Anime.js";

const style = StyleSheet.create({
    SearchBar:{
        width: 500,
        height: 30,
        borderWidth: 1

    },
    Search: {
        flexWrap: "wrap",
        flexDirection: "row",
        alignItems: "flex-start",
        flex: 1,
        marginBottom: 50,
        marginTop: 20,
        padding: 20
    },

    main:{
        alignItems: "center"
    },
    respFail:{
        flex: 1,
        fontSize: 25
    },
    mainTitle:{
        flex: 1,
        fontSize: 30
    },
    BtSearch: {
        background: "black"
    }
});

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            // DEBUG: "animes" : [{"title": "yahn", "cover": "https://i.pinimg.com/originals/72/8f/61/728f617c788a42245debacacf3a010f5.jpg", "date": "2002-12-03"}],
            "animes": [],
            "q": ""
        };
    }

    componentDidMount(){
		if(this.state.q.length > 0){
			const response = Api_Anime.get("anime/search/" + this.state.q.replace(" ", "+")).then(resp =>{
				this.setState({ animes: resp.data.data});
			});
		}
	}

    generateData = () => {
		return (
			<Fragment>
			 { this.state.animes.map((item, key) => { return ( <Anime data={item}/> );})}
			</Fragment>
		);
	}

    searchFull = () => {
		if(this.state.q.length > 0){
			console.log(this.state.q.replace(" ", "+"));
			const response = Api_Anime.get("anime/search/" + this.state.q.replace(" ", "+")).then(resp =>{
				this.setState({ animes: resp.data.data});
			});
		}
		else this.setState({animes: []});
	}

	stateHandler = (text) =>{
		this.setState({q: text});
	}

    NoOneResp(){
        return (
            <>
                <Text h1 style={style.respFail}> No Animes </Text>
            </>
        );
    }

	render(){
		console.log(this.state.filmes);
		return (
		    <View style={style.main}>
                <View>
                    <Text h1 style={style.mainTitle}>Buscador de anime</Text>
                </View>
                <View style={style.Search}>
        			<TextInput label="Pesquisar" onChange={(text) => this.stateHandler(text.target.value)}  placeholder="Pesquise" style={style.SearchBar}/>
        			<Button title="Pesquisar" onPress={this.searchFull} style={style.BtSearch}/>
                </View>
                <View>
		             {this.state.animes.length > 0 ? this.generateData() : this.NoOneResp()}
                 </View>
		   </View>
		);
	}
}


export default App;
