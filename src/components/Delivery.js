import React from "react";

const Delivery = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <h3 className="text-orange-500  font-bold text-2xl text-center">
        Quick Delivery App
      </h3>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[550px] mx-auto my-4"
          src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp"
          alt="Delivery person delivering food"
        />
        <div className="flex flex-col justify-center">
          <p className="text-orange-600 font-bold">Get The App</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Elevate your experience with our on-demand service.
          </h1>
          <p>
            Unleash boundless convenience with our on-demand delivery service.
            Experience hassle-free access to your favorite items, whenever you
            desire. Say goodbye to limitations and embrace a world of effortless
            convenience. From food to essentials, we're here to deliver with
            speed and reliability. Sit back, relax, and let us bring convenience
          </p>
          <button className="bg-orange-500 border-orange-500 text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            {" "}
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
