import React, {Component}  from 'react';
import { connect } from 'react-redux'
import './detail.scss'

class Detail extends Component {
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
    productSelected: store.productSelected,    
    categorySelected: store.categorySelected
  }
};
export default  connect((mapStateToProps)) (Detail);