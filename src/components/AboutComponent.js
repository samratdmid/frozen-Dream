import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardHeader,
  Media
} from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
import { Fade, Stagger } from "react-animation-components";

function RenderLeader({leader}) {
  return(
      <Media tag="li">
          <Media left middle>
              <Media object src={require("./assets/images/" + leader.image)} alt={leader.name} />
          </Media>
          <Media body className="ml-5">
              <Media heading>{leader.name}</Media>
              <p>{leader.designation}</p>
              <p>{leader.description}</p>
          </Media>
      </Media>
  );

}

function LeaderList(props) {

  const leaders = props.leaders.leaders.map((leader) => {
      return (
          <Fade in key={leader._id}>
              <div className="col-12 mt-2">
                      <RenderLeader leader={leader} />
              </div>
          </Fade>
      );
  });

  if (props.leaders.isLoading) {
      return(
              <Loading />
      );
  }
  else if (props.leaders.errMess) {
      return(
          <div className="col-12"> 
              <h4>{props.leaders.errMess}</h4>
          </div>
      );
  }
  else {
      return (
          <Media list>
              <Stagger in>
                  {leaders}
              </Stagger>
          </Media>
      );
  }
}

function About(props) {

  return(
      <div className="container">
          <div className="row">
              <Breadcrumb>
                  <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                  <BreadcrumbItem active>About Us</BreadcrumbItem>
              </Breadcrumb>
              <div className="col-12">
                  <h3>About Us</h3>
                  <hr />
              </div>                
          </div>
          <div className="row row-content">
              <div className="col-12 col-md-6">
                  <h2>Ice Creams History</h2>
                  <p>An ice-cream-like food was first eaten in China in 618-97AD. King Tang of Shang, had 94 ice men who helped to make a dish of buffalo milk, flour and camphor. A kind of ice-cream was invented in China about 200 BC when a milk and rice mixture was frozen by packing it into snow.</p>
                  <p>Ice cream may be served in dishes, for eating with a spoon, or licked from edible cones. Ice cream may be served with other desserts, such as apple pie, or as an ingredient in ice cream floats, sundaes, milkshakes, ice cream cakes and even baked items, such as Baked Alaska.</p>
              </div>
              <div className="col-12 col-md-5">
                  <Card>
                      <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                      <CardBody>
                        <dl className="row p-1">
                          <dt className="col-6">Started</dt>
                          <dd className="col-6">16 May 2020</dd>
                          <dt className="col-6">Stake Holder</dt>
                          <dd className="col-6">Samrat Dutta</dd>
                          <dt className="col-6">Our Vision</dt>
                          <dd className="col-6">To Spread Love</dd>
                          <dt className="col-6">Employees</dt>
                          <dd className="col-6">10</dd>
                        </dl>
                      </CardBody>
                  </Card>
              </div>
              <div className="col-12">
                  <Card>
                      <CardBody className="bg-faded">
                          <blockquote className="blockquote">
                              <p className="mb-0">
                                  You can't buy happiness, but you can buy ice cream and that is pretty much the same thing.
                              </p>
                              <footer className="blockquote-footer">
                                Unknown
                              </footer>
                          </blockquote>
                      </CardBody>
                  </Card>
              </div>
          </div>
          <div className="row row-content">
              <div className="col-12">
                  <h2>The Kings of our Kingdom</h2>
              </div>
              <LeaderList leaders={props.leaders} />
          </div>
      </div>
  );
}

export default About;