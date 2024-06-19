import { Footer } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

export default function FooterComponent() {
  return (
    <Footer
      container
      className="border border-t-8 rounded-lg border-blue-300 bg-slate-200 text-black"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-blueToGreenStart to-blueToGreenEnd rounded-lg">
                Ram Charan Reddy Asodhi
              </span>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
          <div>
            <Footer.Title title="About" />
            <Footer.LinkGroup col>
              <Footer.Link
                href="/About"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ram Asodhi
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Follow me On" />
            <Footer.LinkGroup col>
              <Footer.Link
                href="https://github.com/charanreddy24"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </Footer.Link>
              <Footer.Link
                href="https://www.linkedin.com/in/ram-charan-reddy-2b91b7138"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="/About">Privacy Policy</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright
              href="/About"
              by="Ram Asodhi"
              year={new Date().getFullYear()}
            />

            <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
              <Footer.Icon
                href="https://www.facebook.com/profile.php?id=100010363181785"
                target="_blank"
                rel="noopener noreferrer"
                icon={BsFacebook}
              />
              <Footer.Icon
                href="https://www.instagram.com/_ram_1998_1/"
                target="_blank"
                rel="noopener noreferrer"
                icon={BsInstagram}
              />
              <Footer.Icon
                href="https://x.com/im_charan2409"
                target="_blank"
                rel="noopener noreferrer"
                icon={BsTwitter}
              />
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
}
