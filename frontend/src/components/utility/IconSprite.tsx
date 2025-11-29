import { memo } from "react";

export const CloseIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
    </svg>
);

export const ChevronLeft = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="m15 18-6-6 6-6" />
    </svg>
);

export const ChevronRight = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="m9 18 6-6-6-6" />
    </svg>
);

export const IconSprite = memo(() => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ "display": "none" }}
    >
        <defs>
            <symbol
                xmlns="http://www.w3.org/2000/svg"
                id="facebook"
                viewBox="0 0 24 24"
            >
                <path
                    fill="currentColor"
                    d="M15.12 5.32H17V2.14A26.11 26.11 0 0 0 14.26 2c-2.72 0-4.58 1.66-4.58 4.7v2.62H6.61v3.56h3.07V22h3.68v-9.12h3.06l.46-3.56h-3.52V7.05c0-1.05.28-1.73 1.76-1.73Z"
                />
            </symbol>

            <symbol
                xmlns="http://www.w3.org/2000/svg"
                id="tiktok"
                viewBox="0 0 24 24"
            >
                <path
                    fill="currentColor"
                    d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743a2.895 2.895 0 0 1 2.016-4.928c.297 0 .582.056.848.156V9.154a6.56 6.56 0 0 0-5.592 7.122a6.555 6.555 0 0 0 11.537 4.338A6.505 6.505 0 0 0 18.864 16v-4.81a8.147 8.147 0 0 0 4.77 1.52v-3.44a4.831 4.831 0 0 1-4.045-2.584z"
                />
            </symbol>

            <symbol
                xmlns="http://www.w3.org/2000/svg"
                id="menu"
                viewBox="0 0 24 24"
            >
                <path
                    fill="currentColor"
                    d="M2 6a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m0 6.032a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m1 5.033a1 1 0 1 0 0 2h18a1 1 0 0 0 0-2z"
                />
            </symbol>

            <symbol
                xmlns="http://www.w3.org/2000/svg"
                id="link"
                viewBox="0 0 24 24"
            >
                <path
                    fill="currentColor"
                    d="M12 19a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm5 0a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm0-4a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm-5 0a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm7-12h-1V2a1 1 0 0 0-2 0v1H8V2a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3Zm1 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9h16Zm0-11H4V6a1 1 0 0 1 1-1h1v1a1 1 0 0 0 2 0V5h8v1a1 1 0 0 0 2 0V5h1a1 1 0 0 1 1 1ZM7 15a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm0 4a1 1 0 1 0-1-1a1 1 0 0 0 1 1Z"
                />
            </symbol>

            <symbol
                xmlns="http://www.w3.org/2000/svg"
                id="arrow-right"
                viewBox="0 0 24 24"
            >
                <path
                    fill="currentColor"
                    d="M17.92 11.62a1 1 0 0 0-.21-.33l-5-5a1 1 0 0 0-1.42 1.42l3.3 3.29H7a1 1 0 0 0 0 2h7.59l-3.3 3.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l5-5a1 1 0 0 0 .21-.33a1 1 0 0 0 0-.76Z"
                />
            </symbol>

            <symbol
                xmlns="http://www.w3.org/2000/svg"
                id="category"
                viewBox="0 0 24 24"
            >
                <path
                    fill="currentColor"
                    d="M19 5.5h-6.28l-.32-1a3 3 0 0 0-2.84-2H5a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-10a3 3 0 0 0-3-3Zm1 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-13a1 1 0 0 1 1-1h4.56a1 1 0 0 1 .95.68l.54 1.64a1 1 0 0 0 .95.68h7a1 1 0 0 1 1 1Z"
                />
            </symbol>

            <symbol
                xmlns="http://www.w3.org/2000/svg"
                id="check"
                viewBox="0 0 24 24"
            >
                <path
                    fill="currentColor"
                    d="M18.71 7.21a1 1 0 0 0-1.42 0l-7.45 7.46l-3.13-3.14A1 1 0 1 0 5.29 13l3.84 3.84a1 1 0 0 0 1.42 0l8.16-8.16a1 1 0 0 0 0-1.47Z"
                />
            </symbol>

            <symbol
                xmlns="http://www.w3.org/2000/svg"
                id="close"
                viewBox="0 0 15 15"
            >
                <path
                    fill="currentColor"
                    d="M7.953 3.788a.5.5 0 0 0-.906 0L6.08 5.85l-2.154.33a.5.5 0 0 0-.283.843l1.574 1.613l-.373 2.284a.5.5 0 0 0 .736.518l1.92-1.063l1.921 1.063a.5.5 0 0 0 .736-.519l-.373-2.283l1.574-1.613a.5.5 0 0 0-.283-.844L8.921 5.85l-.968-2.062Z"
                />
            </symbol>

            <symbol
                xmlns="http://www.w3.org/2000/svg"
                id="alert-close"
                viewBox="0 0 24 24"
            >
                <path
                    fill="currentColor"
                    d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"
                />
            </symbol>

        </defs>
    </svg>
));

IconSprite.displayName = "IconSprite";