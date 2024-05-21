import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Blog from "../blog/Blog"
import Services from "../listing/Listing"
import Contact from "../contact/Contact"
import WhoAmI from "../whoAmI/WhoAmI"

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/listing' component={Services} />
          <Route exact path='/blog' component={Blog} />
          {/* <Route exact path='/pricing' component={Pricing} /> */}
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/who-am-i' component={WhoAmI} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
