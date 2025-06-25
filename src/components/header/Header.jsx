/* eslint-disable react/prop-types */

import BannerNav from "./BannerNav";
import Navbar from "./Navbar";
import TopBar from "./TopBar";

export default function Header({ className }) {
  return (
    <header className={`font-sans ${className}`}>
      <TopBar />
      <BannerNav />
      {/* <Navbar /> */}
    </header>
  );
}
