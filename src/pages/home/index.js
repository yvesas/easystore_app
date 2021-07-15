import React, {Component}  from 'react'
import { connect } from 'react-redux'
import Head from '../../components/head'
import Footer from '../../components/footer'
import './home.scss'

class Home extends Component {
  state = {}

  render() {
    return (
      <>
        <Head/>
        <div className='cntrHome'>
       
        </div>        
        <Footer/>
      </>
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