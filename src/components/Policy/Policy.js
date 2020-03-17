import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import {Helmet} from "react-helmet";

export default class Policy extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>Privacy Policy - Sid Sun</title>
                    <meta
                        name="description"
                        content="Sid Sun's portfolio's privacy policy"
                    />
                </Helmet>
                <div className="policy">
                    <div className="tableView text-black-75 py-1">
                        <Container className="align-content-center">
                            <div>
                                <h2 className="py-3 mb-0">
                                    Privacy Policy
                                </h2>
                                <p className="lead">
                                    Your privacy is important to us so we’ve developed a Privacy Policy that covers how
                                    we
                                    collect, use, disclose, transfer, and store your personal information.
                                </p>
                                <h5 className="pt-3">
                                    What information do we collect?
                                </h5>
                                <p className="lead">
                                    We do NOT collect any Personally Identifiable Information (hereafter referred to as PII) like name, email address etc.
                                </p>
                                <h5 className="pt-3">
                                    Do we use cookies?
                                </h5>
                                <p className="lead">
                                    Yes, CloudFlare uses cookies to detect malicious visitors to websites and minimizes blocking legitimate users. It is necessary for supporting Cloudflare's security features.
                                </p>
                                <h5 className="pt-3">
                                    Third Party disclosure
                                </h5>
                                <p className="lead">
                                    We also use CloudFlare for content delivery network services, DDoS mitigation,
                                    Internet security services and as a reverse proxy. <br/> These third-parties have separate
                                    and independent privacy policies. We therefore have no responsibility or liability for the content and
                                    activities of these third-parties. Nonetheless, we seek to protect the integrity of our
                                    site and welcome any feedback about these third parties.
                                </p>
                                <h5 className="pt-3">
                                    Do we disclose any information to outside parties?
                                </h5>
                                <p className="lead">
                                    We do NOT sell, trade, or otherwise transfer to outside parties your PII.
                                </p>
                                <h5 className="pt-3">
                                    California Online Privacy Protection Act
                                </h5>
                                <p className="lead">According to CalOPPA, we agree to the following. <br/>
                                    Users can visit our site anonymously. <br/>Once this privacy policy is
                                    created, we will add a link to it on our home page or as a minimum, on the first
                                    significant
                                    page after entering our website.<br/>Our Privacy Policy link includes the word
                                    'Privacy'
                                    and
                                    can easily be found on the page specified above.
                                </p>
                                <h5 className="pt-3">
                                    Does our site allow third-party behavioral tracking?
                                </h5>
                                <p className="lead">
                                    Yes, CloudFlare tracks users to provide content delivery network services, DDoS mitigation,
                                    Internet security services and collecting analytical web traffic data.
                                </p>
                                <h5 className="pt-3">
                                    Your Consent
                                </h5>
                                <p className="lead">
                                    By using our site, you consent to our website's privacy policy.
                                </p>
                                <h5 className="pt-3">
                                    Changes to our Privacy Policy
                                </h5>
                                <p className="lead">
                                    If we decide to change our privacy policy, we will post those changes on this page,
                                    and
                                    update the Privacy Policy modification date below.
                                    This policy was last modified on 17/03/2020 (DD/MM/YYYY).
                                </p>
                                <h5 className="pt-3">
                                    Contact US
                                </h5>
                                <p className="lead">
                                    If there are any questions, feedback or suggestion regarding this privacy policy and
                                    our
                                    website, you may contact us using the information provided below in the footer.
                                </p>
                                {/*<h5 className="pt-3">*/}
                                {/*  What information do we collect?*/}
                                {/*</h5>*/}
                                {/*<p className="lead">*/}
                                {/*  We only use Personally Identifiable Information (hereafter referred to as PII) through*/}
                                {/*  Google Analytics which uses cookies and IP address (classified as PII under GDPR) to*/}
                                {/*  tracks and report analytical web traffic data. The IP address is anonymized as soon as*/}
                                {/*  web traffic data reaches the Analytics servers and is not exposed.*/}
                                {/*</p>*/}
                            </div>
                        </Container>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
