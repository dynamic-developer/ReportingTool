import React, { Component } from 'react';
import { Progress } from 'reactstrap';
import '../../../scss/Demographics/_demographics.scss';
import * as API from './CondiationsApi';
import CondiationPatient from './CondiationPatient';
import {
  Table,
} from 'antd';

const columns = [
  { title: 'Conditions', dataIndex: 'condition', key: 'condition', width: 800 },
  { title: 'Patient Count', dataIndex: 'count', key: 'count' , width: 150 },
  {
    title: 'Percentage',
    dataIndex: 'per',
    render: val => <div> {`${val} %`}</div>,
    width: 200 
  }
];


class CondiationDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      CondiationDetails: [],
      ConditionsPatients: [],
    };
    this.loadData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.filter !== this.props.filter) {
      this.loadData();
    }
  }

  loadData = async () => {
    await this.loadCondiationsDetails();
  }

  loadCondiationsDetails = async () => {
    const CondiationDetails = await API.getConditionsDetails(this.props.mamberId, this.props.data.conditionCategoryId, this.props.filter);

    this.setState({ CondiationDetails: CondiationDetails });
  }
  
  renderConditionsPatients = (row) => {
    return (
      <CondiationPatient data={row} mamberId={this.props.mamberId} filter={this.props.filter} />
    );
  };
  
  render() {
    return (
      <Table
        className="components-table-demo-nested condiation-details"
        columns={columns}
        expandedRowRender={this.renderConditionsPatients}
        dataSource={this.state.CondiationDetails}
        pagination={false} 
      />
    );
  }
}

export default CondiationDetails;
