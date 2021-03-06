import React, {Component } from "react";
import { render } from "react-dom";
import { bindActionCreators } from "redux";
import { getList, showUpdate, showDelete } from './billingCycleActions'
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
                 <button className="btn btn-danger" onClick={() => this.props.showDelete(bc)}>
                    <i className="fa fa-trash-o"></i>
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
                            <th className="table-actions">Acoes</th>
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
const mapDispatchToProps = dispatch => bindActionCreators({getList, showUpdate, showDelete}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList) 