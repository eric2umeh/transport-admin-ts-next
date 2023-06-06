import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const MainMenu = ({ style = '' }) => {
  const router = useRouter();

  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>

        <li className={router.pathname ==='/companyaccount' ? 'current' : ''}>
          <Link href='/account'>Account</Link>
        </li>
        
        <li className={router.pathname === '/history' ? 'current' : ''}>
          {/* <Link href="/history">History</Link> */}
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
