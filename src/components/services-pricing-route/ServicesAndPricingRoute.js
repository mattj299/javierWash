import React, { useEffect, useState } from "react";
import "./ServicesAndPricingRoute.css";
import L from "leaflet";

function ServicesAndPricingRoute() {
  // When under 700px add mobile class to pricing list so it changes css of pricing list and elements under it since it's going to go into flex column
  const [under7H, setUnder7H] = useState(false);

  const changeSetUnder7H = () => {
    if (window.innerWidth <= 700) {
      setUnder7H(true);
    } else {
      setUnder7H(false);
    }
  };

  useEffect(() => {
    changeSetUnder7H();
    window.addEventListener("resize", changeSetUnder7H);

    return () => {
      window.removeEventListener("resize", changeSetUnder7H);
    };
  }, []);

  return (
    <>
      <section className="services-pricing-route">
        <div className="services-pricing-route-wrapper container">
          <h2 className="section-header">Pricing List</h2>
          <div className="header-line"></div>
          <div className="header-line"></div>

          <p className="services-pricing-route-description section-description">
            <strong className="pricing-not-final">
              These prices are not final!
            </strong>
            <br></br>They can go up depending on certain things such as if your
            car is extra dirty or how far you live. They can go down if you've
            been with me for a long time or any other reason for it to go down.
            Here are all the services and pricings we offer for you whenever you
            need it!
          </p>

          <div className={under7H ? "pricing-list mobile" : "pricing-list"}>
            <table>
              <thead>
                <tr>
                  <th className="pricing-list-col-one pricing-list-headers">
                    Service
                  </th>
                  <th className="pricing-list-col-two pricing-list-headers">
                    Description
                  </th>
                  <th className="pricing-list-col-three pricing-list-headers">
                    Pricing
                  </th>
                </tr>
              </thead>
              <tbody>
                <ServicesAndPricingItem
                  service="Outside Wash"
                  description="For those who just need the outside washed: Wash the entire
              exterior by hand with soap and water, clean the windows, and
              clean up the tires."
                  price="$20 / $25"
                />
                <ServicesAndPricingItem
                  service="Inside Wash"
                  description="For those who just need the inside washed: Wash the entire
                interior by hand with towels and vacuum out all of the dirt on
                the floor and in between the seats."
                  price="$20 / $25"
                />
                <ServicesAndPricingItem
                  service="Inside and Out Wash"
                  description=" For those who need the inside and outside washed: Wash the
                entire exterior and interior by hand. Leaves your car clean
                exactly how you want it!"
                  price="$30 / $40"
                />
                <ServicesAndPricingItem
                  service="Detailed Wash"
                  description=" For those who need the car completely detailed: Detailing 
                your car we focus on every little smudge there is that we can take 
                off, we look for all dirt on the seats and take off everything we can!"
                  price="$50 / $60"
                />
                <ServicesAndPricingItem
                  service="Wax by liquid wax and machine"
                  description="For those who just need the outside washed: Wash the entire
              exterior by hand with soap and water, clean the windows, and
              clean up the tires."
                  price="$90 / $100"
                />
                <ServicesAndPricingItem
                  service="Wax by clay"
                  description="First we wash your car from the outside then wax it with clay.
                The difference is with the clay it's by hand and doesn't do
                any damage to the car or the paint."
                  price="$110 / $120"
                />
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="services-pricing-route-map">
        <MapContext />
        <LeafletMap />
      </section>
    </>
  );
}

function LeafletMap() {
  useEffect(() => {
    const map = L.map("map", { scrollWheelZoom: false }).setView(
      [34.2294, -118.7715],
      11
    );
    L.circle([34.2294, -118.7715], {
      color: "red",
      fillColor: "#f03",
      fillOpacity: 0.5,
      radius: 10000,
    }).addTo(map);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    return () => {
      map.remove();
    };
  });
  return <div id="map"></div>;
}

function MapContext() {
  return (
    <div className="map-context">
      <h1 className="section-header">Driving distance</h1>
      <div className="header-line"></div>
      <div className="header-line"></div>

      <p className="section-description">
        I drive to these areas without any extra cost to the car wash. This
        isn't exact it's just to show where I drive for most of my clients. If
        you would like me to wash your car and you're outside these areas please
        contact me and we can figure something out.
      </p>
    </div>
  );
}

function ServicesAndPricingItem({ service, description, price }) {
  return (
    <tr>
      <td className="pricing-list-service">{service}</td>
      <td className="pricing-list-description">{description}</td>
      <td className="pricing-list-price">{price}</td>
    </tr>
  );
}

export default ServicesAndPricingRoute;
