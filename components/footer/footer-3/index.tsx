import ContactInfo from './ContactInfo';
import Copyright from './Copyright';
import Image from 'next/image';

const index = () => {
  return (
    <footer className="footer -type-2 bg-light-2">
      <div className="container">
        <div className="pt-10 pb-10">
          <div className="row y-gap-40 justify-between xl:justify-start">
            <div className="col-xl-4 col-lg-6">
              <Image
                src="/img/general/light-logo.jpeg"
                width="100"
                height="100"
                alt="image"
              />
              <div className="row y-gap-30 justify-between pt-30">
                <ContactInfo />
              </div>
              {/* End .row */}
            </div>
            {/* End .col */}

            <div className="col-lg-6">
              <div className="row y-gap-30">
                <div className="col-12">
                  <h5 className="text-16 fw-500 mb-10">
                    Follow us on social media
                  </h5>
                </div>
                {/* End .col */}
              </div>
              {/* End .row */}
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End footer top */}

        <div className="py-20 border-top-light">
          <Copyright />
        </div>
        {/* End footer-copyright */}
      </div>
      {/* End container */}
    </footer>
  );
};

export default index;
