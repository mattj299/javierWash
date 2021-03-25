import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import * as ROUTES from "./routes/routes";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import ServicesAndPricingPage from "./components/pages/ServicesAndPricingPage";
import ContactsPage from "./components/pages/ContactsPage";
import FAQPage from "./components/pages/FAQPage";
import ScrollToTop from "./components/ScrollToTop";
import ScrollTopButton from "./components/ScrollTopButton";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Navbar />
        <ScrollTopButton />
        <Switch>
          <Route path={ROUTES.HOME} exact component={HomePage} />
          <Route path={ROUTES.ABOUT} component={AboutPage} />
          <Route
            path={ROUTES.SERVICES_AND_PRICING}
            component={ServicesAndPricingPage}
          />
          <Route path={ROUTES.CONTACTS} component={ContactsPage} />
          <Route path={ROUTES.FAQ} component={FAQPage} />
        </Switch>
        <Footer />
      </ScrollToTop>
    </Router>
  );
}

export default App;
