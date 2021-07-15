import React, {Component}  from 'react'
import { connect } from 'react-redux'
import Head from '../../components/head'
import Footer from '../../components/footer'
import './detail.scss'

class Detail extends Component {
  state = {}

  render() {
    return (
      <>
        <Head/>
        <div className='cntrDetail'>AQUI1</div>
        <div className='cntrDetail'>AQUI2</div>
        <Footer/>
      </>
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