import styled from 'styled-components';
import React from 'react';
import Adicionar from './components/Playlist/Adicionar';
import Listar from './components/Playlist/Listar';
import axios from 'axios';
import Detalhes from './components/Playlist/Detalhes';



const MainContainer = styled.div`
    width: 500px;
    height: 300px;
    background: #0090ff;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -100px;
    margin-left: -150px;
`



export default class App extends React.Component {
  


  state = {

    playlists: [],

    musicas: []
  }


  listaPlaylists = () => { 
  
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const authorization = "matheus-alonso"

    axios.get(url, {
      headers: {
        authorization
      }
    }).then((resp) => {
      this.setState({ playlists: resp.data.result.list })

    }).catch((error) => {
      alert("Erro ao exibir playlists!")
    })
  }


  detalhesPlaylist = (id) => { 
  
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/" + id + "/tracks"
    const authorization = "matheus-alonso"

    axios.get(url, {
      headers: {
        authorization
      }
    }).then((resp) => {
      this.setState({musicas: resp.data.result.tracks})

    }).catch((error) => {
      alert("Erro ao exibir detalhes")
    })
  }

  render() {
    return ( 
      <MainContainer>
        
        <Adicionar 
          listaPlaylists = {this.listaPlaylists} />
          
        <Listar 
          playlists = {this.state.playlists} 
          listaPlaylists = {this.listaPlaylists} 
          detalhes = {this.detalhesPlaylist} />
        
        <Detalhes 
          musicas = {this.state.musicas}

        />
        
      </MainContainer>
      
      
    )
    
  }


}
