import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <ul className="flex flex-row items-center justify-center gap-2 pt-5">
        <li>
          <Link href="/">
            <Button>Homepage</Button>
          </Link>
        </li>
        <li>
          <Link href="/create">
            <Button>Create</Button>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
