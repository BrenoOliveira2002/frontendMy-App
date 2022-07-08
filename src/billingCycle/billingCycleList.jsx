import React, {Component } from "react";
import { render } from "react-dom";
import { bindActionCreators } from "redux";

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
const mapDispatchToProps = dispatch => bindActionCreators({getList}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList) 