
import React, { useState, MouseEventHandler } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BiSearch } from 'react-icons/bi';
import { AppsList } from './AppList';

interface AppItem {
  name: string;
  icon: string;
  navigate?: () => void;
}

type Props = {
  control: any;
  handleAddApp: any;
};

export const MenuList: React.FC<Props> = ({ control, handleAddApp }) => {
  const navigate = useNavigate();
  const [searchApp, setSearchApp] = useState<string>('');

  const handleScrollDown = (e: React.WheelEvent) => {
    if (e.deltaY > 0) {
      control.start('hidden');
    }
  };

  const handleItemClick: MouseEventHandler<HTMLLIElement> = (e) => {
    const index = parseInt(e.currentTarget.getAttribute('data-index') || '0', 10);
    const selectedItem = searchApp.length > 0 ? AppsList.filter((item) => item.name.toLowerCase().startsWith(searchApp))[index] : AppsList[index];

    if (selectedItem && selectedItem.navigate) {
      navigate(selectedItem.navigate);
    }
  };

  const handleDragItem = (icon: string) => {
    control.start('hidden');
    const timer = setTimeout(() => {
      handleAddApp({ i: icon });
      clearTimeout(timer);
    }, 500);
  };

  const renderApps = () => {
    const filteredApps = searchApp.length > 0 ? AppsList.filter((item) => item.name.toLowerCase().startsWith(searchApp)) : AppsList;
  
    return filteredApps.map((item, index) => (
      <li key={item.name + index} data-index={index} onClick={handleItemClick}>
        <motion.img
          src={item.icon}
          alt="icon"
          whileTap={{ scale: 0.8 }}
          onTap={() => handleDragItem(item.icon)}
        />
        <p>{item.name}</p>
      </li>
    ));
  };
  

  return (
    <motion.div
      variants={{
        hidden: { y: 500, opacity: 0.4 },
        visible: { y: 0, opacity: 1 },
      }}
      initial="hidden"
      animate={control}
      onWheel={handleScrollDown}
      transition={{ ease: 'easeInOut', duration: 0.6 }}
      className="MenuList"
    >
      <div className="search">
        <input
          type="text"
          placeholder="Procurar um App"
          value={searchApp}
          onChange={(e) => setSearchApp(e.target.value)}
        />
        <BiSearch />
      </div>

      <Carousel
        showThumbs={false}
        axis="horizontal"
        emulateTouch
        centerMode
        centerSlidePercentage={100}
        showArrows={false}
        className="carousel"
        showStatus={false}
        showIndicators
        preventMovementUntilSwipeScrollTolerance
        renderIndicator={(onClickHandle, isSelected) => (
          <div onClick={onClickHandle} className={`dot ${isSelected ? 'active' : ''}`} />
        )}
      >
      {/* @ts-ignore */}
      <ul className="menu--apps" key="slide1">
        {renderApps()}
      </ul>
      </Carousel>
    </motion.div>
  );
};