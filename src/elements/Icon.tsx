import React from 'react';

interface IconProps {
  name?: string;
  color?: string;
  size?: number;
  style?: any;
}

const Icon = ({ name, color, size, style }: IconProps) => {
  switch (name) {
    case 'play':
      return (
        <svg width='45' height='45' viewBox='-12 -12 55 55'>
          <defs />
          <path
            d='M16.661,8.708a5.549,5.549,0,0,1,10.055,0l11.1,20.62c2.4,4.458-.426,10.178-5.028,10.178H10.59c-4.6,0-7.427-5.721-5.028-10.178Z'
            transform='translate(39.506 -4.689) rotate(90)'
            fill={color || 'black'}
          />
        </svg>
      );
    case 'tomato':
      return (
        <svg
          enableBackground='new 0 0 50 50'
          height='40px'
          viewBox={`0 0 50 50`}
          width='40px'
          fill={color}
        >
          <g id='Layer_23' />
          <g id='Layer_22' />
          <g id='Layer_21' />
          <g id='Layer_20' />
          <g id='Layer_19' />
          <g id='Layer_18' />
          <g id='Layer_17' />
          <g id='Layer_16' />
          <g id='Layer_15' />
          <g id='Layer_14' />
          <g id='Layer_13' />
          <g id='Layer_12' />
          <g id='Layer_11' />
          <g id='Layer_10' />
          <g id='Layer_9' />
          <g id='Layer_8' />
          <g id='Layer_7'>
            <path
              clipRule='evenodd'
              d='M16.986,15.247l0.969,2.277c-4.784,2.037-8.363,6.171-8.363,11.545H7.11   C7.11,22.703,11.292,17.67,16.986,15.247 M37.432,5.992c-3.051-0.488-5.474-0.673-8.294,0.772C28.714,3.689,27.721,2.121,25.461,0   c-2.259,2.121-3.251,3.691-3.676,6.764C18.92,5.295,16.506,5.51,13.49,5.992c0.098,2.057,0.165,3.523,1.399,5.332   C7.705,14.63,2.546,21.462,2.546,29.568c0,12.187,11.149,20.566,22.763,20.43c11.391-0.137,22.145-8.495,22.145-20.43   c0-7.826-4.817-14.493-11.658-17.916C37.229,9.77,37.329,8.206,37.432,5.992z M34.34,8.426c-1.114,3.494-5.588,4.697-8.879,4.697   c-3.289,0-7.766-1.203-8.878-4.697c3.907-0.109,5.724,2.085,8.387,4.424c-0.368-3.021-1.013-5.747,0.491-8.602   c1.505,2.843,0.857,5.592,0.491,8.602C28.616,10.511,30.434,8.317,34.34,8.426z'
              fillRule='evenodd'
            />
          </g>
          <g id='Layer_6' />
          <g id='Layer_5' />
          <g id='Layer_4' />
          <g id='Layer_3' />
          <g id='Layer_2' />
        </svg>
      );
    case 'profile':
      return (
        <svg
          viewBox='0 0 512 512'
          width={`${size}px`}
          height={`${size}px`}
          fill={color}
          style={style}
        >
          <g id='Layer_1' />
          <g id='Layer_2'>
            <g>
              <g>
                <path
                  className='st0'
                  d='M256,224.9c-47.7,0-84.7-53.77-84.7-100.02c0-22.61,8.94-43.42,25.18-58.59     C212.21,51.6,233.35,43.5,256,43.5s43.79,8.1,59.53,22.79c16.23,15.17,25.18,35.97,25.18,58.59     C340.7,171.14,303.7,224.9,256,224.9z'
                />
              </g>
              <g>
                <path
                  className='st0'
                  d='M402.95,385c-3.25,27.82-7.86,56.27-15.15,83.5H124.21c-7.3-27.23-11.91-55.68-15.17-83.5     c-2.61-22.3-1.88-45.45,8.58-66.14c9.48-18.77,26.75-34.62,47.6-45.57c4.9-2.57,9.98-4.88,15.2-6.92     c23.18,13.99,49.07,21.53,75.58,21.53s52.4-7.54,75.58-21.53c5.22,2.04,10.3,4.35,15.2,6.92c20.86,10.95,38.12,26.8,47.6,45.57     C404.84,339.55,405.57,362.7,402.95,385z'
                />
              </g>
            </g>
          </g>
        </svg>
      );
    case 'config':
      return (
        <svg
          viewBox='0 0 512 512'
          width={`${size}px`}
          height={`${size}px`}
          fill={color}
          style={style}
        >
          <g id='Layer_1' />
          <g id='Layer_2'>
            <g>
              <path
                className='st0'
                d='M468.5,283.28v-54.57l-52.02-9.8c-4.15-18.03-11.27-34.93-20.8-50.16l29.87-43.73l-38.58-38.58l-43.73,29.87    c-15.23-9.53-32.12-16.65-50.16-20.8l-9.8-52.02h-54.57l-9.8,52.02c-18.03,4.15-34.93,11.27-50.16,20.8l-43.73-29.87l-38.58,38.58    l29.87,43.73c-9.53,15.23-16.65,32.12-20.8,50.16l-52.02,9.8v54.57l52.02,9.8c4.15,18.03,11.27,34.93,20.8,50.16l-29.87,43.73    l38.58,38.58l43.73-29.87c15.23,9.53,32.12,16.65,50.16,20.8l9.8,52.02h54.57l9.8-52.02c18.03-4.15,34.93-11.27,50.16-20.8    l43.73,29.87l38.58-38.58l-29.87-43.73c9.53-15.23,16.65-32.12,20.8-50.16L468.5,283.28z M256,347.74    c-50.67,0-91.74-41.07-91.74-91.74s41.07-91.74,91.74-91.74s91.74,41.07,91.74,91.74S306.67,347.74,256,347.74z'
              />
            </g>
          </g>
        </svg>
      );
    case 'stats':
      return (
        <svg
          viewBox='0 0 512 512'
          width={`${size}px`}
          height={`${size}px`}
          fill={color}
          style={style}
        >
          <g id='Layer_1' />
          <g id='Layer_2'>
            <g>
              <g>
                <path
                  className='st0'
                  d='M245.84,68.16c-105.4,1.69-190.53,86.82-192.24,192.22c-1.78,110.03,88.63,200.44,198.66,198.66     c105.4-1.7,190.53-86.83,192.22-192.24c0.03-1.76-1.41-3.2-3.18-3.2H252.22c-1.75,0-3.17-1.42-3.17-3.17V71.34     C249.05,69.58,247.61,68.13,245.84,68.16z'
                />
              </g>
              <g>
                <path
                  className='st0'
                  d='M307.92,56.14v144.12c0,1.75,1.42,3.17,3.17,3.17h144.12c1.79,0,3.21-1.48,3.17-3.27     c-1.72-80.52-66.67-145.48-147.19-147.19C309.4,52.93,307.92,54.35,307.92,56.14z'
                />
              </g>
            </g>
          </g>
        </svg>
      );
    case 'stats2':
      return (
        <svg
          viewBox='0 0 512 512'
          width={`${size}px`}
          height={`${size}px`}
          fill={color}
          style={style}
        >
          <g id='Layer_1' />
          <g id='Layer_2'>
            <g>
              <path
                className='st0'
                d='M256,43.5C138.64,43.5,43.5,138.64,43.5,256c0,117.36,95.14,212.5,212.5,212.5S468.5,373.36,468.5,256    C468.5,138.64,373.36,43.5,256,43.5z M175.32,340.77h-52.08v-92.02h52.08V340.77z M282.04,340.77h-52.08V141h52.08V340.77z     M388.77,340.77h-52.08V195.64h52.08V340.77z'
              />
            </g>
          </g>
        </svg>
      );
    case 'logout':
      return (
        <svg
          viewBox='0 0 512 512'
          width={`${size}px`}
          height={`${size}px`}
          fill={color}
          style={style}
        >
          <g id='Layer_1' />
          <g id='Layer_2'>
            <g>
              <g>
                <path
                  className='st0'
                  d='M353.98,146.5c-7.25-5.04-17.23-3.25-22.27,4.01c-5.04,7.26-3.25,17.23,4.01,22.27     c37.66,26.17,60.15,69.14,60.15,114.95c0,77.12-62.75,139.87-139.87,139.87s-139.87-62.75-139.87-139.87     c0-45.81,22.49-88.78,60.15-114.95c7.26-5.04,9.05-15.01,4.01-22.27c-5.04-7.26-15.02-9.05-22.27-4.01     c-46.27,32.15-73.89,84.95-73.89,141.23c0,94.77,77.1,171.87,171.87,171.87s171.87-77.1,171.87-171.87     C427.87,231.45,400.25,178.65,353.98,146.5z'
                />
              </g>
              <g>
                <path
                  className='st0'
                  d='M256,303.73c8.84,0,16-7.16,16-16V68.4c0-8.84-7.16-16-16-16s-16,7.16-16,16v219.33     C240,296.57,247.16,303.73,256,303.73z'
                />
              </g>
            </g>
          </g>
        </svg>
      );
    case 'home':
      return (
        <svg
          viewBox='0 0 512 512'
          width={`${size}px`}
          height={`${size}px`}
          fill={color}
          style={style}
        >
          <g id='Layer_1' />
          <g id='Layer_2'>
            <g>
              <path
                className='st0'
                d='M458.94,230.05L266.16,47.55c-5.7-5.4-14.63-5.4-20.33,0L53.06,230.05c-9.71,9.19-3.2,25.52,10.16,25.52    h50.97v200.61c0,6.81,5.52,12.32,12.32,12.32h62.13c6.81,0,12.32-5.52,12.32-12.32V334.35c0-6.81,5.52-12.32,12.32-12.32h85.41    c6.81,0,12.32,5.52,12.32,12.32v121.83c0,6.81,5.52,12.32,12.32,12.32h62.13c6.81,0,12.32-5.52,12.32-12.32V255.57h50.97    C462.15,255.57,468.65,239.24,458.94,230.05z'
              />
            </g>
          </g>
        </svg>
      );
    default:
      return null;
  }
};

export default Icon;
