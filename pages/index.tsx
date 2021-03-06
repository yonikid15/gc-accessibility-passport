import * as React from "react";
import Home from "../components/Home";
import Layout from "../components/Layout";

const HomePage: React.FunctionComponent = () => {
  return (
    <Layout title="Homepage - GC Accessibility Passport">
      <Home />
    </Layout>
  );
};

export default HomePage;
