import React, { Component } from "react";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import If from '../operator/if'
import { selectTab } from './tabActions'

class TabsHeader extends Component {

    render() {

        const selected = this.props.tab.selected === this.props.target
        const visible = this.props.visible[this.props.target]

        return (

            <If test={visible}>
                <li className={selected ? 'active' : ''}>
                    <a href='javascript:;'
                        data-toggle='tab'
                        onClick={() => this.props.selectTab(this.props.target)}
                        data-target={this.props.target}>
                        <i className={`fa fa-${this.props.icon}`}></i>{this.props.label}
                    </a>
                </li>
            </If>
        )
    }
}

const mapToStateToProps = state => ({ tab: state.tab })
const mapDispatchToProps = dispatch => bindActionCreators({ selectTab }, dispatch)
export default connect(mapToStateToProps, mapDispatchToProps)(TabsHeader)
