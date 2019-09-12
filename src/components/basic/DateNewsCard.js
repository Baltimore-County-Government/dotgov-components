import React from "react";
import PropTypes from "prop-types";
import { parse, format } from "date-fns";

const getDatePart = (date, part = "") => {
  const dateParts = date.split("/");
  const datePart = part.trim().toLowerCase();
  if (datePart === "month") {
    return dateParts && dateParts.length ? dateParts[0] : "";
  }
  if (datePart === "year") {
    return dateParts && dateParts.length ? dateParts[2] : "";
  }
  if (datePart == "date") {
    return dateParts && dateParts.length ? dateParts[1] : "";
  }
  console.error(`Something went wrong getting the date part ${datePart}`);
  return "";
};

const DateNewsCard = props => {
  const { date, headline, snippet, link } = props;
  const newsDate = parse(date, "MM/dd/yyyy", new Date());
  const newsMonth = format(newsDate, "LLL");
  const newsDay = format(newsDate, "d");

  return (
    <a href={link} className="dg_date-news-card">
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
