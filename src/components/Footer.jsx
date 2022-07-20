import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineGlobal } from "react-icons/ai";
export const Footer = () => {
  return (
    <>
      <div class="card text-center mt-5">
        <div class="card-body">
          <div className="mb-5 ">
            <a
              href="https://github.com/Aashwin-Kumar"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-outline  mx-3 mt-3 fs-3"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ashwin-kumar-joy"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-outline  mx-3 mt-3 fs-3"
            >
              <i>
                <AiFillLinkedin />
              </i>
            </a>
            <a
              href="https://www.ashwink.net/"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-outline  mx-3 mt-3 fs-3"
            >
              <i>
                <AiOutlineGlobal />
              </i>
            </a>
          </div>
          <h5 class="fw-normal">
            An exciting place for the whole family to shop.
          </h5>
          <p class="card-text fw-lighter">
            Your shopping should make you glad or else change your shop.
          </p>
        </div>
        <div class="card-footer text-muted fw-lighter">
          10XSHOP 2022, All Rights Not Reserved | Can Ctrl+C{" "}
        </div>
      </div>
    </>
  );
};
