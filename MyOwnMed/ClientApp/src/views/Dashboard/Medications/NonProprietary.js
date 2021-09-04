import React, { Component } from 'react';
import '../../../scss/Medications/_medications.scss';
import * as API from './MedicationsApi';
import Propreitory from './Propreitory';
import {
  Table,
} from 'antd';

const columns = [
  { title: 'NonProprietary', dataIndex: 'nonProprietaryName', key: 'nonProprietaryName', width: 800 },
  { title: 'Patient Count', dataIndex: 'count', key: 'count', width: 150 },
  {
    title: 'Percentage',
    dataIndex: 'per',
    render: val => <div>{`${val} %`}</div>,
    width: 200
  }
];


class NonProprietary extends Component {

  constructor(props) {
    super(props);
    this.state = {
      NonProprietaryDetails: []
    };
    this.loadData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.filter !== this.props.filter) {
      this.loadData();
    }
  }

  loadData = async () => {
    await this.loadNonProprietaryDetails();
  }

  loadNonProprietaryDetails = async () => {
    this.setState({ NonProprietaryDetails: null });
    const NonProprietaryDetails = await API.GetNonProprietaryDetail(this.props.mamberId, this.props.filter);

    this.setState({ NonProprietaryDetails: NonProprietaryDetails });
  }

  renderPropreitory = (row) => {
    return (
      <Propreitory data={row} mamberId={this.props.mamberId} filter={this.props.filter} />
    );
  };

  render() {
    return (
      <Table
        className="components-table-demo-nested condiation-details"
        columns={columns}
        expandedRowRender={this.renderPropreitory}
        dataSource={this.state.NonProprietaryDetails}
        pagination={false} 
      />
    );
  }
}

export default NonProprietary;
