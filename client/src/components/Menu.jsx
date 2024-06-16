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
import { FaMoon } from 'react-icons/fa';

export default function Menu() {
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);

  const toggleProjectsDropdown = () => {
    setIsProjectsDropdownOpen(!isProjectsDropdownOpen);
  };

  return (
    <MegaMenu>
      <NavbarBrand href="/">
        <img
          alt=""
          src="/src/assets/ram.jpeg"
          className="ml-9 mr-4 h-8 sm:h-9 rounded-full"
        />
        <div className="flex flex-col self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
          <p>Ram Charan Reddy Asodhi</p>
          <span className="text-sm text-slate-500">Full Stack Developer</span>
        </div>
      </NavbarBrand>
      <Button className="w-12 h-10 mx-auto mr-6" color="gray" pill>
        <FaMoon />
      </Button>

      <NavbarToggle />
      <NavbarCollapse className="mx-auto ml-12">
        <NavbarLink href="/">Home</NavbarLink>
        <NavbarLink href="/About">About</NavbarLink>
        <MegaMenuDropdownToggle onClick={toggleProjectsDropdown}>
          Projects
          <HiChevronDown className="ml-2" />
        </MegaMenuDropdownToggle>
        <NavbarLink href="/Resume">Resume</NavbarLink>
        <NavbarLink href="/Contact">Contact</NavbarLink>
      </NavbarCollapse>

      {isProjectsDropdownOpen && (
        <MegaMenuDropdown className="mx-auto">
          <div className="mt-6 border-y border-gray-200 bg-white shadow-sm dark:border-gray-600 dark:bg-gray-800">
            <div className="mx-auto grid max-w-screen-xl px-4 py-5 text-sm text-gray-500 md:grid-cols-2 md:px-6 gap-2">
              <a
                href="#"
                className="rounded-lg border border-gray-300 shadow-lg p-8 text-left"
              >
                <p className="mb-5 max-w-xl font-extrabold leading-tight tracking-tight text-slate-600">
                  Real-Time Chat Application & <br />
                  Security Operations Software for Condominiums
                </p>
                <Button
                  type="button"
                  gradientDuoTone="purpleToBlue"
                  outline
                  className="inline-flex items-center rounded-lg text-center text-xs font-medium text-white hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-700"
                >
                  Take a look
                  <HiArrowRight className="ml-2" />
                </Button>
              </a>
              <a
                href="#"
                className="rounded-lg border border-gray-300 shadow-lg p-8 text-left"
              >
                <p className="mb-8 max-w-xl font-extrabold leading-tight tracking-tight text-slate-600">
                  Visualization of Blockchain Decentralization
                </p>
                <Button
                  type="button"
                  gradientDuoTone="purpleToBlue"
                  outline
                  className="inline-flex items-center mt-2 rounded-lg text-center text-xs font-medium text-white hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-700"
                >
                  Take a look
                  <HiArrowRight className="ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </MegaMenuDropdown>
      )}
    </MegaMenu>
  );
}
