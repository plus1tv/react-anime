import React, { Component } from 'react';

export class Home extends Component {
  render() {
    return (
      <article>
        <pre><code>npm i react-anime -S</code></pre>
        <p>
          A super easy animation library for React built on top of anime.js.
        </p>
        <p>
          To use it, place an{' '}
          <code>{'<Anime>'}</code>
          {' '}component and what you want to animate inside.
        </p>
        <h2>Features</h2>
        <ul>
          <li>
            Animate nearly all CSS, SVG, & DOM attributes by adding a prop with their name (eg. {<code>opacity</code>}, {<code>backgroundColor</code>}, {<code>translateX</code>}).
          </li>
          <li>
            Nested animations are as easy as putting an Anime component inside another.
          </li>
          <li>Animations can react to changes in {<code>state</code>}.</li>
          <li>Cascading animations through {<code>delay</code>} prop.</li>
          <li>Easily make mounting/unmounting animations.</li>
          <li>
            TypeScript/Flow definitions included.
          </li>
        </ul>
        <h2>Created By: </h2>
        <ul>
          <li>Alain Galvan</li>
          <li>Kennet Postigo</li>
        </ul>
      </article>
    );
  }
}
