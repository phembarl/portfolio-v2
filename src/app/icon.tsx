import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12.5"
          height="20"
          viewBox="0 0 320 512"
        >
          <path
            fill="#64ffda"
            d="M64 32C28.7 32 0 60.7 0 96v352c0 17.7 14.3 32 32 32s32-14.3 32-32V288h160c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V96h224c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="20"
          viewBox="0 0 384 512"
        >
          <path
            fill="#64ffda"
            d="M0 64c0-17.7 14.3-32 32-32h192c70.7 0 128 57.3 128 128c0 31.3-11.3 60.1-30 82.3c37.1 22.4 62 63.1 62 109.7c0 70.7-57.3 128-128 128H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h16V96H32C14.3 96 0 81.7 0 64m224 160c35.3 0 64-28.7 64-64s-28.7-64-64-64H112v128zm-112 64v128h144c35.3 0 64-28.7 64-64s-28.7-64-64-64h-32z"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
