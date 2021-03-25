import React from 'react'

import './noMatch.scss'

export default function NoMatch() {
  return (
    <div>
      <img
        src="https://cdn.dribbble.com/users/2134563/screenshots/6449262/frame_4x.png?compress=1&resize=1000x750"
        alt="not found page img"
        className="not-found__img"
      />
      <p className="not-found__source">
        Img src:{' '}
        <a
          href="https://dribbble.com/huseyingayiran"
          aria-label="image source"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://dribbble.com/huseyingayiran
        </a>
      </p>
    </div>
  )
}
