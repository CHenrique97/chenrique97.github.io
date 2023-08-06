import type React from 'react';
import "./Card.css"
import Go from '/Go.png'
import Astro from '../../public/Astro.jpeg'
import Next from '../../public/Next.png'
interface Props {
  title: string;
  body: string;
  href: string;
  img: string;
}

const images={
  "Next":Next,
  "Go":Go,
  "Astro":Astro,
}
const LinkCard: React.FC<Props> = ({ href, title, body, img}) => {
  return (
    <div className="link-card">
      <a href={href}>
        <h2>
          {title}
          <span>&rarr;</span>
        </h2>
        <p>{body}</p>
      </a>
      <img src={Next} alt="Logo of the tecnolog" />
    </div>
  );
};

export default LinkCard;
