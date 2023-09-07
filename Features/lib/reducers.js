import { marked } from 'marked';

const assetsBaseUrl = process.env.ASSETS_BASE_URL;

export const imageReducer = (image) => {
  const fields = image.data.attributes;
  console.log('---fields --->', fields);
  return {
    url: `${assetsBaseUrl}${fields.url}`,
    alt: `${fields.caption}`,
    height: fields.height,
    width: fields.width,
    contentType: fields.mime,
  };
};

export const richTextReducer = (rawText) => {
  const parsedRichText = marked.parse(rawText);
  return parsedRichText;
};

export const authorReducer = (owner) => {
  return {
    firstname: `${owner.firstname}`,
    lastname: `${owner.lastname}`,
    username: `${owner.username}`,
    email: `${owner.email}`,
  };
};

export const articleReducer = (raw) => {
  let article = { ...raw.attributes };
  article.id = raw.id;
  article.imageUrl = imageReducer(raw.attributes.imageUrl);
  article.author = authorReducer(raw.attributes.createdBy);
  return article;
};

export const sliderReducer = (raw) => {
  let slider = { ...raw.attributes };
  slider.id = raw.id;
  slider.imageUrl = imageReducer(raw.attributes.cover);
  return slider;
};

export const singleArticleReducer = (raw) => {
  let article = { ...raw.data.attributes };

  article.id = raw.data.id;
  article.imageUrl = imageReducer(raw.data.attributes.imageUrl);
  article.author = authorReducer(raw.data.attributes.createdBy.data.attributes);

  return article;
};
