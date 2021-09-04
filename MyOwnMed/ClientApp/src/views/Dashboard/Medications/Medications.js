import React, { Component } from 'react';
import { Button , Card , CardBody , Col , Input , Row } from 'reactstrap';
import '../../../scss/Medications/_medications.scss';
import NonProprietary from './NonProprietary';

class Condiations extends Component {

  constructor(props) {
    super(props);
    const userDetails = JSON.parse(localStorage.getItem('access_token'))
    this.state = {
      tempFilter: '',
      filter: '',
      mamberId: userDetails.user.mamberId
    };
  }
  
  handleChange(e) {
    this.setState({ tempFilter: e.target.value });
  }

  onSearch = () => {
    this.setState({ filter: this.state.tempFilter });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="12" lg="12">
            <Row>
              <Col xs="12" sm="12" lg="12">
                <Card className="text-white bg-primary">
                  <CardBody className="text-black-50 pb-0 filters">
                    <Row>
                      <Col xs="12" sm="6" lg="11">
                        <Input type="text" id="name" placeholder="Search" onChange={(e) => { this.handleChange(e) }} required />
                      </Col>
                      <Col xs="12" sm="6" lg="1">
                        <Button active block color="primary" aria-pressed="true" onClick={(e) => { this.onSearch()}} >Search</Button>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardBody>
                <Row>
                  <NonProprietary className="condiation-table" filter={this.state.filter} mamberId={this.state.mamberId} />
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Condiations;
