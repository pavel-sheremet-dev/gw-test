import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import Button from 'components/reusableComponents/buttons/Button';
import Section from 'components/reusableComponents/section/Section';

import ImagesSet, {
  IImageSetConfig,
} from 'components/reusableComponents/image/Image';

import desk_1x_webp from 'assets/images/blog/blog-desktop.webp';
import desk_2x_webp from 'assets/images/blog/blog-desktop@2x.webp';
import desk_1x from 'assets/images/blog/blog-desktop.jpg';
import desk_2x from 'assets/images/blog/blog-desktop@2x.jpg';
import tablet_1x_webp from 'assets/images/blog/blog-tablet.webp';
import tablet_2x_webp from 'assets/images/blog/blog-tablet@2x.webp';
import tablet_1x from 'assets/images/blog/blog-tablet.jpg';
import tablet_2x from 'assets/images/blog/blog-tablet@2x.jpg';
import mobile_1x_webp from 'assets/images/blog/blog-mobile.webp';
import mobile_2x_webp from 'assets/images/blog/blog-mobile@2x.webp';
import mobile_1x from 'assets/images/blog/blog-mobile.jpg';
import mobile_2x from 'assets/images/blog/blog-mobile@2x.jpg';

const config: IImageSetConfig = {
  alt: 'table, notes, cup of coofee',
  urls: {
    desk_1x_webp,
    desk_2x_webp,
    desk_1x,
    desk_2x,
    tablet_1x_webp,
    tablet_2x_webp,
    tablet_1x,
    tablet_2x,
    mobile_1x_webp,
    mobile_2x_webp,
    mobile_1x,
    mobile_2x,
  },
};

console.log(config);

const BlogPostOne = () => {
  const theme = useContext(ThemeContext);
  return (
    <Section
      as="article"
      backgroundColor={theme.colors.secondaryBrandColor}
      sectionType={'withImage'}
      Image={<ImagesSet config={config} />}
      imagePosition={'right'}
      supTitle="April 16 2020"
      title="Blog Post One"
      description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?"
    >
      <Button
        text={'Read Our Blog'}
        color={'secondary'}
        onClick={() => {}}
        transparent
        type={'button'}
      />
    </Section>
  );
};

export default BlogPostOne;
