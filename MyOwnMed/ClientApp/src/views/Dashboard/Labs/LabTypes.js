import React, { Component } from 'react';
import '../../../scss/Labs/_labs.scss';
import * as API from './LabsApi';
import {
  Table,
} from 'antd';

const columns = [
  { title: 'Lab Type', dataIndex: 'labType', key: 'labType', width: 800 },
  { title: 'MeanSD', dataIndex: 'mean', key: 'mean', render: (val, record) => <div>{`${record.mean.toFixed(2)} ± ${!record.sd ? 0 : record.sd.toFixed(2)}`}</div>, width: 200 },
  { title: 'Min', dataIndex: 'min', key: 'min', width: 150 },
  { title: 'Max', dataIndex: 'max', key: 'max', width: 150 },
  { title: 'Count', dataIndex: 'count', key: 'count', width: 150 },
  {
    title: 'Percentage',
    dataIndex: 'per',
    render: val => <div>{`${val.toFixed(2)} %`}</div>,
    width: 200
  }
];


class LabTypes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      LabTypeDetails: []
    };
    this.loadData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.filter !== this.props.filter) {
      this.loadData();
    }
  }

  loadData = async () => {
    await this.loadLabTypeDetails();
  }

  loadLabTypeDetails = async () => {
    this.setState({ LabTypeDetails: null });
    const LabTypeDetails = await API.GetLabTypResults(this.props.mamberId, this.props.data.labgroupid, this.props.filter ,'','');

    this.setState({ LabTypeDetails: LabTypeDetails });
  }

  render() {
    return (
      <Table
        className="components-table-demo-nested condiation-details"
        columns={columns}
        dataSource={this.state.LabTypeDetails}
        pagination={false}
      />
    );
  }
}

export default LabTypes;
