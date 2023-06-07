import Image from 'next/image';

const Sidebar = () => {

  return (
    <>
      <div className="sidebar -dashboard" id="vendorSidebarMenu">
        <div className="sidebar__item ">
          <a
            href="/dashboard"
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

        {/* <div className="sidebar__item ">
          <a
            href="/company"
            className="sidebar__button d-flex items-center text-15 lh-1 fw-500"
          >
            <Image
              width={20}
              height={20}
              src='/img/dashboard/sidebar/booking.svg'
              alt="image"
              className="mr-15"
            />
            Company
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
              src='/img/dashboard/sidebar/map.svg'
              alt="image"
              className="mr-15"
            />
            Vehicle
          </a>
        </div>

        <div className="sidebar__item ">
          <a
            href='/user'
            className="sidebar__button d-flex items-center text-15 lh-1 fw-500"
          >
            <Image
              width={20}
              height={20}
              src='/img/dashboard/sidebar/sneakers.svg'
              alt="image"
              className="mr-15"
            />
            User
          </a>
        </div>

        <div className="sidebar__item ">
          <a
            href='/location'
            className="sidebar__button d-flex items-center text-15 lh-1 fw-500"
          >
            <Image
              width={20}
              height={20}
              src='/img/dashboard/sidebar/sneakers.svg'
              alt="image"
              className="mr-15"
            />
            Location
          </a>
        </div> */}
        {/* End accordion__item */}

        <div className="sidebar__item ">
          <a
            href="/"
            className="sidebar__button d-flex items-center text-15 lh-1 fw-500"
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
