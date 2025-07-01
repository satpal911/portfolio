import React, { useState } from 'react';

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navItems = ['home', 'about', 'projects', 'contact'];

  const handleMouseEnter=(index)=>{
          setHoveredIndex(index)
  }

  const handleMouseLeave=()=>{
          setHoveredIndex(null)
  }

  return (
    <div className='container-fluid bg-dark fixed-top mb-5'>
      <div className='container bg-dark py-3 d-md-flex justify-content-between align-items-center fs-5 fw-bold'>
        <h1 className='text-secondary border-start border-warning border-5'>Satpal</h1>

        <ul className='items d-flex gap-md-5 gap-4 list-unstyled'>
          {navItems.map((item, index) => (
            <li                       
              key={item}
              onMouseEnter={()=>handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <a className='text-decoration-none' href={`#${item}`}
              style={{
                  color: hoveredIndex === index ? 'yellow' : 'gray',
                  transition: 'color 0.3s ease',
                  cursor: 'pointer',
                }}>
                
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
