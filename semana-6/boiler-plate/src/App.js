import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0;
  width: 800px;
  gap: 50px;
`

const Tarefa = styled.li`
  cursor: pointer;
  text-align: left;
  height: 30px;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`
const BotaoRemover = styled.button`
display: block;
border: none;
padding: 20px;
background-color: #8C3635;
color: white;
width: 30%;
`

const Display = styled.div`
grid-column: ${({completa}) => (completa ? '2/3' : '1/2')};
border: 1px solid black;
background-color: lightsalmon;
color: white;
font-weight: bold;
font-size: 1.5em;
`

const Separadores = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 300px;
`

const BotaoEditar = styled.button`
display: ${({editar}) => (editar ? 'none' : 'block')};
border: none;
padding: 20px 30px 20px 30px;
background-color: #8C3635;
color: white;
width: 30%;
`

const InputEditar = styled.input`
display: ${({editar}) => (editar ? 'inline' : 'none')};
height: 54px;
border: none;
`

const BotaoAplicar = styled.button`
display: ${({editar}) => (editar ? 'inline' : 'none' )};
background-color: #8C3635;
color: white;
width: 30%;
padding: 20px;
border: none;
`

class App extends React.Component {
    state = {
      tarefas: [
        {
          id: Date.now(),
          texto: 'Tarefa exemplo1',
          completa: false,
          editar: false,
        },
        ],
      inputValue: '',
      filter: '',
      inputEditar: '',
    }

  componentDidUpdate() {
        
  }

  componentDidMount() {
    
  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})
  }

  criaTarefa = () => {
    if ((this.state.inputValue !== "") && (this.state.inputValue !== " ")) {
        const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false,
      editar: false,
    }
    const novaListaDeTarefas = [novaTarefa, ...this.state.tarefas]
  
  this.setState({
    tarefas: novaListaDeTarefas})
    this.setState({inputValue: ""})
  }}

  selectTarefa = (id) => {
  const listaDeTarefas = this.state.tarefas.map((tarefa) => {
    if (id === tarefa.id) {
      const novaTarefa = {
        ...tarefa,
        completa: !tarefa.completa
      }
      return novaTarefa
    } else {
      return tarefa
    }
  })
  this.setState({tarefas: listaDeTarefas});    
  }

  onChangeFilter = (event) => {
    this.setState({filter: event.target.value})
  }

  removerTarefa = (id) => {
    const listaDeTarefas = this.state.tarefas.filter((tarefa) => {
      return id !== tarefa.id
        }
    )
    this.setState({tarefas: listaDeTarefas})
  }

  funcaoEditar = (id) => {
    const listaDeTarefas = this.state.tarefas.map((tarefa) => {
      if (id === tarefa.id) {
        const novaTarefa = {
          ...tarefa,
          editar: !tarefa.editar
        }
        return novaTarefa
      } else {
        return tarefa
      }
    })
    this.setState({tarefas: listaDeTarefas})
  }

  aplicarMudanca = (id) => {
    const listaDeTarefas = this.state.tarefas.map((tarefa) => {
      if (id === tarefa.id) {
        const novaTarefa = {
          ...tarefa,
          texto: this.state.inputEditar
        }
        return novaTarefa
      } else {
        return tarefa
      }
    })
    this.setState({tarefas: listaDeTarefas})
    this.setState({inputEditar: ""})
  }

  onChangeEditar = (event) => {
    this.setState({inputEditar: event.target.value});
  }

  render() {
    const listaDeTarefas = this.state.tarefas
    localStorage.setItem("tarefa", JSON.stringify(listaDeTarefas))
    const tarefasString = localStorage.getItem("tarefa");
    const tarefasObject = JSON.parse(tarefasString);

    const listaFiltrada = tarefasObject
      .filter(tarefa => {
        switch (this.state.filter) {
          case 'pendentes':
            return !tarefa.completa
          case 'completas':
            return tarefa.completa
          default:
            return true
        }
      })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <Separadores>
        <h2>N??o Conclu??das</h2><h2>Conclu??das</h2>
        </Separadores>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Display
              completa={tarefa.completa}>
              <Tarefa
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
              <BotaoRemover 
              onClick={() => this.removerTarefa(tarefa.id)}>
              Remover</BotaoRemover>
              <BotaoEditar
              editar={tarefa.editar}
              onClick={() => this.funcaoEditar(tarefa.id)}>
                Editar
              </BotaoEditar>
              <InputEditar 
              editar={tarefa.editar}
              onChange={this.onChangeEditar}
              />
              <BotaoAplicar
              editar={tarefa.editar}
              onClick={() => this.aplicarMudanca(tarefa.id)}>
                Aplicar!
                </BotaoAplicar>
              </Display>
            ) 
          })}
        </TarefaList>
      </div>
    )
  }
}



export default App