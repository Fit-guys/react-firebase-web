import React, { Component } from 'react';

import AuthUserContext from '../Session/AuthUserContext';
import withAuthorization from '../Session/withAuthorization';
import { db } from '../../firebase';
import { auth } from "../../firebase/firebase";
import Button from "react-bootstrap/es/Button";
import src1 from '../../images/scr1.png';
import Grid from "react-bootstrap/es/Grid";
import Row from "react-bootstrap/es/Row";
import Col from "react-bootstrap/es/Col";
import ProgressBar from "react-bootstrap/es/ProgressBar";
import StarRatings from 'react-star-ratings';
import './style.css';
import Link from "react-router-dom/es/Link";
import Carousel from "react-bootstrap/es/Carousel";
import Image from "react-bootstrap/es/Image";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
        users: {},
        user: {},
        userProgress: 0,
        rated: 0,
        rating: 0,
        canRate: false,
        progressObj: {
        },
        progressPercentage: 0
    }
  }

  doRate = (newRate) => {
    if(this.state.user.canRate){
        db.rateUs(newRate);
        db.onceGetRaiting().then(snapshot => {
            this.setState(() => ({ rated: snapshot.val().rated}));
            this.setState(() => ({ rating: snapshot.val().rating}));
        });
        db.disableRateApability(auth.getUid());
        this.setState(() => ({ canRate: false}));
    }
  };

  setProgressState = (progress) => {
      let np;
      let pp;
      if(progress[0] === '0'){
        np = {
            stage: 1,
            gameDone: 0
        };
        if(progress[2] === '1'){
            np.gameDone++;
        }
        if(progress[4] === '1'){
            np.gameDone++;
        }
        if(progress[6] === '1'){
               np.gameDone++;
        }
        if(progress[8] === '1'){
            np.gameDone++;
        }
        pp = np.gameDone * 25 * 0.25;
      }else if(progress[0] === '2'){

      }else if (progress[0] === '3'){

      }
      this.setState(() => ({ progressObj: np}));
      this.setState(() => ({ progressPercentage: pp}));
  };

  componentDidMount(){
    db.onceGetUsers().then(snapshot =>
      this.setState(() => ({ users: snapshot.val() }))
    );
    db.onceGetUserByUid(auth.getUid()).then(snapshot => {
        this.setState(() => ({ user: snapshot.val() }));
        this.setProgressState(snapshot.val().progress);
        this.setState(() => ({ canRate: snapshot.val().canRate}));
        }
    );
    db.onceGetRaiting().then(snapshot => {
        this.setState(() => ({ rated: snapshot.val().rated}));
        this.setState(() => ({ rating: snapshot.val().rating}));
    })
  }

  render() {
    return (
      <div id={'home-main-container'}>
        <Grid>
            <Row>
                <Col xs={12} md={8}>
                    <div id={'play-container'}>
                        <AuthUserContext.Consumer>
                            {authUser =>
                                <div id={'welcome-container'}>
                                    <h2>Ласкаво просимо, {this.state.user.username}</h2>
                                </div>
                            }
                        </AuthUserContext.Consumer>
                        <Carousel style={{width: '580px', margin: 'auto', marginBottom: '20px'}}>
                            <Carousel.Item>
                                <Image width={580} height={280} alt="900x500" src={src1} />
                                <Carousel.Caption>
                                    <h3>Зручне меню</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image width={580} height={280} alt="900x500" src={src1} />
                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image width={580} height={280} alt="900x500" src={src1} />
                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                        <a href={"http://cyber-game.herokuapp.com/unity.html?uid=" + auth.getUid()}><div id={'p-b-a'}>Почати гру</div></a>
                    </div>
                </Col>
                <Col xs={12} md={4}>
                    <Row>
                        <div id={'share'}>
                            <div id={'rate-us'} style={{paddingTop: '40px'}}>Поділитись</div>
                            <div id={'share-buttons-container'}>
                                <Link to={'/share'}><div id={'p-b-a'} style={{marginTop: '70px'}}>Поділитись</div></Link>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div id={'rate'}>
                            <div id={'rate-us'}>Оцінити</div>
                            <div id={'rated-by'}>Кількість оцінок: {this.state.rated}</div>
                            <div id={'rate-stars'}>
                                <StarRatings
                                    rating={this.state.rating}
                                    starRatedColor="blue"
                                    changeRating={(newRate) => {this.doRate(newRate)}}
                                    starDimension={"30px"}
                                    starSpacing={"3px"}
                                    numberOfStars={10}
                                />
                            </div>
                        </div>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xs={16} md={16}>
                    <div id={'progress-bar'}>
                        <h2>Ваш прогрес: <div style={{fontSize: 'large', marginTop: '15px'}}>Етапів пройдено: {this.state.progressObj.stage}, Під етапів пройдено: {this.state.progressObj.gameDone}</div></h2>
                        <ProgressBar now={this.state.progressPercentage} label={`${this.state.progressPercentage}%`} />
                    </div>
                </Col>
            </Row>
        </Grid>
      </div>
    );
  }
}

/*const UserList = ({ users }) =>
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
  </div>;*/

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);