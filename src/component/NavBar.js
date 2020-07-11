import React, {useState, useRef, useLayoutEffect, useEffect} from 'react';
import ListItem from './ListItem';
import './NavBar.css';

const NavBar = ({cities}) => {
  const [active, setActive] = useState(cities[0].section);
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(0);
  const listRef = useRef();

  const updateUnderline = () => {
    const parentLeft = listRef.current.clientLeft;
    const el = document.querySelector(`#${active} a`);
    const itemLeft = el.offsetLeft;
    setLeft(itemLeft - parentLeft);
    setWidth(el.offsetWidth);
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", updateUnderline);
    return () => window.removeEventListener("resize", updateUnderline);
  }, [active]);

  useEffect(updateUnderline, [active]);

  return (
    <nav role="navigation">
      <ol className="list-container" ref={listRef}>
        {
          cities.map(city => (
            <ListItem 
              key={city.section}
              label={city.label}
              id={city.section}
              active={city.section === active}
              onClick={() => setActive(city.section)}
            />
          ))
        }
        <div
          className="underbar"
          style={{left: `${left}px`, width: `${width}px`}}
        ></div>
      </ol>
    </nav>
  )
};

export default NavBar;