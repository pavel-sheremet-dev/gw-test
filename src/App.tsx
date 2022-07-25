import { GlobalStyle } from 'styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { ThemeTitle } from 'styles/types';

import getTheme from 'styles/themes';

import Layout from 'components/layout/Layout';
// import Header from "components/header/Header";

// import MainComponent from "components/main/Main";

const App = () => {
  return (
    <>
      <Layout>
        <ThemeProvider theme={getTheme(ThemeTitle.defaultTheme)}>
          <GlobalStyle />
          <div>Hello world</div>
          {/* <Header /> */}
          {/* <MainComponent /> */}
        </ThemeProvider>
      </Layout>
    </>
  );
};

// const App = () => {
//   return (
//     <div>
//       <div>Hello world</div>
//     </div>
//   );
// };

export default App;
