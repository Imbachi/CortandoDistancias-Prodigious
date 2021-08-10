import React from 'react'
import Content from "../components/content"
import Navigation from '../components/Navigation'
import Foter from '../components/Foter'

const url = 'http://localhost:1337/nav-bars'

async function testButton() {
  const x = await fetch(url) 
  const y = await x.json()
  console.log(y)
  return y
}

class IndexEditorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      texto: 'HOLA',
      color: '#ffff00',
      titulo: 'Cortando Distancias',
      nav1: 'Inicio',
      nav2: 'Productos',
      nav3: 'Contacto',
      qs: 'Quienes',
      descr: 'bfxccvxvcxasfasdfasdfasd asdfasdfasdfasdf asdfadfasdfadfa'
    };
    testButton().then(result => this.setState({titulo: result[0].company_name,
    nav1: result[0].navigation_1 ,
    nav2:result[0].navigation_2 ,
    nav3: result[0].navigation_3,
    qs: result[0].quienes_somos,
    descr: result[0].descripcion}))
  }
 
  render() {
    return (
      <div>
        <Navigation titulo={this.state.titulo} nav1={this.state.nav1} nav2={this.state.nav2}
        nav3={this.state.nav3} />
        <Content qs={this.state.qs} ds={this.state.descr}/>
        <Foter/>
      </div>
    )
  }
}

export default IndexEditorPage

/*
export default function index() {
  *return (
    <div>
        <Navigation/>
        <Content/>
        <Foter/>
    </div>
  )
}*/
