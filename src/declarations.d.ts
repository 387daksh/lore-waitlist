declare global {
  namespace JSX {
    interface IntrinsicElements {
      'form-widget': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { ucid: string };
    }
  }
}

export {};