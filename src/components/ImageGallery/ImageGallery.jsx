import { useState, useEffect, useCallback } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem.jsx';
import Button from '../Button/Button.jsx';
import fetchAPI from '../API/fetchAPI.js';
import { Audio } from 'react-loader-spinner';

export default function ImageGallery({ searchTag, onClick }) {
  const [searchResult, setSearchResult] = useState([1, 2, 3]);
  const [caunter, setCaunter] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchNow, setSearchNow] = useState('');

  /////////////////////////////////////
  const fetchImg = useCallback(async () => {
    if (searchNow !== searchTag) {
      setSearchResult([]);
    }

    setLoading(true);
    try {
      const { hits, total } = await fetchAPI(searchTag, caunter);
      setSearchResult([1, 2, 3]);
      if (total) {
        const uniqueImages = hits.filter(
          newImage =>
            !searchResult.some(
              existingImage => existingImage.id === newImage.id
            )
        );

        setSearchResult([...searchResult, ...uniqueImages]);
      } else {
        alert('Nothing found, try again!');
      }
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
      setSearchNow(searchTag);
      console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    }
  }, [searchNow, searchTag, caunter, searchResult]);

  useEffect(() => {
    fetchImg();
  }, [searchTag, caunter, fetchImg, searchResult]);

  const hendleClickOnBtnLoadeMore = () => {
    setCaunter(caunter + 1);
  };

  return (
    <>
      <ul className="ImageGallery">
        {searchResult &&
          searchResult.map(({ id, webformatURL, largeImageURL }) => {
            return (
              <ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                onClick={onClick}
                largeImageURL={largeImageURL}
              />
            );
          })}
      </ul>
      {loading && (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="blue"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      )}

      {searchResult.length > 0 && !loading && (
        <Button onClick={hendleClickOnBtnLoadeMore} />
      )}
    </>
  );
}
