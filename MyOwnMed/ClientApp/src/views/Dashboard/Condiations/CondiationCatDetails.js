import React, { Component } from 'react';
import { Progress } from 'reactstrap';
import '../../../scss/Demographics/_demographics.scss';
import * as API from './CondiationsApi';
import CondiationDetails from './CondiationDetails';
import {
  Table,
} from 'antd';

const columns = [
  { title: 'Condition Category', dataIndex: 'conditionCat', key: 'conditionCat', width: 800 },
  { title: 'Patient Count', dataIndex: 'count', key: 'count', width: 150 },
  {
    title: 'Percentage',
    dataIndex: 'per',
    render: val => <div>{`${val} %`}</div>,
    width: 200
  }
];


class CondiationCatDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      CondiationCatDetails: [],
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
    await this.loadCondiationsCatDetails();
  }

  loadCondiationsCatDetails = async () => {
    this.setState({ CondiationCatDetails: null });
    const CondiationCatDetails = await API.getConditionsCatDetails(this.props.mamberId, this.props.filter);

    this.setState({ CondiationCatDetails: CondiationCatDetails });
  }

  renderConditionsPatients = (row) => {
    return (
      <CondiationDetails data={row} mamberId={this.props.mamberId} filter={this.props.filter} />
    );
  };

  render() {
    return (
      <Table
        className="components-table-demo-nested condiation-details"
        columns={columns}
        expandedRowRender={this.renderConditionsPatients}
        dataSource={this.state.CondiationCatDetails}
        pagination={false} 
      />
    );
  }
}

export default CondiationCatDetails;
