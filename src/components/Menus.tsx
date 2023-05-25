import { useState, useEffect } from "react";
import Menu from "../components/Menu";
import { logo } from "../components/TeamMember";
import mail_fill from "../../public/images/image 2.png";
import phone_fill from "../../public/images/image 3.png";
import menu from "../assets/images/menu-line.png";
import logos from "../assets/images/Logo4 1.png";
import Image from "next/image";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import OptionUser from "./OptionUser";

const Menus = () => {
  const [native, setNative] = useState(true);
  const [bold, isBold] = useState(false);
  const [nativeOption, setNativeOption] = useState(true);
  const [bolds, isBolded] = useState(false);
  const Login = useSelector((state: RootState) => state.information);

  const naVigate = () => {
    isBold(true);
  };

  const isBolds = () => {
    isBold(false);
  };
  const notBolds = () => {
    isBold(true);
  };

  return (
    <div className="sticky w-5/6 sm:w-5/6 mx-auto top-5 block rounded-lg z-50">
      <div className="hidden sm:flex sm:w-full sm:mx-auto sm:px-5 bg-black bg-opacity-40">
        <div className="w-5/6 flex gap-5">
          <div className="flex gap-3">
            <Image alt="" width={20} className="h-5" src={mail_fill} />
            <p className="text-white">info@youremail.com</p>
          </div>
          <div className="flex gap-3">
            <Image alt="" width={20} className="h-5" src={phone_fill} />
            <p className="text-white">(480) 555-0103</p>
          </div>
        </div>
        <div className="w-1/6 flex justify-around h-5">
          {logo.map((itm) => (
            <Image alt="" width={20} height={25} src={itm} />
          ))}
        </div>
      </div>

      <div className="w-full mx-auto shadow-xl flex items-center justify-between z-50 bg-white sm:w-full sm:mx-auto rounded-lg">
        <Image
          src={menu}
          alt="this is menu icon"
          className="w-9 pl-2 py-1 hover:animate-spin-slow"
          onClick={() => setNative(!native)}
        />
        <h1
          className="hidden sm:block sm:font-bold hover:underline"
          onClick={() => {}}
        >
          About
        </h1>
        <h1 className="hidden sm:block sm:font-bold hover:underline">
          Features
        </h1>
        {!native && (
          <Menu
            onClose={() => setNative(true)}
            onBold={isBolds}
            notBold={notBolds}
          />
        )}
        <Image alt="" className="w-24 ml-3" src={logos} />
        <h1 className="hidden sm:block sm:font-bold hover:underline">
          Screenshot
        </h1>
        <h1
          className={
            !bold
              ? "hidden sm:block sm:font-bold hover:underline"
              : "hidden sm:block sm:font-bold underline text-xl"
          }
          onClick={naVigate}
        >
          Blog
        </h1>
        {Login.email === "" && Login.password === "" ? (
          <div className=" w-auto font-bold text-white h-full rounded-lg px-1 py-1 my-2 bg-blue ring-inherit transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 mr-3">
            DownLoad
          </div>
        ) : (
          <button
            onClick={() => {
              setNativeOption(!nativeOption);
            }}
            className="relative w-auto font-bold text-white h-full rounded-lg px-1 py-1 my-2 bg-blue ring-inherit transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 mr-3"
          >
            Xin chào {Login.email.toLowerCase()}
          </button>
        )}
        {!nativeOption && (
          <div className="absolute right-28 top-5">
            <OptionUser
              onCloses={() => setNativeOption(true)}
              onBolds={() => {
                setNativeOption(false);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Menus;
