import React, { Component } from 'react';

import AuthUserContext from '../Session/AuthUserContext';
import withAuthorization from '../Session/withAuthorization';
import { db } from '../../firebase';
import { auth } from "../../firebase/firebase";
import Button from "react-bootstrap/es/Button";
import Grid from "react-bootstrap/es/Grid";
import Row from "react-bootstrap/es/Row";
import Col from "react-bootstrap/es/Col";
import ProgressBar from "react-bootstrap/es/ProgressBar";
import StarRatings from 'react-star-ratings';
import Unity from "react-unity-webgl";
import './style.css';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
        users: {},
        user: {},
        userProgress: 0
    }
  }

  componentDidMount(){
    db.onceGetUsers().then(snapshot =>
      this.setState(() => ({ users: snapshot.val() }))
    );
    db.onceGetUserByUid(auth.getUid()).then(snapshot => {
        this.setState(() => ({ user: snapshot.val() }));
        this.setState(() => ({ userProgress: 75}))
        }
    );
  }


  render() {
    const { users } = this.state;

    return (
      <div>
        <Grid>
            <Row>
                <Col xs={12} md={8}>
                    <div id={'play-container'}>
                        <AuthUserContext.Consumer>
                            {authUser =>
                                <div>
                                    <h1>Hello, {this.state.user.username}</h1>
                                    <Button id={'play-button'}>Play</Button>
                                </div>
                            }
                        </AuthUserContext.Consumer>
                    </div>
                </Col>
                <Col xs={12} md={4}>
                    <Row>
                        <div id={'share'}>
                            Share
                            <div id={'share-buttons-container'}>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div id={'rate'}>
                            <h3>Rate</h3>
                            <StarRatings
                                rating={8}
                                starRatedColor="blue"
                                changeRating={() => {}}
                                starDimension={"30px"}
                                starSpacing={"3px"}
                                numberOfStars={10}
                            />
                        </div>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xs={16} md={16}>
                    <div id={'progress-bar'}>
                        <h2>Your progress</h2>
                        <ProgressBar now={this.state.userProgress} label={`${this.state.userProgress}%`} />
                    </div>
                </Col>
                <Unity
                    width='500px'
                    height='350px'
                    onProgress={(progression) => console.log(progression * 100)}
                    loader="unity/Build/UnityLoader.js"
                    src="unity/Build/v3.1.json"
                />
            </Row>
        </Grid>
      </div>
    );
  }
}

const UserList = ({ users }) =>
  <div>
      <AuthUserContext.Consumer>
          {authUser =>
              <div>
                  <h1>Account: {authUser.email}</h1>
                  <Button id={'play-button'}>Play</Button>
              </div>
          }
      </AuthUserContext.Consumer>
    <h2>List of Usernames of Users</h2>
    <p>(Saved on Sign Up in Firebase Database)</p>

    {Object.keys(users).map(key =>
      <div key={key}>{key}</div>
    )}
  </div>;

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);