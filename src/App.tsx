import { GlobalStyle } from 'styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { ThemeTitle } from 'styles/types';

import getTheme from 'styles/themes';

import Layout from 'components/layout/Layout';
import Header from 'components/header/Header';
import Main from 'components/main/Main';
import HeroSection from 'components/main/hero/HeroSection';
import About from 'components/main/about/About';
import CasesSection from 'components/main/cases/CasesSection';
import BlogPostOne from 'components/main/blogPosts/BlogPostOne';
import OurTeamSection from 'components/main/ourTeam/OurTeamSection';
import RequestSection from 'components/main/request/RequestSection';
import Footer from 'components/footer/Footer';
import Meta from 'components/helmet/Meta';

const App = () => {
  return (
    <>
      <Layout>
        <ThemeProvider theme={getTheme(ThemeTitle.defaultTheme)}>
          <GlobalStyle />
          <Meta />
          <Header />
          <Main>
            <HeroSection />
            <About />
            <CasesSection />
            <BlogPostOne />
            <OurTeamSection />
            <RequestSection />
          </Main>
          <Footer />
        </ThemeProvider>
      </Layout>
    </>
  );
};

export default App;
