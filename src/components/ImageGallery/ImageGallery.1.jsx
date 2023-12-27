import { useState, useEffect } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem.jsx';
import Button from '../Button/Button.jsx';
import fetchAPI from '../API/fetchAPI.js';
import { Audio } from 'react-loader-spinner';

export default function ImageGallery({ searchTag, onClick }) {
  const [searchResult, setSearchResult] = useState([]);
  const [caunter, setCaunter] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchNow, setSearchNow] = useState('');

  /////////////////////////////////////
  useEffect(() => {
    if (searchTag !== '') {
      setSearchNow(searchTag);
      fetchImg(searchTag);
    }
  }, [searchTag, caunter]);

  const fetchImg = async teg => {
    if (searchNow !== searchTag) {
      setSearchResult([]);
    }

    try {
      const { hits, total } = await fetchAPI(teg, caunter);

      if (total) {
        const uniqueImages = hits.filter(
          newImage =>
            !searchResult.some(
              existingImage => existingImage.id === newImage.id
            )
        );

        // this.setState(prevState => ({
        //   searchResult: [...prevState.searchResult, ...uniqueImages],
        //   total,
        // }));
        setSearchResult([...searchResult, ...uniqueImages]);
      } else {
        alert('Nothing found, try again!');
      }
    } catch (error) {
      throw error;
    } finally {
    }
  };

  const hendleClickOnBtnLoadeMore = () => {
    // this.setState(prevState => ({ caunter: prevState.caunter + 1 }));
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
