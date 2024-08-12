import React from "react";
import AnimatedText from "../../styles/AnimatedText";

const HomePage = () => {
  // get user data from local storage
  return (
    <>
      <div className="min-h-screen flex items-center justify-center m-5 px-5">
        <div className="flex flex-col items-center justify-between w-full">
          <div className="w-1/2">
            <img
              src="../assets/images/1.jpg"
              alt="BM"
              className="w-full h-auto"
            />
          </div>

          <div className="container ">
            <div className="row">
              <div className="col text-center ps-5 ms-5 mt-5 m-5">
                <AnimatedText
                  text="JBS BOUTIQUE"
                  className="!text-6x1 !text-left"
                />
              </div>
            </div>
            <div className="w-full">
              <figcaption className=" ps-5 ms-5 blockquote-footer">
                JbS
              </figcaption>
              <figcaption className="ps-5 ms-5 blockquote-footer">
                
              </figcaption>
              <figcaption className="ps-5 ms-5 blockquote-footer">
                NVIDIA® GeForce RTX™ 3060 Laptop GPU
              </figcaption>
              <figcaption className="ps-5 ms-5 blockquote-footer">
                Up to 11th Gen Intel® Core™ i7-11370H
              </figcaption>
              <figcaption className="ps-5 ms-5 blockquote-footer">
                512GB M.2 NVMe™ PCIe® 3.0 SSD
              </figcaption>
              <figcaption className="ps-5 ms-5 blockquote-footer">
                Up to 32 GB memory
              </figcaption>
              <figcaption className="ps-5 ms-5 blockquote-footer">
                Up to 15.6” FHD 240Hz/3ms 100% sRGB
              </figcaption>
              <figcaption className="ps-5 ms-5 blockquote-footer">
                Thunderbolt 4 Support
              </figcaption>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <footer class="py-3 my-4">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-body-secondary">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-body-secondary">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-body-secondary">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-body-secondary">
                FAQs
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-body-secondary">
                About
              </a>
            </li>
          </ul>
          <p class="text-center text-body-secondary">© 2023 Company, Inc</p>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
