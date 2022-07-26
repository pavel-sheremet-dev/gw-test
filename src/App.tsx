import { GlobalStyle } from 'styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { ThemeTitle } from 'styles/types';

import getTheme from 'styles/themes';

import Layout from 'components/layout/Layout';
import Header from 'components/header/Header';
import Main from 'components/main/Main';
import HeroSection from 'components/main/hero/HeroSection';
import Advantages from 'components/main/advantages/Advantages';
import CasesSection from 'components/main/cases/CasesSection';
import BlogPostOne from 'components/main/blogPosts/BlogPostOne';
import OurTeamSection from 'components/main/ourTeam/OurTeamSection';
import RequestSection from 'components/main/request/RequestSection';
import Footer from 'components/footer/Footer';

// import MainComponent from "components/main/Main";

const App = () => {
  return (
    <>
      <Layout>
        <ThemeProvider theme={getTheme(ThemeTitle.defaultTheme)}>
          <GlobalStyle />
          <Header />
          <Main>
            <HeroSection />
            <Advantages />
            <CasesSection />
            <BlogPostOne />
            <OurTeamSection />
            <RequestSection />
          </Main>
          <Footer />
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
