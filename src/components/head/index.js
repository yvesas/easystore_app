import React, {Component}  from 'react'
import { connect } from 'react-redux'
import './head.scss'
import logo from '../../assets/logo.png'
import { getCategories } from '../../actions'

class Head extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: props.categories
    }
    window.scrollTo(0, 0);
    props.dispatch(getCategories())
  }

  static getDerivedStateFromProps(props) {
    return {
      categories: props.categories
    }
  }

  selectCategory = (category) => {
    console.log('category', category)
  }

  render() {
    const {categories} = this.state

    return (
      <div className="cntrHead">
        <div className="head">
          <div className="cntrTitle">
            <img src={logo} title="easy store logo" alt="easy store logo" className="logoHead"></img>
            <span className="titleHead">Easy Store</span>
          </div>
          <div className="cntrActionsHead">

          </div>
        </div>

        <div className="navbar">
          {categories.map((ct, index) =>
            <div key={index} onClick={()=>this.selectCategory(ct)}>{ct}</div>
          )}
        </div>
      </div>
    )
  }  
}

const mapStateToProps = (store) => {
  return {
    categories: store.categories,
    productSelected: store.productSelected,    
    categorySelected: store.categorySelected
  }
};
export default  connect((mapStateToProps)) (Head);