import { GlobalStyle } from 'styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { ThemeTitle } from 'styles/types';

import getTheme from 'styles/themes';

import Layout from 'components/layout/Layout';
import Meta from 'components/helmet/Meta';
import Header from 'components/header/Header';
import Main from 'components/sections/Main';
import HeroSection from 'components/sections/hero/HeroSection';
import About from 'components/sections/about/About';
import CasesSection from 'components/sections/cases/CasesSection';
import BlogPostOne from 'components/sections/blogPosts/BlogPostOne';
import OurTeamSection from 'components/sections/ourTeam/OurTeamSection';
import RequestSection from 'components/sections/request/RequestSection';
import Footer from 'components/footer/Footer';

import { NavId } from 'data/navigation';

const App = () => {
  return (
    <>
      <Layout>
        <ThemeProvider theme={getTheme(ThemeTitle.defaultTheme)}>
          <GlobalStyle />
          <Meta />
          <Header />
          <Main>
            <HeroSection scrollId={NavId.HOME} />
            <About scrollId={NavId.ABOUT} />
            <CasesSection scrollId={NavId.CASES} />
            <BlogPostOne scrollId={NavId.BLOG} />
            <OurTeamSection />
            <RequestSection scrollId={NavId.CONTACT} />
          </Main>
          <Footer />
        </ThemeProvider>
      </Layout>
    </>
  );
};

export default App;
