import React from 'react';
import './App.css';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'




function App() {
  return (
    <div className="App rowContainer">
      <div className="container ">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <Card className="mt-5 mb-5 cardStyle">
              <CardBody>
                <CardTitle tag="h5" className="mb-2 text-muted text-center">FREE</CardTitle>
                <CardSubtitle tag="h1" className="text-center">$0<span style={{ 'fontSize': 13 }}>/month</span></CardSubtitle>
                <hr />
                <CardText>
                  <ul class="list-group leftAlign">
                    <span class="fas fa-check"></span>
                    <li class="list-group-item text-left"> <FontAwesomeIcon icon={faCheck} /><span className="marginLeft">Single User</span></li>
                    <li class="list-group-item "> <FontAwesomeIcon icon={faCheck} /> <span className="marginLeft">5GB Storage</span></li>
                    <li class="list-group-item "><FontAwesomeIcon icon={faCheck} /> <span className="marginLeft">Unlimited Public Projects</span></li>
                    <li class="list-group-item "><FontAwesomeIcon icon={faCheck} /> <span className="marginLeft">Community Access</span></li>
                    <li class="list-group-item  disabled"><FontAwesomeIcon icon={faTimes} /> <span className="marginLeft">Unlimited Private Projects</span></li>
                    <li class="list-group-item  disabled"><FontAwesomeIcon icon={faTimes} /> <span className="marginLeft">Dedicated Phone Support</span></li>
                    <li class="list-group-item  disabled"><FontAwesomeIcon icon={faTimes} /> <span className="marginLeft">Free Subdomain</span></li>
                    <li class="list-group-item  disabled"><FontAwesomeIcon icon={faTimes} /> <span className="marginLeft">Monthly Status reports</span></li>
                  </ul>

                </CardText>
                <Button>BUTTON</Button>
              </CardBody>
            </Card>
          </div>

          <div className="col-md-4 col-sm-12">
            <Card className="mt-5 mb-5 cardStyle">
              <CardBody>
                <CardTitle tag="h5" className="mb-2 text-muted text-center">PLUS</CardTitle>
                <CardSubtitle tag="h1" className="text-center">$9<span style={{ 'fontSize': 13 }}>/month</span></CardSubtitle>
                <hr />
                <CardText>
                  <ul class="list-group leftAlign">
                    <span class="fas fa-check"></span>
                    <li class="list-group-item text-left"> <FontAwesomeIcon icon={faCheck} /><b><span className="marginLeft">5 Users</span></b></li>
                    <li class="list-group-item "> <FontAwesomeIcon icon={faCheck} /> <span className="marginLeft">50GB Storage</span></li>
                    <li class="list-group-item "><FontAwesomeIcon icon={faCheck} /> <span className="marginLeft">Unlimited Public Projects</span></li>
                    <li class="list-group-item "><FontAwesomeIcon icon={faCheck} /> <span className="marginLeft">Community Access</span></li>
                    <li class="list-group-item"><FontAwesomeIcon icon={faCheck} /> <span className="marginLeft">Unlimited Private Projects</span></li>
                    <li class="list-group-item"><FontAwesomeIcon icon={faCheck} /> <span className="marginLeft">Dedicated Phone Support</span></li>
                    <li class="list-group-item"><FontAwesomeIcon icon={faCheck} /> <span className="marginLeft">Free Subdomain</span></li>
                    <li class="list-group-item  disabled"><FontAwesomeIcon icon={faTimes} /> <span className="marginLeft">Monthly Status reports</span></li>
                  </ul>

                </CardText>
                <Button>BUTTON</Button>
              </CardBody>
            </Card>
          </div>
          <div className="col-md-4 col-sm-12">
            <Card className="mt-5 mb-5 cardStyle">
              <CardBody>
                <CardTitle tag="h5" className="mb-2 text-muted text-center">PRO</CardTitle>
                <CardSubtitle tag="h1" className="text-center">$49<span style={{ 'fontSize': 13 }}>/month</span></CardSubtitle>
                <hr />
                <CardText>
                  <ul class="list-group leftAlign">
                    <span class="fas fa-check"></span>
                    <li class="list-group-item text-left"> <FontAwesomeIcon icon={faCheck} /><b><span className="marginLeft">Unlimited User</span></b></li>
                    <li class="list-group-item "> <FontAwesomeIcon icon={faCheck} /> <span className="marginLeft">150GB Storage</span></li>
                    <li class="list-group-item "><FontAwesomeIcon icon={faCheck} /> <span className="marginLeft">Unlimited Public Projects</span></li>
                    <li class="list-group-item "><FontAwesomeIcon icon={faCheck} /> <span className="marginLeft">Community Access</span></li>
                    <li class="list-group-item "><FontAwesomeIcon icon={faCheck} /> <span className="marginLeft"><b>Unlimited</b> Private Projects</span></li>
                    <li class="list-group-item "><FontAwesomeIcon icon={faCheck} /> <span className="marginLeft">Dedicated Phone Support</span></li>
                    <li class="list-group-item "><FontAwesomeIcon icon={faCheck} /> <span className="marginLeft">Free Subdomain</span></li>
                    <li class="list-group-item "><FontAwesomeIcon icon={faCheck} /> <span className="marginLeft">Monthly Status reports</span></li>
                  </ul>

                </CardText>
                <Button>BUTTON</Button>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
