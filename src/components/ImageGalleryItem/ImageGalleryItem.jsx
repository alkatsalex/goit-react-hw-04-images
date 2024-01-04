export default function ImageGalleryItem({
  webformatURL,
  largeImageURL,
  tags,
  onClick,
}) {
  return (
    <li
      className="ImageGalleryItem"
      onClick={() => {
        onClick(largeImageURL);
      }}
    >
      <img className="ImageGalleryItem-image" src={webformatURL} alt="" />
    </li>
  );
}
