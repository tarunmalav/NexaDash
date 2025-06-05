import { Fragment } from "react";
import { Card } from "react-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Link } from "react-router-dom";

const UiBreadCrumb = () => {
    return (
        <Fragment>
            <div className="row">
                {/* Example */}
                <div className="col-xl-6 col-12">
                    <Card>
                        <Card.Header>
                            <h4 className="card-title">Example</h4>
                        </Card.Header>
                        <Card.Body>
                            <Breadcrumb>
                                <Breadcrumb.Item active>Home</Breadcrumb.Item>
                            </Breadcrumb>

                            <Breadcrumb>
                                <Breadcrumb.Item href="#" active><Link to={"#"}> Home </Link></Breadcrumb.Item>
                                <Breadcrumb.Item >Library</Breadcrumb.Item>
                            </Breadcrumb>

                            <Breadcrumb>
                                <Breadcrumb.Item href="#" active><Link to={"#"}> Home </Link></Breadcrumb.Item>
                                <Breadcrumb.Item href="#" active><Link to={"#"}> Library </Link></Breadcrumb.Item>
                                <Breadcrumb.Item >Data</Breadcrumb.Item>
                            </Breadcrumb>
                        </Card.Body>
                    </Card>
                </div>

                {/* Dividers */}
                <div className="col-xl-6 col-12">
                    <Card>
                        <Card.Header>
                            <h4 className="card-title">Dividers</h4>
                        </Card.Header>
                        <Card.Body>
                            <nav style={{ "--bs-breadcrumb-divider": `'>'` }} aria-label="breadcrumb">
                                <Breadcrumb>
                                    <Breadcrumb.Item href="#" active><Link to={"#"}> Home </Link></Breadcrumb.Item>
                                    <Breadcrumb.Item>Library</Breadcrumb.Item>
                                </Breadcrumb>
                            </nav>

                            <nav style={{ "--bs-breadcrumb-divider": `'/'` }} aria-label="breadcrumb">
                                <Breadcrumb>
                                    <Breadcrumb.Item href="#" active><Link to={"#"}> Home </Link></Breadcrumb.Item>
                                    <Breadcrumb.Item>Library</Breadcrumb.Item>
                                </Breadcrumb>
                            </nav>

                            <nav style={{ "--bs-breadcrumb-divider": `'~'` }} aria-label="breadcrumb">
                                <Breadcrumb>
                                    <Breadcrumb.Item href="#" active><Link to={"#"}> Home </Link></Breadcrumb.Item>
                                    <Breadcrumb.Item>Library</Breadcrumb.Item>
                                </Breadcrumb>
                            </nav>
                        </Card.Body>
                    </Card>
                </div>

                {/* SVG Divider */}
                <div className="col-xl-6 col-12">
                    <Card>
                        <Card.Header>
                            <h4 className="card-title">Svg Icon</h4>
                        </Card.Header>
                        <Card.Body>
                            <nav
                                style={{
                                    "--bs-breadcrumb-divider": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E")`
                                }}
                                aria-label="breadcrumb"
                            >
                                <Breadcrumb>
                                    <Breadcrumb.Item href="#" active><Link to={"#"}> Home </Link></Breadcrumb.Item>
                                    <Breadcrumb.Item >Library</Breadcrumb.Item>
                                </Breadcrumb>
                            </nav>
                        </Card.Body>
                    </Card>
                </div>

                {/* Without Divider */}
                <div className="col-xl-6 col-12">
                    <Card>
                        <Card.Header>
                            <h4 className="card-title">Without Divider</h4>
                        </Card.Header>
                        <Card.Body>
                            <nav style={{ "--bs-breadcrumb-divider": `''` }} aria-label="breadcrumb">
                                <Breadcrumb>
                                    <Breadcrumb.Item href="#" active><Link to={"#"}> Home </Link></Breadcrumb.Item>
                                    <Breadcrumb.Item >Library</Breadcrumb.Item>
                                </Breadcrumb>
                            </nav>
                        </Card.Body>
                    </Card>
                </div>
            </div>

        </Fragment>
    );
};

export default UiBreadCrumb;
