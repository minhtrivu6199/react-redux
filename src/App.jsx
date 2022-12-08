import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
class App extends Component {

    renderBread = () => {
        let {burger} = this.props;
        // for (let propBurger in burger) {
        //     console.log(propBurger, burger[propBurger]);
        // }

        return Object.entries(burger).map(([propsBurger, value], index) => {

            let breadMid = [];
            for (let i = 0; i < value; i++) {
                breadMid.push(<div key={i} className={propsBurger}></div>)
            }


                return breadMid;
        });
    }

    renderMenu = () => {
        //Lay props tu redux ve
        let {menu, burger} = this.props;
        console.log(menu);

        return  Object.entries(menu).map(([propsMenu, price], index) => {
            return (
                
                    <tr key={index}>
                        <td>{propsMenu}</td>
                        <td>
                            <button className='btn btn-success' onClick={() => {this.props.addBreadMid(propsMenu, 1)}}>+</button> 
                            {burger[propsMenu]} 
                            <button className='btn btn-danger' onClick={() => {this.props.addBreadMid(propsMenu, -1)}}>-</button>
                        </td>
                        <td>{price}</td>
                        <td>{burger[propsMenu] * price}</td>
                    </tr>
                
            )
        })
    }
  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col-7">
                <div className="breadTop"></div>
                    {this.renderBread()}
                <div className="breadBottom"></div>
            </div>
            <div className="col-5">
            <table className="table">
                <thead>
                    <tr>
                        <th>Thuc An</th>
                        <th></th>
                        <th>Don Gia</th>
                        <th>Thanh Tien</th>
                    </tr>
                    {this.renderMenu()}
                </thead>
                <tfoot>
                    <tr>
                        <td colSpan="2"></td>
                        <td>Tong Cong</td>
                        <td>{this.props.total}</td>
                    </tr>
                </tfoot>
            </table>
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state => {
    return {
        burger: state.BurgerReducer.burger,
        menu: state.BurgerReducer.menu,
        total: state.BurgerReducer.total,

    }
})

const mapDispatchToProps = dispatch => {
    return {
        addBreadMid: (propsBurger, amount) => {
            const action = {
                type: 'ADD_BREADMID',
                propsBurger,
                amount
            }
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)