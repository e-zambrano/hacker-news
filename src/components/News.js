import { Component } from 'react';

export default class News extends Component {
  render() {
    const { title, author, num_comments, created_at, url } = this.props;
    const createdDateFormatted = new Date(created_at).toLocaleDateString(
      'en-US'
    );

    return (
      <div>
        <a href={url} target="_blank" rel="noreferrer">
          {title}
        </a>
        <div>
          By {author} | {num_comments} comments | {createdDateFormatted}
        </div>
        <hr />
      </div>
    );
  }
}
