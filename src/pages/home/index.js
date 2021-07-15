import React, {Component}  from 'react';
import { connect } from 'react-redux'
import './home.scss'

class Home extends Component {
  state = {}

  render() {
    return (
      <div></div>
    )
  }  
}

const mapStateToProps = (store) => {
  return {
    products: store.products,
    categories: store.categories,
    productSelected: store.productSelected,    
    categorySelected: store.categorySelected
  }
};
export default  connect((mapStateToProps)) (Home);