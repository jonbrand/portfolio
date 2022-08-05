import { useMemo, useEffect, useState } from 'react';

type Response = [
  string,
  boolean
]

export function useTypedText(text: string, shouldRender = true): Response {
  const [state, setState] = useState('');

  const typingConcluded = useMemo(() => {
    return text === state;
  }, [text, state]);
  
  useEffect(() => {
    if (!shouldRender) return;
    const timeout = setTimeout(() => {
      setState(text.slice(0, state.length + 1))
    }, 85)

    return () => clearTimeout(timeout);
  }, [state, shouldRender, text]);

  return [state, typingConcluded];
}