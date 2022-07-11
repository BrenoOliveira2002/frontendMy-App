import React, { Component } from "react";
import Grid from "../common/layout/grid";
import { Field } from "redux-form";

class CreditList extends Component {

    renderRows() {

        return (

            <tr>
                <td><Field name='credits[0].name' component='input' /> </td>
                <td><Field name='credits[0].value' component='input' /> </td>
                <td><Field name='???' component='input' /> </td>
            </tr>
        )
    }

    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>Creditos</legend>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <th>Acoes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>

        )
    }
}

export default CreditList