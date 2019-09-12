import React from "react";
import PropTypes from "prop-types";
import { parse, format } from "date-fns";
import classnames from "classnames";

const DateNewsCard = props => {
  const { date, headline, snippet, link, className, ...rest } = props;
  const newsDate = parse(date, "MM/dd/yyyy", new Date());
  const newsMonth = format(newsDate, "LLL");
  const newsDay = format(newsDate, "d");
  const cardCssClasses = classnames("dg_date-news-card", className);

  return (
    <a href={link} className={cardCssClasses} {...rest}>
      <header class="dg_date-news-card__header">
        <p class="dg_date-news-card__date">
          <span className="dg_date-news-card__month">{newsMonth}</span>
          <span className="dg_date-news-card__day">{newsDay}</span>
        </p>
        <p className="dg_date-news-card__headline">{headline}</p>
      </header>
      <p className="dg_date-news-card__snippet">{snippet}</p>
    </a>
  );
};

DateNewsCard.propTypes = {
  /** Url to the news story */
  link: PropTypes.string.isRequired,
  /** Date string for the news story, format is "MM/DD/YYYY". Example "07/29/2019"  */
  date: PropTypes.string.isRequired,
  /** News Headline */
  headline: PropTypes.string.isRequired,
  /** A brief snippet to describe teh news story */
  snippet: PropTypes.string.isRequired
};

export default DateNewsCard;
