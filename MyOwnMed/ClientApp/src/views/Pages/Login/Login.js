import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { loginUser } from '../../../redux/actions/login';
import { connect } from 'react-redux'
import axios from 'axios';
import { toast } from 'react-toastify';
import '../../../scss/Login/_login.scss'

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      UserName: '',
      UserPwd: '',
      Message: '',
      isLoading: false
    };
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  loginUser = async () => {
    if (!this.validateUser())
      return;

    this.setState({ isLoading: true })
    let data = await axios.post("api/Auth", { UserName: this.state.UserName, UserPwd: this.state.UserPwd });
    console.log('data : ', data.data);
    if (data.data) {
      localStorage.setItem('access_token', JSON.stringify(data.data));
      this.props.loginUser({ token: data.data });
      this.props.history.push('/dashboard');
    } else {
      this.setState({ Message: 'User name or password is incorrect..!' })
    }
    this.setState({ isLoading: false })
  }

  validateUser = () => {
    this.setState({ Message: '' })
    if (!this.state.UserName) {
      this.setState({ Message: 'Please enter user..!' })
      return false;
    } else if (!this.state.UserPwd) {
      this.setState({ Message: 'Please enter password..!' })
      return false;
    }
    return true;
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          {
            this.state.isLoading ?
              <div style={{
                position: "absolute",
                backgroundColor: "white",
                width: "100%",
                height: "100%",
                zIndex: "50",
                opacity: "0.8",
                left: "0px",
                top: "0px",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <img src='square_loader.gif' />
              </div> : null
          }
          <Row className="justify-content-center">
            <Col md="5">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <img src='MoM-HeaderLogo400p.png' className='logo' />
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Username" autoComplete="username" name="UserName" onChange={this.onChange} />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" autoComplete="current-password" name="UserPwd" onChange={this.onChange} />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4" onClick={() => this.loginUser()}>Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12">
                          <div className="login-warning">
                            {this.state.Message}
                          </div>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginUser: (authDetails) => {
    return dispatch(loginUser(authDetails))
  }
});

export default connect(null, mapDispatchToProps)(Login)
