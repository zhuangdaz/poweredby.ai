import styled from "styled-components";
import { pulsateMixin } from "../styles/css";
import { mq } from "../styles/mediaqueries";
import { lastWeek, today, yesterday } from "./Timeline";

interface TimestampProps {
  dateKey: string;
  first?: boolean;
}

const formatDateString = (dateString: string) => {
  // will format to: "Oct 1", "Sept 2"
  const shortDate = new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
  }).format(new Date(dateString));

  switch (dateString) {
    case today:
      return `Today, ${shortDate}`;
    case yesterday:
      return `Yesterday, ${shortDate}`;
    case lastWeek:
      return "Past week";
    default:
      // will format to: "October 2022", "September 2022"
      return new Intl.DateTimeFormat("en", {
        year: "numeric",
        month: "long",
      }).format(new Date(dateString));
  }
};

export default function Timestamp({ dateKey, first }: TimestampProps) {
  return (
    <TimestampContainer first={first}>
      <Dot first={first} />
      {formatDateString(dateKey)}
    </TimestampContainer>
  );
}

const TimestampContainer = styled.div<{ first: boolean }>`
  position: relative;
  margin-bottom: 16px;
  padding-left: 42px;
  color: "orange";
  font-weight: 700;

  ${(p) =>
    p.first &&
    `&::after {
    content: "";
    position: absolute;
    left: -1px;
    top: -15px;
    width: 1px;
    height: 12px;
    background: linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.42));
  }`}

  ${mq.desktopSmall} {
    padding-left: 21px;
  }

  ${mq.tablet} {
    font-size: 12px;
  }

  ${mq.phablet} {
    font-size: 12px;
    margin-bottom: 0;
    padding-left: 0;

    &::after {
      display: none;
    }
  }
`;

const Dot = styled.div<{ first: boolean }>`
  width: 7px;
  height: 7px;
  background-color: "orange";
  border-radius: 50%;
  position: absolute;
  left: -4px;
  top: 5px;
  box-shadow: 0 0 0 6px "black";
  ${(p) => p.first && pulsateMixin}

  ${mq.phablet} {
    display: none;
  }
`;