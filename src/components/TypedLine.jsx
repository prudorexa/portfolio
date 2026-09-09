import React, { useEffect, useState } from 'react';

const phrases = [
  'React interfaces.',
  'Django APIs.',
  'small working systems.',
  'things that ship.',
];

const TYPE_SPEED = 55;
const DELETE_SPEED = 30;
const HOLD_TIME = 1400;

const TypedLine = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    let timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), TYPE_SPEED);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), HOLD_TIME);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), DELETE_SPEED);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIndex]);

  return (
    <span className="text-amber">
      {text}
      <span className="inline-block w-[2px] h-[0.9em] bg-amber ml-1 align-middle animate-blink" />
    </span>
  );
};

export default TypedLine;
