import { Helmet } from 'react-helmet-async';

import image from 'assets/images/cases/cases5.jpg';
import fav16 from 'assets/favicon/favicon-16x16.png';
import fav32 from 'assets/favicon/favicon-32x32.png';
import appleTouch from 'assets/favicon/apple-touch-icon.png';
import manifest from 'assets/favicon/site.webmanifest';
import safariPinned from 'assets/favicon/safari-pinned-tab.svg';

const Meta = () => {
  return (
    <Helmet>
      <meta charset="utf-8" />
      <meta http-equiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="twitter:description" content={'Your Finance Ledger'} />
      <meta name="twitter:title" content={'Finance ledger'} />
      <meta name="twitter:creator" content={'Psdev'} />
      <meta name="twitter:card" content="summary" />
      <meta
        property="og:image"
        content={`https://finanse-ledger-site.netlify.app${image}`}
      />
      <meta property="og:type" content={'website'} />
      <meta property="og:description" content={'Your Finance Ledger'} />
      <meta property="og:title" content={'Finance ledger'} />
      <meta name="description" content={'Your Finance Ledger'} />
      <meta name="generator" content="React 17.0.2" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />

      <link rel="apple-touch-icon" sizes="180x180" href={appleTouch} />
      <link rel="icon" type="image/png" sizes="32x32" href={fav32} />
      <link rel="icon" type="image/png" sizes="16x16" href={fav16} />
      <link rel="manifest" href={manifest} />
      <link rel="mask-icon" href={safariPinned} color="#5bbad5" />
      <link
        rel="canonical"
        href="https://finanse-ledger-site.netlify.app/"
        hreflang={'en'}
      />
      <link rel="alternate" href="https://finanse-ledger-site.netlify.app/" />
      <title>{'Finance ledger'}</title>
    </Helmet>
  );
};

export default Meta;
