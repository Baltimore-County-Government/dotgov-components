import React from "react";
import PropTypes from "prop-types";
import { parse, format } from "date-fns";
import classnames from "classnames";

/**
 *  Check to determine if a date is Invalid or not.
 * @param {*} date - Date Object
 */
const isValidDate = date => date instanceof Date && !isNaN(date);

/**
 * Try to get the date based on the MM/dd/yyyy format.
 * If the format is invalid return an error to the console.
 * @param {*} dateStr - should be in the format MM/dd/yyyy see https://date-fns.org/v1.9.0/docs/format
 */
const tryGetDate = dateStr => {
  const parsedDate = parse(dateStr, "MM/dd/yyyy", new Date());

  return isValidDate(parsedDate)
    ? parsedDate
    : console.error(
        "The date should be in the following format 'MM/DD/YYYY'. Example 07/29/1929."
      ) || null;
};

const DateNewsCard = props => {
  const { date, headline, snippet, link, className, ...rest } = props;
  const newsDate = tryGetDate(date);
  if (!newsDate) {
    return "";
  }
  const newsMonth = format(newsDate, "LLL");
  const newsDay = format(newsDate, "d");
  const cardCssClasses = classnames("dg_date-news-card", className);

  return (
    <a href={link} className={cardCssClasses} {...rest}>
      <header className="dg_date-news-card__header">
        <p className="dg_date-news-card__date">
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
