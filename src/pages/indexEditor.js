import * as React from "react"

const url = 'http://localhost:1337/nav-bars'

async function testButton() {
  const x = await fetch('http://localhost:1337/nav-bars/1',{method: 'PUT', headers: {'Content-type': 'application/json'}, body: JSON.stringify(
    {
      "company_name": "Distancias Cortadas c",
      "navigation_1": "Home",
      "navigation_2": "Products",
      "navigation_3": "Contact",
      "quienes_somos": "Kienes Zomoz",
      "descripcion": "Texto de Prueba, Texto de Prueba, Texto de Prueba, Texto de Prueba, Texto de Prueba, Texto de Prueba, Texto de Prueba, Texto de Prueba, Texto de Prueba, Texto de Prueba, Texto de Prueba, "
    }
  )}) 
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
      quien: 'Quien',
      descrip: 'Descripcion 1'

    };
    //testButton().then(result => this.setState({}))
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  async handleSubmit(event) {
    const x = await fetch('http://localhost:1337/nav-bars/1',{method: 'PUT', headers: {'Content-type': 'application/json'}, body: JSON.stringify(
      {
        "company_name": this.state.titulo,
        "navigation_1": this.state.nav1,
        "navigation_2": this.state.nav2,
        "navigation_3": this.state.nav3,
        "quienes_somos":this.state.quien,
        "descripcion":  this.state.descrip,
      }
    )}) 
    const y = await x.json()
    console.log(y)
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
 
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input name="titulo" type="text" value={this.state.titulo} onChange={this.handleChange} />
        </label>

        <label>
          Nav1:
          <input name="nav1" type="text" value={this.state.nav1} onChange={this.handleChange} />
        </label>

        <label>
          Nav2:
          <input name="nav2" type="text" value={this.state.nav2} onChange={this.handleChange} />
        </label>

        <label>
          Na3:
          <input name="nav3" type="text" value={this.state.nav3} onChange={this.handleChange} />
        </label>

        <label>
          QuienesSomos:
          <input name="quien" type="text" value={this.state.quien} onChange={this.handleChange} />
        </label>

        <label>
          Descripcion:
          <input name="descrip" type="text" value={this.state.descrip} onChange={this.handleChange} />
        </label>

        <input type="submit" value="Submit" />
      </form>
      //<p>{this.state.titulo}{this.state.nav1}{this.state.nav2}{this.state.nav3} </p>
  )
  }
}
export default IndexEditorPage
