import { ListStyled } from './SocialList.styled';

import { ReactComponent as LinkedinIcon } from 'assets/images/svg/linkedin.svg';
import { ReactComponent as YoutubeIcon } from 'assets/images/svg/youtube.svg';
import { ReactComponent as TwitterIcon } from 'assets/images/svg/twiter.svg';
import { ReactComponent as FacebookIcon } from 'assets/images/svg/facebook.svg';

export interface ISocialLinks {
  facebook: string;
  twitter: string;
  youtube: string;
  linkedin: string;
}

interface IProps {
  socialsLinks: ISocialLinks;
  className?: string;
}

const SocialList = ({ socialsLinks, className }: IProps) => {
  return (
    <ListStyled className={className}>
      <li>
        <a href={socialsLinks.facebook} className="link">
          <FacebookIcon className="social-icon" />
        </a>
      </li>
      <li>
        <a href={socialsLinks.twitter} className="link">
          <TwitterIcon className="social-icon" />
        </a>
      </li>
      <li>
        <a href={socialsLinks.youtube} className="link">
          <YoutubeIcon className="social-icon" />
        </a>
      </li>
      <li>
        <a href={socialsLinks.linkedin} className="link">
          <LinkedinIcon className="social-icon" />
        </a>
      </li>
    </ListStyled>
  );
};

export default SocialList;
