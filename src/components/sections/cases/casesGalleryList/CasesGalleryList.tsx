import ImagesSet, {
  IImageSetConfig,
} from 'components/reusableComponents/image/Image';
import { ListStyled } from './CasesGalleryList.styled';

interface IProps {
  imagesConfigArray: IImageSetConfig[];
  getImageIndex(idx: number): void;
}

const CasesGalleryList = ({ imagesConfigArray, getImageIndex }: IProps) => {
  return (
    <ListStyled>
      {imagesConfigArray.map((imageConfig, idx) => (
        <li
          key={idx}
          onClick={() => {
            getImageIndex(idx);
          }}
        >
          <ImagesSet config={imageConfig} />
        </li>
      ))}
    </ListStyled>
  );
};

export default CasesGalleryList;
