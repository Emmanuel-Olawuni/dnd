"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import SwitchBox from "./Switch";
import Link from "next/link";
const navigation = [
  { name: "Products", href: "#" },
  { name: "Docs", href: "#" },
  { name: "Integrations", href: "#" },
  { name: "Pricing", href: "#" },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className=" h-full w-full overflow-hidden">
      <header className="absolute inset-x-0 top-0">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <p className="  font-nunito font-semibold tracking-widest">TrustFlo</p>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-primary"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className=" hidden lg:flex lg:gap-x-12 px-6">
            <SwitchBox />
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform"
                  color="secondary"
                  name="Jason Hughes"
                  size="sm"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Profile Actions"
                variant="flat"
                className="font-nunito tracking-wide"
              >
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">zoey@example.com</p>
                </DropdownItem>
                <DropdownItem key="dashboard" href="/users/dashboard">
                  Dashboard
                </DropdownItem>
                <DropdownItem key="settings" href="/users/settings">
                  {" "}
                  Settings
                </DropdownItem>

                <DropdownItem key="form" href={`/users/create/1`}>
                  Create Form
                </DropdownItem>
                <DropdownItem key="configurations">Configurations</DropdownItem>
                <DropdownItem key="faq">FAQ</DropdownItem>
                <DropdownItem key="logout" color="danger">
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Trust Flo</span>
               
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                      <Avatar
                        isBordered
                        as="button"
                        className="transition-transform"
                        color="secondary"
                        name="Jason Hughes"
                        size="sm"
                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                      />
                    </DropdownTrigger>
                    <DropdownMenu
                      aria-label="Profile Actions"
                      variant="flat"
                      className="font-nunito tracking-wide"
                    >
                      <DropdownItem key="profile" className="h-14 gap-2">
                        <p className="font-semibold">Signed in as</p>
                        <p className="font-semibold">zoey@example.com</p>
                      </DropdownItem>
                      <DropdownItem key="dashboard" href="/users/dashboard">
                        Dashboard
                      </DropdownItem>
                      <DropdownItem key="settings" href="/users/settings">
                        {" "}
                        Settings
                      </DropdownItem>

                      <DropdownItem key="form" href={`/users/create/1`}>
                        Create Form
                      </DropdownItem>
                      <DropdownItem key="configurations">
                        Configurations
                      </DropdownItem>
                      <DropdownItem key="faq">FAQ</DropdownItem>
                      <DropdownItem key="logout" color="danger">
                        Log Out
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6  lg:px-8 overflow-hidden">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl h-full py-10 sm:py-48 lg:py-32">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6  text-primary ring-1  ring-primary/10 hover:ring-primary/20">
              Let's drag from element and make our forms.{" "}
              <a href="#" className="font-semibold text-muted-foreground">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
             Build <span className=" text-secondary">Forms</span> and  <br />collect data
            </h1>
            <p className="mt-6 text-lg leading-8 text-primary">
            Drag and build your own form and style it, then share to your socials and friend, recieve and view submissions, email notifications and integrate with other apps.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href='/create/test'
                className="rounded-md bg-primary  text-secondary px-3.5 py-2.5 text-sm font-semibold  shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Get started
              </Link>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-primary border-1 border-secondary"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
