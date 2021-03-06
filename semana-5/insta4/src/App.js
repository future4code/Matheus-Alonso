import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import Post2 from './components/Post/Post2';
import Post3 from './components/Post/Post3';
import IconeComContador from './components/IconeComContador/IconeComContador';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
          <Post
          nomeUsuario={'joao'}
          fotoUsuario={'https://picsum.photos/60/60'}
          fotoPost={'https://picsum.photos/200/160'}
        />
          <Post
          nomeUsuario={'amanda'}
          fotoUsuario={'https://picsum.photos/70/70'}
          fotoPost={'https://picsum.photos/200/170'}
        />
      </MainContainer>
    );
  }
}


export default App;
