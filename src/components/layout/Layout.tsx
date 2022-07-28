import React, { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';

import { Format, PageFormatContext } from 'context/PageFormatContext';
import { BreakPoints } from 'styles/types';
import { FontLoadContext } from 'context/FontLoadContext';

const FontFaceObserver = require('fontfaceobserver');

const breakPoints = {
  responce: Number.parseInt(BreakPoints.response),
  mobile: Number.parseInt(BreakPoints.mobile),
  tablet: Number.parseInt(BreakPoints.tablet),
  desktop: Number.parseInt(BreakPoints.desktop),
};

interface Iprops {
  children?: React.ReactNode;
}

const Layout = ({ children }: Iprops) => {
  const [pageFormat, setPageFormat] = useState<Format>('response');
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const font = new FontFaceObserver('Open Sans');

    font.load().then(
      function () {
        setFontLoaded(true);
      },
      function () {
        setFontLoaded(true);
      },
    );
  }, []);

  useEffect(() => {
    const onHandleResize = () => {
      const viewport = window.innerWidth;

      if (viewport < breakPoints.mobile && pageFormat !== 'response') {
        setPageFormat('response');
        return;
      }
      if (
        viewport >= breakPoints.mobile &&
        viewport < breakPoints.tablet &&
        pageFormat !== 'mobile'
      ) {
        setPageFormat('mobile');
        return;
      }
      if (
        viewport >= breakPoints.tablet &&
        viewport < breakPoints.desktop &&
        pageFormat !== 'tablet'
      ) {
        setPageFormat('tablet');
        return;
      }
      if (viewport >= breakPoints.desktop && pageFormat !== 'desktop') {
        setPageFormat('desktop');
        return;
      }
    };
    window.addEventListener('resize', onHandleResize);
    onHandleResize();
  }, [pageFormat]);

  return (
    <PageFormatContext.Provider value={pageFormat}>
      <FontLoadContext.Provider value={fontLoaded}>
        <HelmetProvider>{children}</HelmetProvider>
      </FontLoadContext.Provider>
    </PageFormatContext.Provider>
  );
};

export default Layout;
