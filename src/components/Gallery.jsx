import React from 'react'
import { ImageViewer } from "react-image-viewer-dv"
import img7 from './images/img7.jpg'
import img8 from './images/img8.png'
import './gallery.css'

const Gallery = () => {
  return (
    <div className="imgViewer">
          <ImageViewer className="imgBox">
            <img src={img7}  alt="Your image" />
            <img src={img8}  alt="Your image" />
            <img src={img7}  alt="Your image" />
            <img src={img7}  alt="Your image" />
            <img src={img8}  alt="Your image" />
            <img src={img7}  alt="Your image" />
          </ImageViewer>
    </div>
  )
}

export default Gallery
// import React from "react";
// import { ProGallery } from "pro-gallery";
// import "pro-gallery/dist/statics/main.css";
// import img1 from './images/img1.png'

// const items = [
//   { // Image Item:
//     itemId: 'id1',
//     mediaUrl: img1,
//     metaData: {
//       type: 'image',
//       height: 300,
//       width: 300,
//       title: 'sample-title',
//       description: 'sample-description',
//       focalPoint: [0, 0],
//     //   link: {
//     //     url: 'http://example.com',
//     //     target: '_blank'
//     //   },
//     }
//   }
// ]

// const container = {
//   width: 200,
//   height: 200,
// }


// const Gallery = () => {
//   return (
//     <div className="gallery">
//       <ProGallery
//         // domId={domId}
//         items={items}
//         // options={options}
//         container={container}
//         scrollingElement={() => document.getElementById("gallery") || window}
//         eventsListener={(eName, eData) => console.log({ eName, eData })}
//       />
//     </div>
//   );
// };

// export default Gallery;
