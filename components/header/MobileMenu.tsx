'use client';
import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  ProSidebarProvider,
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
} from 'react-pro-sidebar';
import ContactInfo from './ContactInfo';
import Image from 'next/image';

const MobileMenu = () => {
  const router = useRouter();

  return (
    <>
      <div className="pro-header d-flex align-items-center justify-between border-bottom-light">
        <Link href="/">
          <Image src="/img/general/light-logo.jpeg" width="100" height="100" alt="brand" />
        </Link>
        {/* End logo */}

        <div
          className="fix-icon"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i className="icon icon-close"></i>
        </div>
        {/* icon close */}
      </div>
      {/* End pro-header */}

      <ProSidebarProvider>
        <Sidebar width="400" backgroundColor="#fff">
          <Menu>
            <MenuItem
              component={
                <Link
                  href='/account'
                  className={
                    router.pathname === '/companyaccount'
                      ? 'menu-active-link'
                      : ''
                  }
                />
              }
            >
              Account
            </MenuItem>
            {/* End  account Menu */}

          </Menu>
        </Sidebar>
      </ProSidebarProvider>

      <div className="mobile-footer px-20 py-5 border-top-light"></div>
    </>
  );
};

export default MobileMenu;
