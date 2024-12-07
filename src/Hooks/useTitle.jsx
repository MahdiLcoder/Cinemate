import { title } from 'process';
import React from 'react'

export default function useTitle({title}) {
    React.useEffect(() => {
        document.title = `${title} | Cinemate`;
      })
  return null;
}
