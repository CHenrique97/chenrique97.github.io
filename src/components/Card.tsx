import type React from 'react';
import "./Card.css"
import Go from '/Go.png'
import Astro from '/Astro.jpeg'
import Next from '/Next.png'
interface Props {
  title: string;
  body: string;
  href: string;
  img: string;
}

const images : { [key: string]: string } = {
  Next:Next,
  Go:Go,
  Astro:Astro,
}
const LinkCard: React.FC<Props> = ({ href, title, body, img}) => {
  const imageToShow = images[img] ;

  return (
    <div className="link-card">
      <a href={href}>
        <h2>
          {title}
        </h2>
        <p>{body}</p>
      </a>
      <img src={imageToShow} alt="Logo of the tecnolog" />
    </div>
  );
};

export default LinkCard;
