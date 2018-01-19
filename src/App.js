import React, { Component } from "react";
import { Provider } from "react-redux";
import styled, { ThemeProvider, injectGlobal } from "styled-components";
import { normalize } from "polished";
import theme from "./themes/default";
import store from "./store";
import logo from "./logo.svg";
import Header from "./parts/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Blog from "./parts/Blog";
import About from "./parts/About";
import Contact from "./parts/Contact";

const Container = styled.div`
  font-family: ${props => props.theme.font.family};
`;

injectGlobal`
  ${normalize()}

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router>
            <Container>
              <Header />
              <Route exact path="/" component={Blog} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </Container>
          </Router>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
