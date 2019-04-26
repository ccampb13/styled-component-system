import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components/macro'
import GlobalStyle from './Global'
import Header from './layouts/Header'
import { Button, Card } from './elements';

const theme = {
  colors: {
    primary: '#E54B4B',
    secondary: '#DBDE61',
  }
}

const themeTwo = {
  colors: {
    primary: '#524763',
    secondary: '#82D8D8',
  }
}


class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <GlobalStyle />
          <Header />
          <main
            css={`
              background: #fafafa;
              h2 {
                font-size: 100px;
              }
            `}
          >
            <ThemeProvider theme={themeTwo}>
              <Card>
                <h2>Card Heading</h2>
                <Card.Button modifiers="cancel">Say Hello</Card.Button>
                <Card.Button as="a" href="https://google.com">Say Hello</Card.Button>
              </Card>
            </ThemeProvider>
            <Button modifiers="small">Say Hello</Button>
            <Button modifiers="cancel">Say Hello</Button>
            <Button modifiers={['small', 'cancel']}>Don't Say Hello</Button>
          </main>

        </div>
      </ThemeProvider>

    );
  }
}

export default App;
