import React, { Component } from 'react';
import '../../../scss/Demographics/_demographics.scss';
import * as API from './CondiationsApi';
import PatientCondiations from './PatientCondiations'

import {
  Table,
} from 'antd';

const columns = [
  { title: 'Patient Id', dataIndex: 'patientid', key: 'patientid', width: 200 },
  { title: 'Condition', dataIndex: 'condition', key: 'condition', width: 300 },
  { title: 'Condition Category', dataIndex: 'conditioncategory', key: 'conditioncategory', width: 300 },
  { title: 'Other', dataIndex: 'conditionOther', key: 'conditionOther', width: 300 }
];

class CondiationPatient extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ConditionsPatients: [],
    };
    this.loadData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.data !== this.props.data || prevProps.filter !== this.props.filter) {
      this.loadData();
    }
  }

  loadData = async () => {
    await this.loadConditionsPatients();
  }

  loadConditionsPatients = async () => {
    const ConditionsPatients = await API.GetConditionsPatients(this.props.mamberId, this.props.data.conditionID, this.props.filter);

    this.setState({ ConditionsPatients: ConditionsPatients });
  }
  
  renderConditionsPatients = (row) => {
    return (
      <PatientCondiations data={row} mamberId={this.props.mamberId} filter={this.props.filter}  />
    );
  };
  
  render() {
    return (
      <Table
        className="components-table-demo-nested condiation-patients"
        columns={columns}
        //expandedRowRender={this.renderConditionsPatients}
        dataSource={this.state.ConditionsPatients}
        pagination={false} 
      />
    );
  }
}

export default CondiationPatient;
