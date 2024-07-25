import Image from "next/image";
import Login from "./components/Login";
import CreateAcc from "./components/CreateAcc";
import NavBar from "./components/NavBar";
import Link from "next/link";
import LinkNav from "./components/LinkNav";
import Profile from "./components/Profile";
import Preview from "./components/Preview";
import EmptyLink from "./components/EmptyLink";

export default function Home() {
  return (
    <main>
      <LinkNav />
    </main>
  );
}
