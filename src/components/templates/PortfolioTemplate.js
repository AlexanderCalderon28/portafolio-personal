import React from 'react';

const PortfolioTemplate = ({ header, children, footer }) => (
  <>
    {header}
    <main>{children}</main>
    {footer}
  </>
);

export default PortfolioTemplate;
