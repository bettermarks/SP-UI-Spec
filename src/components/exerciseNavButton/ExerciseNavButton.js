import React from "react";

export default ({ exerciseNumber, decoration }) => {
  let content;
  switch (decoration){
    case "correct":
      content = (
        <svg version= "1" xmlns= "http://www.w3.org/2000/svg" width= "48" height= "36" >
          <path d="M36.85 20.75c.15.2.23.43.3.65a3.9 3.9 0 0 1 0 2.05.57.57 0 0 1-1.05.1 3.94 3.94 0 0 1-.45-2c.03-.22.05-.45.15-.7a.6.6 0 0 1 1.05-.1zm2.75-.59a.59.59 0 0 0-.77.31 4.71 4.71 0 0 0 .01 3.03.6.6 0 0 0 .33.32c.3.12.63-.02.75-.32a4.18 4.18 0 0 0 .2-2.27c-.05-.26-.1-.5-.2-.76a.58.58 0 0 0-.32-.3zm-5.62 5.87a.57.57 0 0 0-.9.5c.01.14.03.26.07.38.06.14.13.29.22.4.16.24.36.44.57.63.42.37.91.65 1.41.84 1.02.4 2.07.5 3.1.46a6.74 6.74 0 0 0 3.05-.81c.48-.27.9-.64 1.27-1.06.36-.41.67-.92.66-1.5a.53.53 0 0 0-.89-.38l-.03.03c-.35.33-.53.67-.78 1a4.69 4.69 0 0 1-3.32 1.71 4.6 4.6 0 0 1-3.54-1.31c-.15-.14-.27-.3-.4-.44a1.61 1.61 0 0 0-.2-.2c-.08-.07-.17-.17-.28-.24l-.01-.01zm13.67-1.6a8.58 8.58 0 0 1-.72 3.73 8.55 8.55 0 0 1-2.3 3.03 10.87 10.87 0 0 1-6.98 2.41 9.64 9.64 0 0 1-6.84-2.82l-.09-.1A17.9 17.9 0 0 1 18 36a18 18 0 0 1 0-36 18 18 0 0 1 17.72 15c.4-.15.8-.29 1.22-.4.6-.13 1.23-.38 1.86-.15a.62.62 0 0 1 .15 1.1l-.27.15h.5c.63.03 1.26.1 1.9.24 1.25.27 2.48.81 3.5 1.65a8.97 8.97 0 0 1 3.07 6.83zM29.5 29.04a8.63 8.63 0 0 1-1.2-5.32c.28-2.59 1.7-4.93 3.64-6.54.58-.5 1.21-.93 1.88-1.3A16 16 0 0 0 18 2C9.18 2 2 9.18 2 18s7.18 16 16 16c4.53 0 8.6-1.91 11.5-4.95zm16.77-4.59a7.5 7.5 0 0 0-2.66-5.67 6.8 6.8 0 0 0-2.88-1.3 9.2 9.2 0 0 0-1.62-.19c-.56-.02-1.1.03-1.69-.16h-.02a.62.62 0 0 1-.4-.8.63.63 0 0 1 .11-.19 11.07 11.07 0 0 0-4.17 2.22 8.82 8.82 0 0 0-3.17 5.53 7.56 7.56 0 0 0 2 5.96 8.2 8.2 0 0 0 5.9 2.53c2.21.07 4.5-.67 6.15-2.13a7.15 7.15 0 0 0 2.45-5.8z" />
        </svg>
      );
    break;
    case "remark":
      content = (
        <svg version="1" xmlns="http://www.w3.org/2000/svg" width="48" height="36">
          <path d="M44.58 17.59a8.33 8.33 0 0 0-3.5-1.65 10.73 10.73 0 0 0-2.4-.24l.27-.15a.63.63 0 0 0-.14-1.1h-.01c-.63-.23-1.27.02-1.86.15-.42.11-.82.25-1.22.4A17.99 17.99 0 0 0 0 18a18 18 0 0 0 18 18 17.9 17.9 0 0 0 12.72-5.32l.09.1a9.64 9.64 0 0 0 6.84 2.82c2.5.01 5.01-.8 6.97-2.42a8.53 8.53 0 0 0 2.3-3.02c.54-1.15.75-2.5.73-3.74-.04-2.5-1-5.14-3.07-6.83zM18 34C9.18 34 2 26.82 2 18S9.18 2 18 2a16 16 0 0 1 15.83 13.88c-.66.38-1.3.81-1.88 1.3a10.06 10.06 0 0 0-3.63 6.55 8.63 8.63 0 0 0 1.19 5.32A15.91 15.91 0 0 1 18 34zm27.74-6.36c-.42 1-1.09 1.9-1.91 2.62a8.96 8.96 0 0 1-6.15 2.13 8.2 8.2 0 0 1-5.9-2.53 7.55 7.55 0 0 1-2-5.96 8.82 8.82 0 0 1 3.17-5.53 11.1 11.1 0 0 1 4.17-2.22.61.61 0 0 0 .3.98l.01.01c.6.2 1.14.14 1.69.16.55.01 1.1.07 1.62.18 1.06.22 2.05.65 2.88 1.3a7.53 7.53 0 0 1 2.67 5.68 7.25 7.25 0 0 1-.55 3.18zm-8.89-6.9c.15.22.23.44.3.66a3.9 3.9 0 0 1 0 2.05.57.57 0 0 1-1.05.1 3.94 3.94 0 0 1-.45-2c.03-.22.05-.45.15-.7a.6.6 0 0 1 1.05-.1zm3.06-.27a4.7 4.7 0 0 1 .01 3.03.58.58 0 0 1-1.07 0 4.2 4.2 0 0 1-.21-2.27c.04-.25.09-.5.2-.76a.59.59 0 0 1 1.07 0zm.7 5.95c-.18.24-.37.2-.56.22-.2 0-.39 0-.58-.02-.38-.03-.77-.07-1.15-.02-.38.04-.75.13-1.13.22-.18.04-.37.06-.56.09-.2.03-.38.06-.59-.13a.73.73 0 0 1-.08-.98c.17-.22.36-.22.55-.23h.58c.38.02.76.05 1.14.02.39 0 .76-.11 1.13-.2.2-.06.38-.1.57-.13.19-.02.37-.1.58.13.28.28.3.71.1 1.02z" />
        </svg>
      );
    break;
    case "error":
      content = (
        <svg version="1" xmlns="http://www.w3.org/2000/svg" width="48" height="36">
          <path d="M44.58 17.59a8.33 8.33 0 0 0-3.5-1.65 10.73 10.73 0 0 0-2.4-.24l.27-.15a.63.63 0 0 0-.14-1.1h-.01c-.63-.23-1.27.02-1.86.15-.42.11-.82.25-1.22.4A17.99 17.99 0 0 0 0 18a18 18 0 0 0 18 18 17.9 17.9 0 0 0 12.72-5.32l.09.1a9.64 9.64 0 0 0 6.84 2.82c2.5.01 5.01-.8 6.97-2.42a8.53 8.53 0 0 0 2.3-3.02c.54-1.15.75-2.5.73-3.74-.04-2.5-1-5.14-3.07-6.83zM18 34C9.18 34 2 26.82 2 18S9.18 2 18 2a16 16 0 0 1 15.83 13.88c-.66.38-1.3.81-1.88 1.3a10.06 10.06 0 0 0-3.63 6.55 8.63 8.63 0 0 0 1.19 5.32A15.91 15.91 0 0 1 18 34zm27.74-6.36c-.42 1-1.09 1.9-1.91 2.62a8.96 8.96 0 0 1-6.15 2.13 8.2 8.2 0 0 1-5.9-2.53 7.55 7.55 0 0 1-2-5.96 8.82 8.82 0 0 1 3.17-5.53 11.1 11.1 0 0 1 4.17-2.22.61.61 0 0 0 .3.98l.01.01c.6.2 1.14.14 1.69.16.55.01 1.1.07 1.62.18 1.06.22 2.05.65 2.88 1.3a7.53 7.53 0 0 1 2.67 5.68 7.25 7.25 0 0 1-.55 3.18zm-8.89-6.9c.15.22.23.44.3.66a3.9 3.9 0 0 1 0 2.05.57.57 0 0 1-1.05.1 3.94 3.94 0 0 1-.45-2c.03-.22.05-.45.15-.7a.6.6 0 0 1 1.05-.1zm3.06-.27a4.7 4.7 0 0 1 .01 3.03.58.58 0 0 1-1.07 0 4.2 4.2 0 0 1-.21-2.27c.04-.25.09-.5.2-.76a.59.59 0 0 1 1.07 0zm2.67 8.04c-.11-.07-.21-.16-.3-.23l-.21-.18c-.15-.13-.28-.28-.44-.4a4.59 4.59 0 0 0-5.97-.05c-.32.26-.6.56-.83.9-.23.34-.38.7-.71 1.04l-.03.04a.53.53 0 0 1-.92-.32c-.04-.58.23-1.1.56-1.54a4.6 4.6 0 0 1 1.19-1.14 7.74 7.74 0 0 1 6.11-.76 4.73 4.73 0 0 1 2.08 1.32c.09.11.17.25.24.38.05.13.08.24.1.38a.57.57 0 0 1-.86.57l-.01-.01z" />
        </svg>
      );
    break;
    default:
      decoration = "default";
    break;
  }
  let classNames = [
    "exerciseNavButton",
    decoration
  ];

  return (
    <div className={classNames.join(" ")}>
      {content}
      <div>{exerciseNumber}</div>
    </div>
  );
};
