import React, { Component } from 'react';
import '../../../scss/Medications/_medications.scss';
import * as API from './MedicationsApi';
import NDCManufacturer from './NDCManufacturer';
import {
  Table,
} from 'antd';
import { debug } from 'util';

const columns = [
  { title: 'Proprietary', dataIndex: 'proprietaryName', key: 'proprietaryName', width: 800 },
  { title: 'Patient Count', dataIndex: 'count', key: 'count' , width: 150 },
  {
    title: 'Percentage',
    dataIndex: 'per',
    render: val => <div> {`${val} %`}</div>,
    width: 200 
  }
];


class Propreitory extends Component {

  constructor(props) {
    super(props);
    this.state = {
      PropreitoryDetails: []
    };
    this.loadData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.filter !== this.props.filter) {
      this.loadData();
    }
  }

  loadData = async () => {
    await this.loadPropreitoryDetails();
  }

  loadPropreitoryDetails = async () => {
    const PropreitoryDetails = await API.GetProprietaryDetail(this.props.mamberId, this.props.data.lexiDrugSetID, this.props.filter);

    this.setState({ PropreitoryDetails: PropreitoryDetails });
  }
  
  renderNDCManufacturer = (row) => {
    return (
      <NDCManufacturer data={row} mamberId={this.props.mamberId} drugSetID={this.props.data.lexiDrugSetID} filter={this.props.filter} />
    );
  };
  
  render() {
    return (
      <Table
        className="components-table-demo-nested condiation-details"
        columns={columns}
        expandedRowRender={this.renderNDCManufacturer}
        dataSource={this.state.PropreitoryDetails}
        pagination={false} 
      />
    );
  }
}

export default Propreitory;
