import React, { Component } from 'react';
import { Button, ButtonGroup, ButtonToolbar, Card, CardBody, CardHeader, CardTitle, Col, Row, Table } from 'reactstrap';
import '../../scss/Demographics/_demographics.scss';
import * as API from './DemographicsApi';
import Select from 'react-select';
import Highcharts from 'highcharts';
import ReactHighcharts from 'react-highcharts';

class Demographics extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedAgeGroup: [],
      graphType: 'stacked',
      ageGroup: [],
      isMale: false,
      isFemale: false,
      isOther: false,
      patientList: [],
      data: [
        {
          label: 'Male',
          values: [{ x: '0', y: 0 }]
        },
        {
          label: 'Female',
          values: [{ x: '0', y: 0 }]
        }
      ],
      sexData: {},
      raceData: {},
      ethencityData: {}
    };

    this.loadData();
  }

  loadData = async () => {
    await this.loadAgeGroup();
    await this.loadPatientList();
  }

  loadAgeGroup = async () => {
    const _ageGroup = await API.getAgeGroup()
    const ageGroup = _ageGroup.map((group) => {
      return { value: group.id, label: group.shortDescription }
    })

    this.setState({ ageGroup: ageGroup });
  }

  loadPatientList = async () => {
    const userDetails = JSON.parse(localStorage.getItem('access_token'))
    const ageGroup = this.state.selectedAgeGroup.map(group => { return group.value; });
    let gender = this.state.isMale === true ? "1" : "";
    gender = gender + (this.state.isFemale === true ? (gender === "" ? "2" : ",2") : "");
    gender = gender + (this.state.isOther === true ? (gender === "" ? "3" : ",3") : "");
    const patientList = await API.getPatientList(userDetails.user.mamberId, ageGroup.join(), gender);
    this.setState({ patientList: patientList });
    await this.getDisplayChartData();
    this.getDisplaySexData();
    this.getDisplayRaceData();
    this.getDisplayEthencityData();
  }

  onGraphTypeChange = (graphtype) => {
    this.setState({ graphType: graphtype },
      async () => await this.loadPatientList());
  }

  onAgeGroupChange = async (selectedAgeGroup) => {
    this.setState({ selectedAgeGroup },
      async () => await this.loadPatientList()
    );
  }

  handleCheck = (e) => {
    this.setState({ [e.target.name]: e.target.checked },
      async () => await this.loadPatientList());
  }

  distinct = (value, index, self) => {
    return self.indexOf(value) === index;
  }

  getDisplayChartData = async () => {
    if (this.state.patientList.length <= 0) return;

    const ageList = this.state.patientList.map((patient) => { return patient.age; }).filter(this.distinct).sort();
    let maleValue = []
    let femaleValue = []
    let otherValue = []
    ageList.map((age) => {
      maleValue.push(this.state.patientList.filter(function (patient) { return patient.age === age && patient.refGenderId === 1; }).length);
      femaleValue.push(this.state.patientList.filter(function (patient) { return patient.age === age && patient.refGenderId === 2; }).length);
      otherValue.push(this.state.patientList.filter(function (patient) { return patient.age === age && patient.refGenderId === 3; }).length);
    })

    let data = {
      chart: {
        type: 'column',
        width:1100

      }, colors: ["#1F77B4", "#AEC7E8", "#FF7F0E"],
      title: {
        text: 'Distribution of Patient Count by Age’'
      },
      xAxis: {
        title: {
          text: 'Patient Age',
          style: {
            fontSize: '16'
          }
        },
        categories: ageList,
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Patient Count',
          style: {
            fontSize: '16'
          }
        },
        stackLabels: {
          enabled: true,
          style: {
            fontWeight: 'bold',
            color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
          }
        }
      },
      legend: {
        enabled: false,
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
      },
      tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
      },
      plotOptions: this.state.graphType !== "stacked" ? {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        }
      } : {
          column: {
            stacking: 'normal',
            dataLabels: {
              enabled: false,
              color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
            }
          }
        },
      series: [{
        name: 'Male',
        data: maleValue
      }, {
        name: 'Female',
        data: femaleValue
      }, {
        name: 'Not Provided',
        data: otherValue
      }],
      credits: {
        enabled: false
      }
    }

    this.setState({ data: data });
  }

  getDisplaySexData = () => {
    if (this.state.patientList.length <= 0) return;

    const genderList = this.state.patientList.map((patient) => { return patient.grnderDes; }).filter(this.distinct).sort();

    let genderData = []

    genderList.map(gender => {
      const _y = this.state.patientList.filter(function (patient) { return patient.grnderDes === gender }).length;
      const _data = { name: gender, y: _y }
      genderData.push(_data)
      return;
    })

    let sexData = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Sex'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.y:.1f}',
            style: {
              color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
            }
          }
        }
      },
      series: [{
        name: 'Sex',
        colorByPoint: true,
        data: genderData
      }],
      credits: {
        enabled: false
      }
    }

    this.setState({ sexData: sexData })
  }

  getDisplayRaceData = () => {
    if (this.state.patientList.length <= 0) return;

    const raceList = this.state.patientList.map((patient) => { return patient.raceDes; }).filter(this.distinct).sort();

    let raceData = []

    raceList.map(race => {
      const _y = this.state.patientList.filter(function (patient) { return patient.raceDes === race }).length;
      const _data = { name: race, y: _y }
      raceData.push(_data)
      return;
    })

    let _raceData = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Race'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.y:.1f}',
            style: {
              color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
            }
          }
        }
      },
      series: [{
        name: 'Race',
        colorByPoint: true,
        data: raceData
      }],
      credits: {
        enabled: false
      }
    }

    this.setState({ raceData: _raceData })
  }

  getDisplayEthencityData = () => {
    if (this.state.patientList.length <= 0) return;

    const ethnicityList = this.state.patientList.map((patient) => { return patient.ethnicityDes; }).filter(this.distinct).sort();

    let ethnicityData = []

    ethnicityList.map(ethnicity => {
      const _y = this.state.patientList.filter(function (patient) { return patient.ethnicityDes === ethnicity }).length;
      const _data = { name: ethnicity, y: _y }
      ethnicityData.push(_data)
      return;
    })

    const ethencityData = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Ethinicity'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.y:.1f} ',
            style: {
              color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
            }
          }
        }
      },
      series: [{
        name: 'Ethinicity',
        colorByPoint: true,
        data: ethnicityData
      }],
      credits: {
        enabled: false
      }
    }

    this.setState({ ethencityData: ethencityData })
  }

  average = arr => { return arr.reduce((p, c) => p + c, 0) / arr.length };

  render() {
    const maxAge = this.state.patientList.length === 0 ? 0 : Math.max.apply(Math, this.state.patientList.map(function (patient) { return patient.age; }));
    const minAge = this.state.patientList.length === 0 ? 0 : Math.min.apply(Math, this.state.patientList.map(function (patient) { return patient.age; }));
    const avgAge = this.state.patientList.length === 0 ? 0 : this.average(this.state.patientList.map(function (patient) { return patient.age; }));

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="12" lg="11">
            <Row>
              <Col xs="12" sm="6" lg="5">
                <Card className="text-white bg-primary">
                  <CardBody className="text-black-50 pb-0 filters">
                    <div className="text-white center-container">Range</div>
                    <Select
                      value={this.state.selectedAgeGroup}
                      onChange={this.onAgeGroupChange}
                      options={this.state.ageGroup}
                      isMulti={true}
                      isSearchable={false}
                    />
                  </CardBody>
                </Card>
              </Col>
              <Col xs="12" sm="6" lg="2">
                <Card className="text-white bg-primary">
                  <CardBody className="pb-0 filters">
                    <div className="center-container">Type Of Graph</div>
                    <div className="graphtype-filter-container" >
                      <ButtonGroup>
                        <Button onClick={(e) => { this.onGraphTypeChange('grouped') }} className={this.state.graphType === 'grouped' ? "graphType-selected" : "graphType-unselected"}>Grouped</Button>
                        <Button onClick={(e) => { this.onGraphTypeChange('stacked') }} className={this.state.graphType === 'stacked' ? "graphType-selected" : "graphType-unselected"}>Stacked</Button>
                      </ButtonGroup>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xs="12" sm="7" lg="4">
                <Card className="text-white bg-primary">
                  <CardBody className="pb-0 filters" >
                    <div className="center-container">Sex</div>
                    <div className="gender-filter-container">
                      <div className="filter-container">
                        <div className="male">
                          Male
                        </div>
                        <div className="selector male">
                          <input type="checkbox" name="isMale" onChange={this.handleCheck} checked={this.state.isMale} />
                        </div>
                      </div>
                      <div className="filter-container">
                        <div className="female">
                          Female
                        </div>
                        <div className="selector female">
                          <input type="checkbox" name="isFemale" onChange={this.handleCheck} checked={this.state.isFemale} />
                        </div>
                      </div>
                      <div className="filter-container">
                        <div className="other">
                          Not Provided
                        </div>
                        <div className="selector other">
                          <input type="checkbox" name="isOther" onChange={this.handleCheck} checked={this.state.isOther} />
                        </div>
                      </div>
                    </div>
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
                  <ReactHighcharts className="highcharts-gender"
                    config={this.state.data}
                  />
                </Row>
                <Row>
                  <Col sm="3" className="d-none d-sm-inline-block"><div className="text-center">Total Patient</div>
                  </Col>
                  <Col sm="3" className="d-none d-sm-inline-block"><div className="text-center">Minimum Age</div>
                  </Col>
                  <Col sm="3" className="d-none d-sm-inline-block"><div className="text-center">Maximum Age</div>
                  </Col>
                  <Col sm="3" className="d-none d-sm-inline-block"><div className="text-center">Mean Age</div>
                  </Col>
                </Row>
                <Row>
                  <Col sm="3" className="d-none d-sm-inline-block"><div className="text-center">{this.state.patientList.length}</div>
                  </Col>
                  <Col sm="3" className="d-none d-sm-inline-block"><div className="text-center">{minAge}</div>
                  </Col>
                  <Col sm="3" className="d-none d-sm-inline-block"><div className="text-center">{maxAge}</div>
                  </Col>
                  <Col sm="3" className="d-none d-sm-inline-block"><div className="text-center">{Math.round(avgAge)}</div>
                  </Col>
                </Row>
                <br/>
                <Row>
                  <Col sm="6" className="d-none d-sm-inline-block">
                    <Card>
                      <CardBody>
                        <div className="chart-wrapper">
                          <ReactHighcharts
                            config={this.state.sexData}
                          />
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col sm="6" className="d-none d-sm-inline-block">
                    <Card>
                      <CardBody>
                        <div className="chart-wrapper">
                          <ReactHighcharts
                            config={this.state.raceData}
                          />
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col sm="6" className="d-none d-sm-inline-block">
                    <Card>
                      <CardBody>
                        <div className="chart-wrapper">
                          <ReactHighcharts
                            config={this.state.ethencityData}
                          />
                        </div>
                      </CardBody>
                    </Card>
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

export default Demographics;
