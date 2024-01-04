import { useEffect } from 'react';

// export default class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   handleImageClick = e => {
//     e.stopPropagation();
//   };

//   render() {
//     const url = this.props.url;
//     const onClose = this.props.onClose;

//     return (
//       <div
//         className="Overlay"
//         onClick={() => {
//           onClose();
//         }}
//       >
//         <div className="Modal">
//           <img src={url} alt="" onClick={this.handleImageClick} />
//         </div>
//       </div>
//     );
//   }
// }

export default function Modal({ url, onClose }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return window.removeEventListener('keydown', handleKeyDown);
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  const handleImageClick = e => {
    e.stopPropagation();
  };
  return (
    <div
      className="Overlay"
      onClick={() => {
        onClose();
      }}
    >
      <div className="Modal">
        <img src={url} alt="" onClick={handleImageClick} />
      </div>
    </div>
  );
}
