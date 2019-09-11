import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

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
  const newsMonth = getDatePart(date, "month");
  const newsDate = getDatePart(date, "date");

  return (
    <a href={link} className="dg_date-news-card">
      <p>
        <span className="lat-new-month">{newsMonth}</span>
        <span className="lat-new-day">{newsDate}</span>
      </p>
      <h3 className="headline-light">{headline}</h3>
      <p>{snippet}</p>
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
