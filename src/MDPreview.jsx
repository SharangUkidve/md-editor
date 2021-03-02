import marked, { Renderer } from 'marked';
import DOMPurify from 'dompurify';

const MdPreview = ({ text }) => {
  const renderer = new Renderer();
  renderer.link = (href, title, text) => {
    if (title) {
      return `<a target="_blank" href="${href}" rel="noopener noreferrer" title="${title}">${text}</a>`;
    }
    return `<a target="_blank" href="${href}" rel="noopener noreferrer">${text}</a>`;
  };
  renderer.image = (href, title, text) => {
    let ele = `<img src="${href}" width="100%"`;
    if (title) {
      ele = `${ele} title="${title}"`;
    }
    if (text) {
      ele = `${ele} alt="${text}"`;
    }
    return `${ele} />`;
  };
  const html = marked(text, { gfm: true, breaks: true, renderer });
  const sanitizedHTML = DOMPurify.sanitize(html);
  return (
    <div
      className='md-preview'
      id='preview'
      dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
    ></div>
  );
};

export default MdPreview;
