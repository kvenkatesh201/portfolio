import React,{Component} from 'react'
import './home.less'
import {Grid, Row, Col,Panel} from 'react-bootstrap'
import content from '../content/experience.json'
import ThoughtImage from './thoughtImage'

class Home extends Component {
  constructor(){
    super();
    this.state ={
      hide: false
  }
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({hide: true})
    },2500)
  }
  render(){
    return <div>
    <ThoughtImage hide={this.state.hide}/>
    {this.state.hide && <div className="home_container"><Grid>
    <Row className="show-grid">
      <Col xs={12} md={4}>
        <div>
          <img src='/img/profile.jpg' alt="Technology Quote" />
        </div>
      </Col>
      <Col xs={12} md={8}>
        <div>
         <h2>"A champion loves being challenged because that's the way you get to prove you're still the champion."</h2>
        <h4 className="summary">Computer Science Graduate and Full Stack Engineer Working for PayPal.
        I enjoy writing elegant, modular, re-usable and well-tested code. Enjoy functional programming principles and using the latest ES features and Striving to build re-usable modules.</h4>
        </div>
      </Col>
    </Row>
    <Panel style={{marginTop: "20px"}}>
      <Panel.Heading>
        <Panel.Title componentClass="h3">Education</Panel.Title>
      </Panel.Heading>
      <Panel.Body>
        <Row className="show-grid">
          <Col xs={6} md={4}>
            <h4>University of Illinois Springfield</h4>
          </Col>
          <Col xs={6} md={8}>
            <p>Master’s Degree, Computer Science</p>
            <p>2015-2016</p>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col xs={6} md={4}>
            <h4>Bharat Institute of Engineering and Technology</h4>
          </Col>
          <Col xs={6} md={8}>
            <p>Bachelors’s Degree, Computer Science</p>
            <p>2011-2015</p>
          </Col>
      </Row>
      </Panel.Body>
    </Panel>
  <Panel>
    <Panel.Heading>
      <Panel.Title componentClass="h3">Experience</Panel.Title>
    </Panel.Heading>
    <Panel.Body>
      <Row className="show-grid">
        <Col xs={6} md={4}>
          <h4>PayPal</h4>
        </Col>
        <Col xs={6} md={8}>
          <ul>{content.PayPal.map((val,index)=><li key={index}>{val}</li>)}</ul>
        </Col>
      </Row>
      <Row className="show-grid">
        <Col xs={6} md={4}>
          <h4>Verizon Wireless</h4>
        </Col>
        <Col xs={6} md={8}>
          <ul>{content.Verizon.map((val,index)=><li key={index}>{val}</li>)}</ul>
        </Col>
      </Row>
      <Row className="show-grid">
        <Col xs={6} md={4}>
          <h4>University of Illinois</h4>
        </Col>
        <Col xs={6} md={8}>
          <ul>{content.UIS.map((val,index)=><li key={index}>{val}</li>)}</ul>
        </Col>
      </Row>
      <Row className="show-grid">
        <Col xs={6} md={4}>
          <h4>Bharat Institute of Engineering and Technology</h4>
        </Col>
        <Col xs={6} md={8}>
          <ul>{content.BIET.map((val,index)=><li key={index}>{val}</li>)}</ul>
        </Col>
      </Row>
      <Row className="show-grid">
        <Col xs={6} md={4}>
          <h4>CMC Limited</h4>
        </Col>
        <Col xs={6} md={8}>
          <ul>{content.CMC.map((val,index)=><li key={index}>{val}</li>)}</ul>
        </Col>
      </Row>
    </Panel.Body>
  </Panel>
  </Grid></div>}
  </div>
  }
};

export default Home;