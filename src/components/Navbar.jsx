import React from 'react'
import { Beaker, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#003049] text-white py-4 px-6 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Beaker className="w-6 h-6" />
          <h1 className="text-2xl font-bold">Lipsum Lab</h1>
        </div>
        
        <a
          href="https://github.com/AmAyush18/Lipsum-Lab"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-[#2a9d8f] transition-colors"
        >
          <Github className="w-5 h-5" />
          <span className="hidden sm:inline">View on GitHub</span>
        </a>
      </div>
    </nav>
  )
}

export default Navbar;