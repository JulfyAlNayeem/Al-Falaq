import React from 'react'
import { useChatContext } from '../../context-reducer/ChatContext';
import { borderColor } from '../../constant';

export default function Smiley() {
const {themeIndex} = useChatContext();
    const styles = {
        smiley: {
          width: '14px', 
          height: '24px',
          fill: borderColor[themeIndex.value],
        },
      };

  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 29.14 49.122"
    style={styles.smiley}
  >
    <g
      fillOpacity="1"
      strokeOpacity="0.98"
      transform="translate(-175.89 -186.561)"
    >
      <path
        // fill="#f6ca4b"
        strokeWidth="0.041"
        d="M190.212 186.561c-.106-.004-.288.04-.571.13-.756.242-2.23.821-3.126 1.578-.896.757-1.211 1.69-1.51 2.013-.297.322-.578.032-.753-.161-.175-.193-.245-.29-.648-.74a85.505 85.505 0 00-1.525-1.659c-.385-.402-.42-.402-.7-.064-.281.338-.807 1.014-1.123 1.835a4.432 4.432 0 00-.157 2.752c.263.966.894 1.932 1.209 2.544.08.154.139.285.189.396-3.226 2.482-5.203 6.172-5.436 10.146h-.03v.784l-.141 22.854a6.574 6.672 0 006.574 6.714h15.031a7.4 7.51 0 007.4-7.463l.135-22.105v-.784h-.023c-.26-4.456-2.71-8.524-6.592-10.951.025-.282.023-.787-.13-1.006-.386-.548-.772-.709-1.315-.886-.544-.177-1.366-.342-2.015-.551-.648-.21-1.275-.239-1.853-.416-.578-.177-1.139-.306-1.612-.483a3.234 3.234 0 01-1.227-.773c-.368-.37-.718-.885-.682-1.513.037-.628.461-1.368.656-1.787.121-.262.153-.398-.025-.404z"
      ></path>
      <path
        fill="#463825"
        strokeWidth="0.042"
        d="M181.436 206.95c-1.216.234-1.168 1.02-1.18 2.121.277 5.1 4.793 9.103 10.271 9.106 5.533-.003 10.074-4.084 10.278-9.238.013-1.113-.408-1.965-1.273-1.99z"
      ></path>
      <rect
        width="6.405"
        height="12.814"
        x="187.545"
        y="207.072"
        fill="#ec5d68"
        strokeWidth="0.039"
        ry="3.148"
      ></rect>
      <path
        fill="#cf535d"
        strokeWidth="0.045"
        d="M193.897 208.9h-6.299a5.137 5.137 0 00-.053.736V214.195l.003-.104.005-.103.007-.103.01-.102c.002-.033.006-.067.01-.1l.014-.1a21.1 21.1 0 01.032-.199l.018-.097.02-.097a3.785 3.785 0 01.073-.284 4.5 4.5 0 01.028-.092l.03-.091a4.654 4.654 0 01.383-.846 4.163 4.163 0 01.301-.44 3.62 3.62 0 01.474-.493 3.222 3.222 0 01.544-.372 2.74 2.74 0 01.446-.19l.077-.023.078-.021a2.091 2.091 0 01.158-.036l.08-.014.08-.012.082-.009a2.23 2.23 0 01.082-.007l.082-.004.083-.002h.004a1.857 1.857 0 01.165.006l.082.007c.027.003.054.005.08.01.028.002.055.007.082.011a2.116 2.116 0 01.237.05l.078.02.077.024c.026.008.051.018.077.027a2.554 2.554 0 01.37.163 2.895 2.895 0 01.544.372 3.301 3.301 0 01.362.36 3.82 3.82 0 01.501.732 4.348 4.348 0 01.324.778l.028.092.026.094.024.095a3.785 3.785 0 01.062.29 4.6 4.6 0 01.017.098l.015.1.013.1c.004.033.008.067.01.1a3.478 3.478 0 01.016.205c.003.034.005.069.006.103l.003.104v.105-4.664c0-.252-.018-.498-.052-.737z"
      ></path>
      <path
        fill="#fff"
        strokeWidth="0.045"
        d="M199.161 206.95v1.348c0 .333-.245.601-.55.601h-16.16c-.306 0-.552-.268-.552-.6v-1.35"
      ></path>
      <path
        fill="#fff"
        strokeWidth="0.049"
        d="M199.161 206.95v1.568c0 .387-.245.698-.55.698h-16.16c-.306 0-.552-.311-.552-.698v-1.568"
      ></path>
      <ellipse
        cx="183.725"
        cy="203.918"
        fill="#443825"
        strokeWidth="0.041"
        rx="1.465"
        ry="1.345"
      ></ellipse>
      <rect
        width="5.134"
        height="1.245"
        x="193.42"
        y="203.295"
        fill="#443825"
        strokeWidth="0.022"
        ry="0.623"
      ></rect>
    </g>
  </svg>
 
  )
}