import React, { Component } from 'react';
import '../../../scss/Demographics/_demographics.scss';
import * as API from './CondiationsApi';

import {
  Table,
} from 'antd';

const columns = [
  { title: 'Patient Id', dataIndex: 'patientid', key: 'patientid', width: 200 },
  { title: 'Condition', dataIndex: 'condition', key: 'condition', width: 300 },
  { title: 'Condition Category', dataIndex: 'conditioncategory', key: 'conditioncategory', width: 300},
  { title: 'Other', dataIndex: 'conditionOther', key: 'conditionOther', width: 300 }
];

class PatientCondiations extends Component {

  constructor(props) {
    super(props);
    this.state = {
      PatientCondiations: [],
    };
    this.loadData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.data !== this.props.data) {
      this.loadData();
    }
  }

  loadData = async () => {
    await this.loadPatientCondiations();
  }

  loadPatientCondiations = async () => {
    const PatientCondiations = await API.GetPatientConditions(this.props.mamberId, this.props.data.conditionID, this.props.data.patientid);

    this.setState({ PatientCondiations: PatientCondiations });
  }
  
  render() {
    return (
      <Table
        className="components-table-demo-nested patients-condiation"
        columns={columns}
        dataSource={this.state.PatientCondiations}
        pagination={false}
      />
    );
  }
}

export default PatientCondiations;
