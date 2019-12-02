import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizzas: [],
    gotPizza: {},

  }

  componentDidMount(){
    fetch("http://localhost:3000/pizzas")
    .then(r => r.json())
    .then(data => {
      this.setState({
        pizzas: data
      })
    })
  }

  handleClick = (pizzaObj) => {
    this.setState({
      gotPizza: pizzaObj
    })
    
  }


  handleChange = (e) => {
    this.setState({
      gotPizza: {
      ...this.state.gotPizza,
      [e.target.name]: e.target.value
    }
    }, ()=> console.log('after cllick', this.state))
  }
  

  handleRadioButtonChange = (e) => {
    console.log(e.target.value)
    if(e.target.value === "Vegeterian"){
      this.setState({
      gotPizza: {
        ...this.state.gotPizza,
        vegetarian: true
      }
    })
    } else {
      this.setState({
        gotPizza: {
          ...this.state.gotPizza,
          vegetarian: true
        }
      })

    }
  }
  
  

  render() {
   
    return (
      <Fragment>
        <Header/>
  
        <PizzaForm handleRadioButtonChange={this.handleRadioButtonChange} handleChange={this.handleChange} pizza={this.state.gotPizza}/>
        <PizzaList handleClick={this.handleClick} pizzas={this.state.pizzas}/>
      </Fragment>
    );
  }
}

export default App;
