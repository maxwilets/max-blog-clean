import { useEffect, useState } from 'react';
import { RotateStyles } from './styles';

export default function RoateWords() {
  const [activeIndex, updateActiveIndex] = useState(0);
  const [initialLoad, updateInitialLoad] = useState(true);

  useEffect(() => {
    const interval = setInterval(
      () =>
        activeIndex === 4
          ? updateActiveIndex(0)
          : (updateActiveIndex(activeIndex + 1), updateInitialLoad(false)),
      3000
    );
    return () => clearInterval(interval);
  }, [activeIndex]);
  return (
    <RotateStyles>
      <span className="rotate-words">
        Hi. I'm&nbsp;
        <span
          className={
            // double tertiary to check state to add active
            // fading or no class for animation
            activeIndex === 0
              ? 'active'
              : activeIndex === 1 && !initialLoad
              ? 'fading'
              : null
          }
        >
          {' '}
          a front end engineer
        </span>
        <span
          className={
            // double tertiary to check state to add active
            // fading or no class for animation
            activeIndex === 1
              ? 'active'
              : activeIndex === 2 && !initialLoad
              ? 'fading'
              : null
          }
        >
          {' '}
          a software engineer
        </span>
        <span
          className={
            // double tertiary to check state to add active
            // fading or no class for animation
            activeIndex === 2
              ? 'active'
              : activeIndex === 3 && !initialLoad
              ? 'fading'
              : null
          }
        >
          {' '}
          a coding educator
        </span>
        <span
          className={
            // double tertiary to check state to add active
            // fading or no class for animation
            activeIndex === 3
              ? 'active'
              : activeIndex === 4 && !initialLoad
              ? 'fading'
              : null
          }
        >
          an environment advocate
        </span>
        <span
          className={
            activeIndex === 4
              ? 'active'
              : activeIndex === 0 && !initialLoad
              ? 'fading'
              : null
          }
        >
          {' '}
          a passionate learner
        </span>
      </span>
      <br />
      I live in Chicago, IL
      <br />I love to learn and code.
    </RotateStyles>
  );
}
