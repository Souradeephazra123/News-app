import React from "react";

// NewsItem component displays a single news article
const NewsItem = ({ item }) => {
  // Extract the base website URL from the full URL
  const websiteUrl = item.url;
  const website = websiteUrl.split("https://").pop().split("/")[0];

  // Format the published date
  const date = item.publishedAt;
  const formatDate = date.replace("T", "");
  const formatTime = formatDate.replace("Z", "");

  return (
    // The entire news item is wrapped in an anchor tag, which links to the original article
    <a
      href={item.url}
      className="article flex flex-col gap-3  border-2 rounded-md"
    >
      {/* The image of the news item */}
      <div className="article-image">
        <img src={item.urlToImage} alt={item.title} />
      </div>
      {/* The content of the news item */}
      <div className="article-content p-2">
        {/* The source of the news item, including a favicon and the source name */}
        <div className="article-source flex gap-2">
          <img
            src={`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback opts=TYPE,SIZE, URL&url=http://${website}&size-16`}
            alt={item.source.id}
            width={20}
            height={10}
          />
          <span>{item.source.name}</span>
        </div>
        {/* The title of the news item */}
        <div className="article-title">
          <h2 className=" text-xl font-semibold">{item.title}</h2>
        </div>
        {/* The description of the news item */}
        <p className="article-description">{item.description}</p>
        {/* Additional details about the news item, such as the publication date */}
        <div className="article-details">
          <small>
            <b>Published At: {formatTime} </b>
          </small>
        </div>
      </div>
    </a>
  );
};

export default NewsItem;
