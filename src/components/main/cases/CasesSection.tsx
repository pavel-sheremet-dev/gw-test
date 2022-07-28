import cases1_url_1x_webp from 'assets/images/cases/cases1.webp';
import cases1_url_2x_webp from 'assets/images/cases/cases1@2x.webp';
import cases1_url_1x from 'assets/images/cases/cases1.jpg';
import cases1_url_2x from 'assets/images/cases/cases1@2x.jpg';

import cases2_url_1x_webp from 'assets/images/cases/cases2.webp';
import cases2_url_2x_webp from 'assets/images/cases/cases2@2x.webp';
import cases2_url_1x from 'assets/images/cases/cases2.jpg';
import cases2_url_2x from 'assets/images/cases/cases2@2x.jpg';

import cases3_url_1x_webp from 'assets/images/cases/cases3.webp';
import cases3_url_2x_webp from 'assets/images/cases/cases3@2x.webp';
import cases3_url_1x from 'assets/images/cases/cases3.jpg';
import cases3_url_2x from 'assets/images/cases/cases3@2x.jpg';

import cases4_url_1x_webp from 'assets/images/cases/cases4.webp';
import cases4_url_2x_webp from 'assets/images/cases/cases4@2x.webp';
import cases4_url_1x from 'assets/images/cases/cases4.jpg';
import cases4_url_2x from 'assets/images/cases/cases4@2x.jpg';

import cases5_url_1x_webp from 'assets/images/cases/cases5.webp';
import cases5_url_2x_webp from 'assets/images/cases/cases5@2x.webp';
import cases5_url_1x from 'assets/images/cases/cases5.jpg';
import cases5_url_2x from 'assets/images/cases/cases5@2x.jpg';

import cases7_url_1x_webp from 'assets/images/cases/cases7.webp';
import cases7_url_2x_webp from 'assets/images/cases/cases7@2x.webp';
import cases7_url_1x from 'assets/images/cases/cases7.jpg';
import cases7_url_2x from 'assets/images/cases/cases7@2x.jpg';

import { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import Section from 'components/reusableComponents/section/Section';
import CasesGalleryList from './casesGalleryList/CasesGalleryList';
import {
  IImageSetConfig,
  isIUrlsInterface,
} from 'components/reusableComponents/image/Image';
import { NavId } from 'data/navigation';

const imagesConfig: IImageSetConfig[] = [
  {
    alt: 'closing of the deal',
    urls: {
      url_1x_webp: cases1_url_1x_webp,
      url_2x_webp: cases1_url_2x_webp,
      url_1x: cases1_url_1x,
      url_2x: cases1_url_2x,
    },
  },
  {
    alt: 'planning process',
    urls: {
      url_1x_webp: cases3_url_1x_webp,
      url_2x_webp: cases3_url_2x_webp,
      url_1x: cases3_url_1x,
      url_2x: cases3_url_2x,
    },
  },
  {
    alt: 'agreement with customer',
    urls: {
      url_1x_webp: cases5_url_1x_webp,
      url_2x_webp: cases5_url_2x_webp,
      url_1x: cases5_url_1x,
      url_2x: cases5_url_2x,
    },
  },
  {
    alt: 'arm teambuilding',
    urls: {
      url_1x_webp: cases2_url_1x_webp,
      url_2x_webp: cases2_url_2x_webp,
      url_1x: cases2_url_1x,
      url_2x: cases2_url_2x,
    },
  },
  {
    alt: 'working proccess',
    urls: {
      url_1x_webp: cases7_url_1x_webp,
      url_2x_webp: cases7_url_2x_webp,
      url_1x: cases7_url_1x,
      url_2x: cases7_url_2x,
    },
  },
  {
    alt: 'a view of the skyscrapers from below',
    urls: {
      url_1x_webp: cases4_url_1x_webp,
      url_2x_webp: cases4_url_2x_webp,
      url_1x: cases4_url_1x,
      url_2x: cases4_url_2x,
    },
  },
];

const images: string[] = imagesConfig.map(imageConfige => {
  if (isIUrlsInterface(imageConfige.urls)) {
    return imageConfige.urls.url_2x;
  } else {
    return imageConfige.urls.desk_2x;
  }
});

const CasesSection = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const getImageIndex = (idx: number): void => {
    setImageIndex(idx);
    setIsOpen(true);
  };

  const hidePrevArrow = imageIndex === 0;
  const hideNextArrow = imageIndex === images.length - 1;

  return (
    <>
      <Section
        id={NavId.CASES}
        sectionType={'basic'}
        supTitle="This is what we do"
        title="Business Cases"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!"
      >
        {!!imagesConfig.length && (
          <CasesGalleryList
            imagesConfigArray={imagesConfig}
            getImageIndex={getImageIndex}
          />
        )}
      </Section>
      {isOpen && (
        <Lightbox
          mainSrc={images[imageIndex]}
          nextSrc={images[(imageIndex + 1) % images.length]}
          prevSrc={images[(imageIndex + images.length - 1) % images.length]}
          onAfterOpen={(): void => {
            document.body.style.overflow = 'hidden';
          }}
          onCloseRequest={(): void => {
            setIsOpen(false);
            document.body.style.overflow = '';
          }}
          onMovePrevRequest={() => {
            // if (imageIndex === 0) return;
            setImageIndex(p => (p + images.length - 1) % images.length);
          }}
          onMoveNextRequest={() => {
            // if (imageIndex === images.length - 1) return;
            setImageIndex(p => (p + 1) % images.length);
          }}
          wrapperClassName={'modal-wrapper'}
          prevLabel={hidePrevArrow ? 'First image' : ' Previous image'}
          nextLabel={hideNextArrow ? 'Last image' : 'Next image'}
          enableZoom={false}
          closeLabel={'Close modal'}
          animationOnKeyInput={true}
        />
      )}
    </>
  );
};

export default CasesSection;
