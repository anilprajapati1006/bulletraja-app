import { FC, Fragment, ReactNode } from 'react';
import Header from './Header/Header';
import Footer from './Footer';

type LayoutProps = {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main className='2xl:container mx-auto'>
        {children}
      </main>
      <Footer />
    </Fragment>
  )
}

export default Layout;
