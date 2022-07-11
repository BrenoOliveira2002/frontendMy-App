import React, {Component } from "react";
import { render } from "react-dom";
import { bindActionCreators } from "redux";
import { getList, showUpdate } from './billingCycleActions'
class BillingCycleList extends Component {

    componentWillMount() {

        this.props.getList()
        console.log(this.props.list)
    }

    renderRows() {

        const list = this.props.list || []
        return list.map(bc => (
            <tr key={bc.id}>
                <td> {bc.name}</td>
                <td> {bc.month}</td>
                <td> {bc.year}</td>
                <td>
                 <button className="btn btn-warning" onClick={() => this.props.showUpdate(bc)}>
                    <i className="fa fa-pencil"></i>
                 </button>
                 </td> 
            </tr>
        ))
    }

    render() {

        return (

            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mes</th>
                            <th>Ano</th>
                            <th>Acoes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div> 
        )
    }
}


const mapStateToProps = state => ({list: state.BillingCycleList.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList, showUpdate}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList) 