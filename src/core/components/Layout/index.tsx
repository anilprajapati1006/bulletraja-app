import { FC, Fragment, ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Fragment>
      {children}
    </Fragment>
  )
}

export default Layout;
