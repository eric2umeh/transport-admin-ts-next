import Image from 'next/image';
import { hotelsData } from '../../../data/hotels';

const Properties = () => {
  return (
    <>
      {hotelsData.slice(0, 1).map((item) => (
        <div className="col-12" key={item.id}>
          <div className="row x-gap-20 y-gap-30">
            <div className="col-md-auto">
              <div className="cardImage ratio ratio-1:1 w-200 md:w-1/2 rounded-4">
                <div className="cardImage__content">
                  <Image
                    width={200}
                    height={200}
                    className="rounded-4 col-12 js-lazy"
                    src={item.img}
                    alt="image"
                  />
                </div>
              </div>
            </div>
            {/* End col */}

            <div className="col-md">
              <h3 className="text-18 lh-14 fw-500">{item?.title}</h3>
              <div className="text-14 lh-14 text-light-1">
                Approved on 23/04/2023
              </div>

              <div className="row x-gap-10 y-gap-10 items-center pt-20">
                <div className="col-auto">
                  <p className="text-14">Sienna</p>
                </div>
                <div className="col-auto">
                  <div className="size-3 rounded-full bg-light-1" />
                </div>
                <div className="col-auto">
                  <p className="text-14">BTR-343-WS</p>
                </div>
                <div className="col-auto">
                  <div className="size-3 rounded-full bg-light-1" />
                </div>
                <div className="col-auto">
                  <p className="text-14">Suspended</p>
                </div>
              </div>
              {/* End .row */}

              <div className="row x-gap-10 y-gap-10 pt-20">
                <div className="col-auto">
                  <div className="border-light rounded-100 py-5 px-20 text-14 lh-14">
                    5 seats
                  </div>
                </div>
                <div className="col-auto">
                  <div className="border-light rounded-100 py-5 px-20 text-14 lh-14">
                    AC
                  </div>
                </div>
                <div className="col-auto">
                  <div className="border-light rounded-100 py-5 px-20 text-14 lh-14">
                    Snacks
                  </div>
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* End col */}

            <div className="col-md-auto text-right md:text-left">
              <div className="d-flex flex-column justify-between h-full">
                <div className="row x-gap-10 y-gap-10 justify-end items-center md:justify-start">
                  <div className="col-auto">
                    <span className="fw-500 text-blue-1">
                      {item?.numberOfReviews}
                    </span>{' '}
                    Completed Trips
                    <div className="text-14 lh-14 text-light-1">ID: 3</div>
                  </div>
                  <div className="col-auto">
                    <div className="flex-center text-white fw-600 text-14 size-40 rounded-4 bg-blue-1">
                      {item?.ratings}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End col */}
          </div>
          {/* End .row */}
        </div>
      ))}
    </>
  );
};

export default Properties;
