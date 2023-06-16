import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface TokenData {
  exp: number;
}

function decodeToken(token: string): TokenData | null {
  try {
    const payload = token.split('.')[1];
    const decodedData = atob(payload);
    return JSON.parse(decodedData);
  } catch (error) {
    return null;
  }
}

const Sidebar = () => {
  const sidebarData = [
    {
      icon: "/img/dashboard/sidebar/canoe.svg",
      title: "FAQ",
      links: [
        { title: "Company", href: "/faq-company" },
        { title: "User", href: "/faq-user" },
      ],
    },
  ];

  const router = useRouter();

  const handleLogout = () => {
    localStorage.setItem("token", "");
    router.push('/login');
  };

  // Automatically logout token after the expired time (from backend)
  useEffect(() => {
    const isTokenExpired = (): boolean => {
      const token = localStorage.getItem('token');
      if (!token) {
        return true;
      }

      const decodedToken = decodeToken(token);
      if (!decodedToken) {
        return true;
      }

      const tokenExpiration = decodedToken.exp;
      const currentTime = Math.floor(Date.now() / 1000);

      return tokenExpiration < currentTime;
    };

    const interval = setInterval(() => {
      if (isTokenExpired()) {
        handleLogout();
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="sidebar -dashboard" id="vendorSidebarMenu">
        <div className="sidebar__item ">
          <a
            href="/"
            className="sidebar__button d-flex items-center text-15 lh-1 fw-500"
          >
            <Image
              width={20}
              height={20}
              src="/img/dashboard/sidebar/compass.svg"
              alt="image"
              className="mr-15"
            />
            Dashboard
          </a>
        </div>

        <div className="sidebar__item ">
          <a
            href="/branch"
            className="sidebar__button d-flex items-center text-15 lh-1 fw-500"
          >
            <Image
              width={20}
              height={20}
              src='/img/dashboard/sidebar/house.svg'
              alt="image"
              className="mr-15"
            />
            Branch
          </a>
        </div>

        <div className="sidebar__item ">
          <a
            href='/employee'
            className="sidebar__button d-flex items-center text-15 lh-1 fw-500"
          >
            <Image
              width={20}
              height={20}
              src='/img/dashboard/sidebar/sneakers.svg'
              alt="image"
              className="mr-15"
            />
            Employee
          </a>
        </div>

        <div className="sidebar__item ">
          <a
            href='/vehicle'
            className="sidebar__button d-flex items-center text-15 lh-1 fw-500"
          >
            <Image
              width={20}
              height={20}
              src='/img/dashboard/sidebar/taxi.svg'
              alt="image"
              className="mr-15"
            />
            Vehicle
          </a>
        </div>

        <div className="sidebar__item ">
          <a
            href='/trip'
            className="sidebar__button d-flex items-center text-15 lh-1 fw-500"
          >
            <Image
              width={20}
              height={20}
              src='/img/dashboard/sidebar/map.svg'
              alt="image"
              className="mr-15"
            />
            Trip
          </a>
        </div>
        {/* End accordion__item */}

        <div className="sidebar__item ">
          <a
            onClick={handleLogout}
            className="sidebar__button d-flex items-center text-15 lh-1 fw-500 cursor-pointer"
          >
            <Image
              width={20}
              height={20}
              src="/img/dashboard/sidebar/log-out.svg"
              alt="image"
              className="mr-15"
            />
            Logout
          </a>
        </div>
        {/* End accordion__item */}
      </div>
    </>
  );
};

export default Sidebar;
