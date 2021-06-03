import React from 'react';
import { PageProps } from 'gatsby';

import Desktop from '../Components/Desktop/desktop.component';
import Footer from '../Components/Footer/footer.component';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Desktop />
      <Footer />
    </>
  );
};

export default IndexPage;
