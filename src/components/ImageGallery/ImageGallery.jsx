import { useState, useEffect } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem.jsx';
import Button from '../Button/Button.jsx';
import fetchAPI from '../API/fetchAPI.js';
import { Blocks } from 'react-loader-spinner';
import { nanoid } from 'nanoid';

export default function ImageGallery({ searchTag, onClick }) {
  const [searchResult, setSearchResult] = useState([]);
  const [caunter, setCaunter] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchNow, setSearchNow] = useState('');

  /////////////////////////////////////

  // const fetchImg = () => {
  //   if (searchNow !== searchTag) {
  //     setSearchResult([]);
  //     setSearchNow(searchTag);

  //     return;
  //   }

  //   setLoading(true);
  //   try {
  //     const { hits, total } = fetchAPI(searchTag, caunter);

  //     if (total) {
  //       const uniqueImages = hits.filter(
  //         newImage =>
  //           !searchResult.some(
  //             existingImage => existingImage.id === newImage.id
  //           )
  //       );

  //       setSearchResult([...searchResult, ...uniqueImages]);
  //     } else {
  //       alert('Nothing found, try again!');
  //     }
  //   } catch (error) {
  //     throw error;
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   if (!searchTag) {
  //     return;
  //   }

  //   if (searchNow !== searchTag) {
  //     setSearchResult([]);
  //     setSearchNow(searchTag);
  //   }

  //   api
  //     .fetchAPI(searchTag, caunter)
  //     .then(data => {
  //       const { hits, total } = data;

  //       if (total) {
  //         const uniqueImages = hits.filter(
  //           newImage =>
  //             !searchResult.some(
  //               existingImage => existingImage.id === newImage.id
  //             )
  //         );

  //         setSearchResult([...searchResult, ...uniqueImages]);
  //       }
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, [searchTag, caunter, searchResult]);

  useEffect(() => {
    const fetchImg = async () => {
      if (searchNow !== searchTag) {
        console.log(searchNow);
        console.log(searchTag);
        setSearchResult([]);
        setSearchNow(searchTag);
        setCaunter(1);
        console.log('qweqweqweqweqweqweqweqweqweqweqweqeqweqweqweqweqwe');

        return;
      }
      setLoading(true);
      try {
        const { hits, total } = await fetchAPI(searchTag, caunter);
        console.log(hits);
        if (total) {
          const uniqueImages = hits.map(el => {
            return (el = { ...el, id: nanoid() });
          });
          console.log(uniqueImages);
          setSearchResult(prev => [...prev, ...uniqueImages]);
        } else {
          alert('Nothing found, try again!');
        }
      } catch (error) {
        throw error;
      } finally {
        setSearchNow(searchTag);
        setLoading(false);
      }
    };
    if (searchTag) {
      fetchImg();
    }
  }, [searchTag, caunter, searchNow]);

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
        <div className="thumb">
          <Blocks
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            visible={true}
          />
        </div>
      )}

      {searchResult.length > 0 && !loading && (
        <Button onClick={hendleClickOnBtnLoadeMore} />
      )}
    </>
  );
}
