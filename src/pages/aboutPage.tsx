import React from "react";

import Header from "../components/Header";
import {Helmet} from "react-helmet-async";

const AboutPage = () => (
  <div>
    <Helmet>
      <title>about@aechat</title>
    </Helmet>
    <Header title="about" />
  </div>
);
export default AboutPage;
