import React, { Component } from 'react';
import '../../../scss/Medications/_medications.scss';
import * as API from './MedicationsApi';

import {
  Table,
} from 'antd';

const columns = [
  { title: 'NDC', dataIndex: 'ndcCode', key: 'ndcCode', width: 200 },
  { title: 'Manufacturer', dataIndex: 'manufacturer', key: 'manufacturer', width: 300 }
];

class NDCManufacturer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      NDCManufacturerDetails: [],
    };
    this.loadData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.data !== this.props.data || prevProps.filter !== this.props.filter) {
      this.loadData();
    }
  }

  loadData = async () => {
    await this.loadNDCManufacturerDetails();
  }

  loadNDCManufacturerDetails = async () => {
    const NDCManufacturerDetails = await API.GetNDCManufacturerDetail(this.props.mamberId, this.props.drugSetID, this.props.data.dosageFormID, this.props.filter);

    this.setState({ NDCManufacturerDetails: NDCManufacturerDetails });
  }
  
  render() {
    return (
      <Table
        className="components-table-demo-nested condiation-patients"
        columns={columns}
        dataSource={this.state.NDCManufacturerDetails}
        pagination={false} 
      />
    );
  }
}

export default NDCManufacturer;
