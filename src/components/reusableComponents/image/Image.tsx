import { CSSProperties, useContext } from 'react';
import { ThemeContext } from 'styled-components';

export interface IImageSetConfig {
  alt: string;
  urls: IUrls | IFullUrls;
}

interface IFullUrls {
  desk_1x_webp: string;
  desk_2x_webp: string;
  desk_1x: string;
  desk_2x: string;
  tablet_1x_webp: string;
  tablet_2x_webp: string;
  tablet_1x: string;
  tablet_2x: string;
  mobile_1x_webp: string;
  mobile_2x_webp: string;
  mobile_1x: string;
  mobile_2x: string;
}

interface IUrls {
  url_1x_webp: string;
  url_2x_webp: string;
  url_1x: string;
  url_2x: string;
}

export const isIUrlsInterface = (urls: IUrls | IFullUrls): urls is IUrls =>
  'url_1x' in urls ? true : false;

interface IProps {
  config: IImageSetConfig;
  className?: string;
  style?: CSSProperties;
}

const ImagesSet = ({ config, className, style }: IProps) => {
  const theme = useContext(ThemeContext);

  const { urls, alt } = config;

  if (isIUrlsInterface(urls)) {
    return (
      <picture className={className} style={style}>
        <source
          srcSet={`${urls.url_1x_webp} 1x, ${urls.url_2x_webp} 2x`}
          type="image/webp"
        />
        <source
          srcSet={`${urls.url_1x} 1x, ${urls.url_2x} 2x`}
          media={`(min-width: ${theme.breakPoints.desktop})`}
        />

        <img className="picture-image" loading="lazy" src="#" alt={alt} />
      </picture>
    );
  } else {
    return (
      <picture>
        <source
          srcSet={`${urls.desk_1x_webp} 1x, ${urls.desk_2x_webp} 2x`}
          media={`(min-width: ${theme.breakPoints.desktop})`}
          type="image/webp"
        />
        <source
          srcSet={`${urls.desk_1x} 1x, ${urls.desk_2x} 2x`}
          media={`(min-width: ${theme.breakPoints.desktop})`}
        />
        <source
          srcSet={`${urls.tablet_1x_webp} 1x, ${urls.tablet_2x_webp} 2x`}
          media={`(min-width: ${theme.breakPoints.tablet})`}
          type="image/webp"
        />
        <source
          srcSet={`${urls.tablet_1x} 1x, ${urls.tablet_2x} 2x`}
          media={`(min-width: ${theme.breakPoints.tablet})`}
        />
        <source
          srcSet={`${urls.mobile_1x_webp} 1x, ${urls.mobile_2x_webp} 2x`}
          media={`(max-width: ${
            Number.parseInt(theme.breakPoints.tablet) - 1
          }px)`}
          type="image/webp"
        />
        <source
          srcSet={`${urls.mobile_1x} 1x, ${urls.mobile_2x} 2x`}
          media={`(max-width: ${
            Number.parseInt(theme.breakPoints.tablet) - 1
          }px)`}
        />
        <img src="#" alt={alt} />
      </picture>
    );
  }
};

export default ImagesSet;
