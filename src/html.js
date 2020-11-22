import React from 'react';
import PropTypes from 'prop-types';
import config from '../config';

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes} lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          {config.siteMetadata.ogImage ? (
            <meta property="og:image" content={config.siteMetadata.ogImage} />
          ) : null}
          <meta property="twitter:card" content="summary_large_image" />
          {config.siteMetadata.ogImage ? (
            <meta property="twitter:image" content={config.siteMetadata.ogImage} />
          ) : null}
          {config.siteMetadata.favicon ? (
            <link rel="shortcut icon" type="image/svg" href={config.siteMetadata.favicon} />
          ) : null}
          <noscript key="noscript"></noscript>
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          {this.props.postBodyComponents}
          <script
            defer
            dangerouslySetInnerHTML={{
              __html: `
            function navBarClose() {
              document.getElementById("navbar").classList.toggle("responsive");
            }
            document.addEventListener('click',function(e){
              if(e.target && e.target.tagName.toLowerCase() === 'a'){
                navBarClose();
              }
           });
            `,
            }}
          />
        </body>
        <style
            dangerouslySetInnerHTML={{
              __html: `
            .content {
              display: 'none';
              opacity: 0;
              transition: opacity .20s linear;
            }
            .content.show {
              display: 'block';
              opacity: 1;
              transition: opacity .20s linear;
            }
          `,
            }}
          />
          <div
            id="loading"
            dangerouslySetInnerHTML={{
              __html: `<div class="page-loading" style= "
                min-height: 100vh;
                width: 100%;
                display: flex;
                align-items: center;
                font-family: sans-serif;
                justify-content: center;
            ">
            <span class="" style="
                font-size: 2em;
                margin-top: -3em;
                color: #848484;
            ">
              Loading...
              </span>
            </div>`,
            }}
          />

          <div id="content" className="content " />
      </html>
    );
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
