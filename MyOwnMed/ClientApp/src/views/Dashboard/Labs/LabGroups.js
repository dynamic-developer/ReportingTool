import React, { Component } from 'react';
import { Progress } from 'reactstrap';
import '../../../scss/Labs/_labs.scss';
import * as API from './LabsApi';
import LabTypes from './LabTypes';
import {
  Table,
} from 'antd';

const columns = [
  { title: 'Lab Group', dataIndex: 'labGroup', key: 'labGroup', width: 1100 },
];


class LabGroups extends Component {

  constructor(props) {
    super(props);
    this.state = {
      LabGroupsDetails: [],
    };
    this.loadData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.filter !== this.props.filter) {
      this.loadData();
    }
  }

  loadData = async () => {
    await this.loadLabGroupsDetails();
  }

  loadLabGroupsDetails = async () => {
    this.setState({ LabGroupsDetails: null });
    const LabGroupsDetails = await API.GetLabGroupResults(this.props.mamberId, this.props.filter,'','');

    this.setState({ LabGroupsDetails: LabGroupsDetails });
  }

  renderLabTypes = (row) => {
    return (
      <LabTypes data={row} mamberId={this.props.mamberId} filter={this.props.filter} />
    );
  };

  render() {
    return (
      <Table
        className="components-table-demo-nested condiation-details"
        columns={columns}
        expandedRowRender={this.renderLabTypes}
        dataSource={this.state.LabGroupsDetails}
        pagination={false}
      />
    );
  }
}

export default LabGroups;
