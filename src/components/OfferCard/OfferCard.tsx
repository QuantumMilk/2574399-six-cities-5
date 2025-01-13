import React from 'react';
import { Link } from 'react-router-dom';

type OfferCardProps = {
  id: string;
  title: string;
  price: number;
  rating: number;
  type: string;
  isPremium: boolean;
  isFavorite: boolean;
  images: string[];
};

const OfferCard: React.FC<OfferCardProps> = ({
  id,
  title,
  price,
  rating,
  type,
  isPremium,
  isFavorite,
  images,
}) => (
  <article className="cities__card place-card">
    {isPremium && (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    )}
    <div className="cities__image-wrapper place-card__image-wrapper">
      <Link to={`/offer/${id}`}>
        <img
          className="place-card__image"
          src={images[0]}
          width="260"
          height="200"
          alt="Place image"
        />
      </Link>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">€{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button
          className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`}
          type="button"
        >
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{ width: `${rating * 20}%` }}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={`/offer/${id}`}>{title}</Link>
      </h2>
      <p className="place-card__type">{type}</p>
    </div>
  </article>
);

export default OfferCard;
