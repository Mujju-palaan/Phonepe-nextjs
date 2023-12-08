'use client'
import React from "react";
import Link from "next/link";
import { useState } from "react";

const HomePage = () => {
  const [openMenu, setOpenMenu] = useState(null);
  return (
    <div>
      <Link
        href="/phonepe"
        onClick={() => setOpenMenu(false)}
      >
        <button>Phonepe Production</button>
        
      </Link>

      <Link
        href="/phonepetest"
        onClick={() => setOpenMenu(false)}
      >
        <button>Phonepe Test</button>
        
      </Link>
      
    </div>
  );
};

export default HomePage;
