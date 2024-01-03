import { useState } from 'react';
import Searchbar from './Searchbar/Searchbar.jsx';
import ImageGallery from './ImageGallery/ImageGallery.jsx';
import Modal from './Modal/Modal.jsx';

export function App() {
  const [searchTag, setSearchTag] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [modalImg, setModalImg] = useState('');

  /////////////////////////////////////
  const hendleFormSubmit = tag => {
    setSearchTag(tag);
  };

  const handleImageClick = imageUrl => {
    setIsOpen(true);
    setModalImg(imageUrl);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setModalImg('');
  };

  return (
    <div>
      <Searchbar onSubmit={hendleFormSubmit} />
      {<ImageGallery searchTag={searchTag} onClick={handleImageClick} />}

      {isOpen && <Modal url={modalImg} onClose={handleCloseModal} />}
    </div>
  );
}
