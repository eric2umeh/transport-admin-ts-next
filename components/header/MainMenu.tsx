import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface MainMenuProps {
  style?: string;
  isLoggedIn: boolean;
}

const MainMenu: React.FC<MainMenuProps> = ({ style = '', isLoggedIn }) => {
  const router = useRouter();

  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>
        {isLoggedIn && (
          <li className={router.pathname === '/account' ? 'current' : ''}>
            <Link href="/account">Account</Link>
          </li>
        )}

        <li className={router.pathname === '/history' ? 'current' : ''}>
          {/* <Link href="/history">History</Link> */}
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
