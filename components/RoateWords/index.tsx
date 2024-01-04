import React, { JSXElementConstructor, useEffect, useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { RotateStyles } from './styles';

export const RoateWords = ({ headerWords }: { headerWords: string[] }): any => {
  const [activeIndex, updateActiveIndex] = useState<number>(0);
  const [initialLoad, updateInitialLoad] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(
      () =>
        activeIndex === headerWords.length - 1
          ? updateActiveIndex(0)
          : (updateActiveIndex(activeIndex + 1), updateInitialLoad(false)),
      2500
    );
    return () => clearInterval(interval);
  }, [activeIndex, headerWords]);
  return (
    <>
      {' '}
      <RotateStyles>
        <span className="rotate-words">
          Hi. I'm&nbsp;
          {headerWords.map((word, index) => {
            const nextIndex =
              index + 1 <= headerWords.length - 1 ? index + 1 : 0;
            return (
              <span
                className={
                  // double tertiary to check state to add active
                  // fading or no class for animation
                  // eslint-disable-next-line no-nested-ternary
                  activeIndex === index
                    ? 'active'
                    : activeIndex === nextIndex && !initialLoad
                    ? 'fading'
                    : ''
                }
              >
                {word}
              </span>
            );
          })}
        </span>
        <br />
        I live in Chicago, IL
        <br />I love to learn and code.
      </RotateStyles>
    </>
  );
};
