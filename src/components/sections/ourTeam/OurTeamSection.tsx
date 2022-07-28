import Section from 'components/reusableComponents/section/Section';
import TeamList from './teamList/TeamList';
import { IImageSetConfig } from 'components/reusableComponents/image/Image';
import { ISocialLinks } from 'components/socialList/SocialList';

import person1_url_1x_webp from 'assets/images/team/person1.webp';
import person1_url_2x_webp from 'assets/images/team/person1@2x.webp';
import person1_url_1x from 'assets/images/team/person1.jpg';
import person1_url_2x from 'assets/images/team/person1@2x.jpg';

import person2_url_1x_webp from 'assets/images/team/person2.webp';
import person2_url_2x_webp from 'assets/images/team/person2@2x.webp';
import person2_url_1x from 'assets/images/team/person2.jpg';
import person2_url_2x from 'assets/images/team/person2@2x.jpg';

import person3_url_1x_webp from 'assets/images/team/person3.webp';
import person3_url_2x_webp from 'assets/images/team/person3@2x.webp';
import person3_url_1x from 'assets/images/team/person3.jpg';
import person3_url_2x from 'assets/images/team/person3@2x.jpg';

export interface IListData {
  id: string;
  name: string;
  position: string;
  imageConfig: IImageSetConfig;
  socialsLinks: ISocialLinks;
}

const socialsLinks: ISocialLinks = {
  facebook: 'https://www.facebook.com/',
  twitter: 'https://twitter.com/',
  youtube: 'https://www.youtube.com/',
  linkedin: 'https://www.linkedin.com/',
};

const listData: IListData[] = [
  {
    id: 'id-1',
    name: 'John Doe',
    position: 'President',
    imageConfig: {
      alt: 'president John Doe',
      urls: {
        url_1x_webp: person1_url_1x_webp,
        url_2x_webp: person1_url_2x_webp,
        url_1x: person1_url_1x,
        url_2x: person1_url_2x,
      },
    },
    socialsLinks,
  },
  {
    id: 'id-2',
    name: 'Jane Doe',
    position: 'Vice President',
    imageConfig: {
      alt: 'president John Doe',
      urls: {
        url_1x_webp: person2_url_1x_webp,
        url_2x_webp: person2_url_2x_webp,
        url_1x: person2_url_1x,
        url_2x: person2_url_2x,
      },
    },
    socialsLinks,
  },
  {
    id: 'id-3',
    name: 'Steve Smith',
    position: 'Marketing Head',
    imageConfig: {
      alt: 'marketing Head Steve Smith',
      urls: {
        url_1x_webp: person3_url_1x_webp,
        url_2x_webp: person3_url_2x_webp,
        url_1x: person3_url_1x,
        url_2x: person3_url_2x,
      },
    },
    socialsLinks,
  },
];

const OurTeamSection = () => {
  return (
    <Section
      sectionType={'basic'}
      supTitle="Who we are"
      title="Our Professional Team"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!"
    >
      <TeamList listData={listData} />
    </Section>
  );
};

export default OurTeamSection;
