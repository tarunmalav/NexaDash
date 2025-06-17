import { Fragment } from "react";
import { Link } from 'react-router-dom';
import PageTitle from "../../layouts/PageTitle";
import { Row, Col, Card } from "react-bootstrap";

const UiTypography = () => {
  return (
    <Fragment>
      <PageTitle activeMenu="Typography" pageContent="Typography" motherMenu="Home" />
      <div className="container">
        <Row>
          <Col xs={12}>
            <Card>
              <Card.Body>
                <Row className="justify-content-between">
                  <Col xl={4} xxl={6} className="mb-3">
                    <div className="mb-4">
                      <h4 className="card-title card-intro-title">Typography</h4>
                      <h6>  Use tags <mark><code>h1 to h6</code></mark> for get desire heading. </h6>
                    </div>
                    <div className="card-content">
                      <h1>h1. Bootstrap heading</h1>
                      <h2>h2. Bootstrap heading</h2>
                      <h3>h3. Bootstrap heading</h3>
                      <h4>h4. Bootstrap heading</h4>
                      <h5>h5. Bootstrap heading</h5>
                      <h6>h6. Bootstrap heading</h6>
                    </div>
                  </Col>
                  <Col xl={4} xxl={6}>
                    <div className="mb-4">
                      <h4 className="card-title card-intro-title">
                        Paragraph with justify
                      </h4>
                      <p>
                        Use tags <mark><code>text-justify</code></mark> for get desire
                        paragraph.
                      </p>
                    </div>
                    <div className="card-content">
                      <p className="text-justify">
                        Ambitioni dedisse scripsisse iudicaretur. Cras mattis
                        iudicium purus sit amet fermentum. Donec sed odio operae,
                        eu vulputate felis rhoncus. Praeterea iter est quasdam res
                        quas ex communi. At nos hinc posthac, sitientis piros
                        Afros. Petierunt uti sibi concilium totius Galliae in diem
                        certam indicere. Cras mattis iudicium purus sit amet
                        fermentum.
                      </p>
                    </div>
                  </Col>
                  <Col xl={4} xxl={12}>
                    <div className="mb-4">
                      <h4 className="card-title card-intro-title">
                        Alignment text
                      </h4>
                      <p>
                        Use tags <mark><code>text-start, text-center, text-end</code></mark>{" "}
                        for get desire text.
                      </p>
                    </div>
                    <div className="card-content">
                      <p className="text-start">
                        Left aligned text on all viewport sizes.
                      </p>
                      <p className="text-center">
                        Center aligned text on all viewport sizes.
                      </p>
                      <p className="text-end">
                        Right aligned text on all viewport sizes.
                      </p>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <hr />
                    <br />
                  </Col>
                  <Col lg={6}>
                    <div className="mb-4">
                      <h4 className="card-title card-intro-title">
                        View port text
                      </h4>
                      <p>
                        Use tags{" "}
                        <mark><code>text-sm-start, text-md-start, text-lg-start, text-xl-start</code></mark>{" "}
                        for get desire text.
                      </p>
                    </div>
                    <div className="card-content">
                      <p className="text-sm-start">
                        Left aligned text on viewports sized SM (small) or wider.
                      </p>
                      <p className="text-md-start">
                        Left aligned text on viewports sized MD (medium) or wider.
                      </p>
                      <p className="text-lg-start">
                        Left aligned text on viewports sized LG (large) or wider.
                      </p>
                      <p className="text-xl-start">
                        Left aligned text on viewports sized XL (extra-large) or
                        wider.
                      </p>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="mb-4">
                      <h4 className="card-title card-intro-title">
                        Font weight and italics
                      </h4>
                      <p>
                        Use tags{" "}
                        <mark><code> fw-normal, fw-italic</code></mark> for
                        get desire text.
                      </p>
                    </div>
                    <div className="card-content">
                      <p className="font-w800">Bold text.</p>
                      <p className="font-weight-normal">Normal weight text.</p>
                      <p className="fst-italic">Italic text.</p>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <hr />
                    <br />
                  </Col>
                  <Col lg={4}>
                    <div className="mb-4">
                      <h4 className="card-title card-intro-title">Text colors</h4>
                      <p>Use tags below class for get desire text.</p>
                    </div>
                    <div className="card-content">
                      <p className="text-muted">
                        This is an example of muted text. Add class{" "}
                        <code>text-muted</code>
                      </p>
                      <p className="text-primary">
                        This is an example of primary text. Add class{" "}
                        <code>text-primary</code>
                      </p>
                      <p className="text-success">
                        This is an example of success text. Add class{" "}
                        <code>text-success</code>
                      </p>
                      <p className="text-info">
                        This is an example of info text. Add class{" "}
                        <code>text-info</code>
                      </p>
                      <p className="text-warning">
                        This is an example of warning text. Add class{" "}
                        <code>text-warning</code>
                      </p>
                      <p className="text-danger">
                        This is an example of danger text. Add class{" "}
                        <code>text-danger</code>
                      </p>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className="mb-4">
                      <h4 className="card-title card-intro-title">Address</h4>
                      <p>
                        Use <mark><code>address</code></mark> for get desire address.
                      </p>
                    </div>
                    <div className="card-content">
                      <address>
                        <strong>Twitter, Inc.</strong>
                        <br />
                        795 Folsom Ave, Suite 600
                        <br />
                        San Francisco, CA 94107
                        <br />
                        <abbr title="Phone">P:</abbr>(123) 456-7890
                      </address>
                      <address>
                        <strong>George Belly</strong>
                        <br />
                        <Link to={"#"}>info@example.com</Link>
                      </address>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className="mb-4">
                      <h4 className="card-title card-intro-title">Blockquotes</h4>
                      <p>
                        Use <mark><code>blockquote</code></mark> for get desire address.
                      </p>
                    </div>
                    <blockquote>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat a ante.
                    </blockquote>
                    <blockquote>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </p>
                      <small>
                        {" "}
                        - Someone famous in{" "}
                        <cite title="Source Title">Source Title</cite>
                      </small>
                    </blockquote>
                  </Col>
                  <Col xs={12}>
                    <hr />
                    <br />
                  </Col>
                  <Col lg={4} className=" mb-3">
                    <div className="mb-4">
                      <h4 className="card-title card-intro-title mb-1">
                        Ol Listing
                      </h4>
                      <p>
                        Use tags <mark><code>ol {">"} li</code></mark> for get desire ol list.
                      </p>
                    </div>
                    <ol className="order-list ">
                      <li>Lorem ipsum dolor sit amet</li>
                      <li>Consectetur adipiscing elit</li>
                      <li>Integer molestie lorem at massa</li>
                    </ol>
                  </Col>
                  <Col lg={4} className=" mb-3">
                    <div className="mb-4">
                      <h4 className="card-title card-intro-title mb-1">
                        Ul Listing
                      </h4>
                      <p>
                        Use tags <mark><code>ul {">"} li</code></mark> for get desire ol list.
                      </p>
                    </div>
                    <ul className="unorder-list">
                      <li>Lorem ipsum dolor sit amet</li>
                      <li>Consectetur adipiscing elit</li>
                      <li>Integer molestie lorem at massa</li>
                    </ul>
                  </Col>
                  <Col lg={4} className=" mb-3">
                    <div className="mb-4">
                      <h4 className="card-title card-intro-title mb-1">
                        Description Text
                      </h4>
                      <p>
                        Use tags <mark><code>dl {">"} dt</code></mark> for get desire ol list.
                      </p>
                    </div>
                    <dl>
                      <dt>Standard Description List</dt>
                      <dd>Description Text</dd>
                      <dt>Description List Title</dt>
                      <dd>Description List Text</dd>
                    </dl>
                  </Col>
                  <Col xs={12}>
                    <hr />
                    <br />
                  </Col>
                  <Col lg={4} className=" mb-3">
                    <div className="mb-4">
                      <h4 className="card-title card-intro-title mb-1">
                        Fancy Listing 1
                      </h4>
                      <p>
                        Use class <mark><code>list-icons</code></mark> to ul for get desire ol
                        list.
                      </p>
                    </div>
                    <ul className="list-icons">
                      <li>
                        <span className="align-middle me-2">
                          <i className="ti-angle-right" />
                        </span>{" "}
                        Lorem ipsum dolor sit amet
                      </li>
                      <li>
                        <span className="align-middle me-2">
                          <i className="ti-angle-right" />
                        </span>{" "}
                        Consectetur adipiscing elit
                      </li>
                      <li>
                        <span className="align-middle me-2">
                          <i className="ti-angle-right" />
                        </span>{" "}
                        Integer molestie lorem at massa
                      </li>
                    </ul>
                  </Col>
                  <Col lg={4} className=" mb-3">
                    <div className="mb-4">
                      <h4 className="card-title card-intro-title mb-1">
                        Fancy Listing with href
                      </h4>
                      <p>
                        Use class <mark><code>list-icons</code></mark> to ul for get desire ol
                        list.
                      </p>
                    </div>
                    <ul className="list-icons">
                      <li>
                        <Link to={"#"}>
                          <span className="align-middle me-2">
                            <i className="fa fa-check text-info" />
                          </span>{" "}
                          Lorem ipsum dolor sit amet
                        </Link>
                      </li>
                      <li>
                        <Link to={"#"}>
                          <span className="align-middle me-2">
                            <i className="fa fa-check text-info" />
                          </span>
                          Consectetur adipiscing elit
                        </Link>
                      </li>
                      <li>
                        <Link to={"#"}>
                          <span className="align-middle me-2">
                            <i className="fa fa-check text-info" />
                          </span>
                          Integer molestie lorem at massa
                        </Link>
                      </li>
                    </ul>
                  </Col>
                  <Col lg={4} className=" mb-3">
                    <div className="mb-4">
                      <h4 className="card-title card-intro-title mb-1">
                        Fancy Listing with href
                      </h4>
                      <p>
                        Use class <mark><code>list-icons</code></mark> to ul for get desire ol
                        list.
                      </p>
                    </div>
                    <ul className="list-icons">
                      <li>
                        <Link to={"#"}>
                          <span className="align-middle me-2">
                            <i className="fa fa-chevron-right" />
                          </span>{" "}
                          Lorem ipsum dolor sit amet
                        </Link>
                      </li>
                      <li>
                        <Link to={"#"}>
                          <span className="align-middle me-2">
                            <i className="fa fa-chevron-right" />
                          </span>
                          Consectetur adipiscing elit
                        </Link>
                      </li>
                      <li>
                        <Link to={"#"}>
                          <span className="align-middle me-2">
                            <i className="fa fa-chevron-right" />
                          </span>
                          Integer molestie lorem at massa
                        </Link>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default UiTypography;
