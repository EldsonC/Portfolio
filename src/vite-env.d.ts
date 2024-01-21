/// <reference types="vite/client" />
declare namespace JSX {
    interface IntrinsicElements {
        'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
            url: string;
        };
    };
}
