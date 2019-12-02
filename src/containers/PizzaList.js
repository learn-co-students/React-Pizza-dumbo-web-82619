import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  handleClick = (data) => {
    console.log(data)
  }


  render() {
      const pizzalist = this.props.pizzas.map(pizza => {
        return <Pizza  key={pizza.id} pizza={pizza} 
        handleClick={this.props.handleClick}/>
      })

    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            pizzalist
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
