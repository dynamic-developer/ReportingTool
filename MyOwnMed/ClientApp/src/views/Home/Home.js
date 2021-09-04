import React, { Component } from 'react';
import {Button, ButtonGroup, ButtonToolbar, Card, CardBody, CardHeader, CardTitle, Col, Row, Table} from 'reactstrap';
import '../../scss/Home/_home.scss'
class Home extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <Row className='MainContainer'>
          <Col sm={12}>
            <Card>
              <CardHeader>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col sm="4">
                  </Col>
                  <Col sm="7">
                  </Col>
                  <Col sm="1">
                    <Button color="link" className="px-0">
                      <a href={'/login'}>Login</a></Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Home;
