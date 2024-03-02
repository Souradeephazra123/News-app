import React from "react";

const NewsItem = ({ item }) => {
  const websiteUrl = item.url;
  const website = websiteUrl.split("https://").pop().split("/")[0];
  const date = item.publishedAt;
  const formatDate = date.replace("T", "");
  const formatTime = formatDate.replace("Z", "");

  return (
    <a
      href={item.url}
      className="article flex flex-col gap-3  border-2 rounded-md"
    >
      <div className="article-image">
        <img src={item.urlToImage} alt={item.title} />
      </div>
      <div className="article-content p-2">
        <div className="article-source flex gap-2">
          <img
            src={`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback opts=TYPE,SIZE, URL&url=http://${website}&size-16`}
            alt={item.source.id}
            width={20}
            height={10}
          />
          <span>{item.source.name}</span>
        </div>
        <div className="article-title">
          <h2 className=" text-xl font-semibold">{item.title}</h2>
        </div>
        <p className="article-description">{item.description}</p>
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
