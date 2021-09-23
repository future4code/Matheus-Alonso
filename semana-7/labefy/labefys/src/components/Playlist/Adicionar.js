import axios from 'axios';
import styled from 'styled-components';
import React from 'react';

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 0px;
`

export default class Adicionar extends React.Component {

    state = {

        "name": ""
    }


    criarPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = this.state
        const authorization = "matheus-alonso"

        axios.post(url, body, {
            headers: {
                authorization
            }
        }).then((resp) => {
            this.setState({ name: "" })
            this.props.listaPlaylists()

        
        }).catch((error) => {
            alert("Erro ao adicionar playlist!")

        })
    }

    onChangePlaylist = (event) => {
        this.setState({ name: event.target.value })
    }

    render() {


        return (
            <Container>

                <label><h3>Digite o nome da Playlist:</h3>
                    <p></p>
                    <input onChange={this.onChangePlaylist} value={this.state.name} type="text" ></input>
                    <button onClick={this.criarPlaylist} type="text">Adicionar</button>
                </label>
            </Container>
        )
    }
  }