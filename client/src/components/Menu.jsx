import React, { useState } from 'react';
import {
  MegaMenu,
  MegaMenuDropdown,
  MegaMenuDropdownToggle,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Button,
} from 'flowbite-react';
import { HiArrowRight, HiChevronDown } from 'react-icons/hi';
import condoSoftware from '/src/assets/condo-software.png';
import decentralize from '/src/assets/decentralize.png';
import { ImGithub } from 'react-icons/im';

export default function Menu() {
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);

  const toggleProjectsDropdown = () => {
    setIsProjectsDropdownOpen(!isProjectsDropdownOpen);
  };

  return (
    <>
      <MegaMenu className="bg-slate-200">
        <NavbarBrand href="/">
          <div className="flex flex-col self-center whitespace-nowrap text-2xl font-semibold dark:text-white ml-4">
            <p>Ram Asodhi</p>
            <span className="text-sm text-slate-600">Toronto, Ontario</span>
          </div>
        </NavbarBrand>

        <NavbarToggle />
        <NavbarCollapse className="mx-auto">
          <NavbarLink href="/" className="text-black mt-2">
            Home
          </NavbarLink>
          <NavbarLink href="/About" className="text-black mt-2">
            About
          </NavbarLink>
          <MegaMenuDropdownToggle
            className="text-black mb-2"
            onClick={toggleProjectsDropdown}
          >
            Projects
            <HiChevronDown className="ml-2" />
          </MegaMenuDropdownToggle>
          <NavbarLink href="/Resume" className="text-black mt-2">
            Resume
          </NavbarLink>
          <NavbarLink href="/Contact">
            <Button
              className="rounded-lg text-black bg-gradient-to-r from-blueToGreenStart to-blueToGreenEnd mb-1"
              outline
            >
              Contact
            </Button>
          </NavbarLink>
        </NavbarCollapse>
      </MegaMenu>

      {isProjectsDropdownOpen && (
        <div className="w-full border-t border-gray-200 bg-slate-200 shadow-sm dark:border-gray-600 dark:bg-gray-800">
          <div className="mx-auto grid max-w-screen-xl px-4 py-5 text-sm text-gray-500 md:grid-cols-2 md:px-6 gap-2">
            {/* Project:1 */}
            <div className="rounded-lg border border-slate-400 bg-slate-300 shadow-lg p-8 text-left flex justify-between">
              <div className="flex flex-col justify-between">
                <p className="mb-5 mr-2 max-w-xl font-semibold leading-tight tracking-tight text-black">
                  Real-Time Chat Application & <br />
                  Security Operations Software for Condominiums
                </p>
                <div className="flex justify-around items-center space-x-4">
                  <a
                    href="https://github.com/charanreddy24/condo-pulse-repo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-black"
                  >
                    <Button
                      type="button"
                      outline
                      className="inline-flex items-center w-32 mt-2 rounded-lg text-center text-xs font-medium text-white bg-gradient-to-r from-blueToGreenStart to-blueToGreenEnd hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-700"
                    >
                      <ImGithub className="text-2xl mr-2" />
                      <span>GitHub</span>
                    </Button>
                  </a>
                  <a
                    href="https://condo-concierge.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      type="button"
                      outline
                      className="inline-flex items-center w-32 mt-2 rounded-lg text-center text-xs font-medium text-white bg-gradient-to-r from-blueToGreenStart to-blueToGreenEnd hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-700"
                    >
                      Domain
                      <HiArrowRight className="ml-2" />
                    </Button>
                  </a>
                </div>
              </div>
              <div>
                <a
                  href={condoSoftware}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={condoSoftware}
                    alt="Condominiums Software"
                    className="shadow-lg shadow-white h-32 w-56"
                  />
                </a>
              </div>
            </div>

            {/* Project:2 */}
            <div className="rounded-lg border border-slate-400 bg-slate-300 shadow-lg p-8 text-left flex justify-between">
              <div className="flex flex-col justify-between">
                <p className="mb-5 max-w-xl font-semibold leading-tight tracking-tight text-black">
                  Visualization of Block-Chain Decentralization
                </p>
                <div className="flex justify-around items-center space-x-4">
                  <a
                    href="https://github.com/sm86/destake/tree/main/react-frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-black"
                  >
                    <Button
                      type="button"
                      outline
                      className="inline-flex items-center w-32 mt-2 rounded-lg text-center text-xs font-medium text-white bg-gradient-to-r from-blueToGreenStart to-blueToGreenEnd hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-700"
                    >
                      <ImGithub className="text-2xl mr-2" />
                      <span>GitHub</span>
                    </Button>
                  </a>
                  <a
                    href="https://decentralize.fyi/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      type="button"
                      outline
                      className="inline-flex items-center w-32 mt-2 rounded-lg text-center text-xs font-medium text-white bg-gradient-to-r from-blueToGreenStart to-blueToGreenEnd hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-700"
                    >
                      Domain
                      <HiArrowRight className="ml-2" />
                    </Button>
                  </a>
                </div>
              </div>
              <div>
                <a
                  href={decentralize}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={decentralize}
                    alt="Decentralization of block chains"
                    className="shadow-lg shadow-white h-32 w-56"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
