import React from 'react';
import { render } from '@testing-library/react';
import Anime from '../src/react-anime';

const MyAnime = props => (
  <Anime
    easing="easeOutQuad"
    duration={1500}
    loop={true}
    component="g"
    delay={(el, index) => index * 200}
    direction="alternate"
    strokeDashoffset={el => {
      var pathLength = '0';
      for (var key in el.children) {
        let child: SVGPathElement = el.children[key] as SVGPathElement;
        if (child.getTotalLength) {
          pathLength = child.getTotalLength().toString();
          el.setAttribute('stroke-dasharray', pathLength);
        }
      }
      return [pathLength, 0];
    }}
    {...props}
  />
);
class SvgPaths extends React.Component {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="100%"
        height="100%"
        viewBox="0 0 1280 360"
        version="1.1"
        xmlSpace="preserve"
        style={{
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 1.5
        }}>
        <g id="Layer1" transform="matrix(1,0,0,1,0,-180)">
          <g transform="matrix(1,0,0,1,0,78.3333)">
            <MyAnime>
              <path
                d="M290,275C290,261.202 278.798,250 265,250L135,250C121.202,250 110,261.202 110,275L110,325C110,338.798 121.202,350 135,350L265,350C278.798,350 290,338.798 290,325L290,275Z"
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear1)',
                  strokeWidth: '4.17px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(1,0,0,1,2,78.3333)">
            <MyAnime>
              <path
                d="M141.761,250C141.698,249.077 141.667,248.142 141.667,247.2C141.667,247.2 141.667,232.8 141.667,232.8C141.667,210.098 160.098,191.667 182.8,191.667C182.8,191.667 212.2,191.667 212.2,191.667C234.902,191.667 253.333,210.098 253.333,232.8C253.333,232.8 253.333,247.2 253.333,247.2C253.333,248.142 253.302,249.077 253.239,250L236.508,250C236.613,249.081 236.667,248.147 236.667,247.2L236.667,232.8C236.667,219.296 225.704,208.333 212.2,208.333L182.8,208.333C169.296,208.333 158.333,219.296 158.333,232.8L158.333,247.2C158.333,248.147 158.387,249.081 158.492,250L141.761,250Z"
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear2)',
                  strokeWidth: '4.17px',
                  strokeLinecap: 'butt',
                  strokeMiterlimit: 2
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(1,0,0,1.2,0,28.3333)">
            <MyAnime>
              <rect
                x={140}
                y={250}
                width={20}
                height={100}
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear3)',
                  strokeWidth: '3.77px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(1,0,0,1.2,0,28.3333)">
            <MyAnime>
              <rect
                x={240}
                y={250}
                width={20}
                height={100}
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear4)',
                  strokeWidth: '3.77px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(0.5,0,0,0.5,125,243.333)">
            <MyAnime>
              <circle
                cx={250}
                cy={330}
                r={10}
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear5)',
                  strokeWidth: '8.33px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(0.5,0,0,0.5,75,243.333)">
            <MyAnime>
              <circle
                cx={150}
                cy={330}
                r={10}
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear6)',
                  strokeWidth: '8.33px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(1,0,0,1,0,78.3333)">
            <MyAnime>
              <rect
                x={140}
                y={350}
                width={30}
                height={10}
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear7)',
                  strokeWidth: '4.17px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(1,0,0,1,0,78.3333)">
            <MyAnime>
              <rect
                x={230}
                y={350}
                width={30}
                height={10}
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear8)',
                  strokeWidth: '4.17px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(1,0,0,1,0,78.3333)">
            <MyAnime>
              <path
                d="M110,325C110,338.798 121.202,350 135,350L265,350C278.798,350 290,338.798 290,325L290,345C290,358.798 278.798,370 265,370L135,370C121.202,370 110,358.798 110,345L110,325Z"
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear9)',
                  strokeWidth: '4.17px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(1,0,0,1,0,70)">
            <MyAnime>
              <path
                d="M420,260L500,200L580,260L420,260Z"
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear10)',
                  strokeWidth: '4.17px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(0.7,0,0,0.7,150,141)">
            <MyAnime>
              <path
                d="M420,260L500,200L580,260L420,260Z"
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear11)',
                  strokeWidth: '5.95px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(1,0,0,1,0,70)">
            <MyAnime>
              <rect
                x={431}
                y={260}
                width={15}
                height={100}
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear12)',
                  strokeWidth: '4.17px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(1,0,0,1,29,70)">
            <MyAnime>
              <rect
                x={431}
                y={260}
                width={15}
                height={100}
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear13)',
                  strokeWidth: '4.17px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(1,0,0,1,58,70)">
            <MyAnime>
              <rect
                x={431}
                y={260}
                width={15}
                height={100}
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear14)',
                  strokeWidth: '4.17px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(1,0,0,1,87,70)">
            <MyAnime>
              <rect
                x={431}
                y={260}
                width={15}
                height={100}
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear15)',
                  strokeWidth: '4.17px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(1,0,0,1,116,70)">
            <MyAnime>
              <rect
                x={431}
                y={260}
                width={15}
                height={100}
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear16)',
                  strokeWidth: '4.17px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(0.888889,0,0,1,46.6667,70)">
            <MyAnime>
              <rect
                x={420}
                y={360}
                width={180}
                height={20}
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear17)',
                  strokeWidth: '4.4px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(1,0,0,1,0,70)">
            <MyAnime>
              <path
                d="M440,371L560,371"
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear18)',
                  strokeWidth: '4.17px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(1,0,0,1,0,70)">
            <MyAnime>
              <path
                d="M446,266L431,280"
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear19)',
                  strokeWidth: '4.17px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(1,0,0,1,0,70)">
            <MyAnime>
              <path
                d="M446,300L431,320"
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear20)',
                  strokeWidth: '4.17px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(1,0,0,1,5.68434e-14,110)">
            <MyAnime>
              <path
                d="M446,300L431,320"
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear21)',
                  strokeWidth: '4.17px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(1,0,0,1,29,70)">
            <MyAnime>
              <path
                d="M446,266L431,280"
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear22)',
                  strokeWidth: '4.17px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(1,0,0,1,29,70)">
            <MyAnime>
              <path
                d="M446,300L431,320"
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear23)',
                  strokeWidth: '4.17px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(1,0,0,1,29,110)">
            <MyAnime>
              <path
                d="M446,300L431,320"
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear24)',
                  strokeWidth: '4.17px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(1,0,0,1,58,70)">
            <MyAnime>
              <path
                d="M446,266L431,280"
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear25)',
                  strokeWidth: '4.17px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(1,0,0,1,58,70)">
            <MyAnime>
              <path
                d="M446,300L431,320"
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear26)',
                  strokeWidth: '4.17px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(1,0,0,1,58,110)">
            <MyAnime>
              <path
                d="M446,300L431,320"
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear27)',
                  strokeWidth: '4.17px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(1,0,0,1,87,70)">
            <MyAnime>
              <path
                d="M446,266L431,280"
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear28)',
                  strokeWidth: '4.17px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(1,0,0,1,87,70)">
            <MyAnime>
              <path
                d="M446,300L431,320"
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear29)',
                  strokeWidth: '4.17px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(1,0,0,1,87,110)">
            <MyAnime>
              <path
                d="M446,300L431,320"
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear30)',
                  strokeWidth: '4.17px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(1,0,0,1,116,70)">
            <MyAnime>
              <path
                d="M446,266L431,280"
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear31)',
                  strokeWidth: '4.17px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(1,0,0,1,116,70)">
            <MyAnime>
              <path
                d="M446,300L431,320"
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear32)',
                  strokeWidth: '4.17px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(1,0,0,1,116,110)">
            <MyAnime>
              <path
                d="M446,300L431,320"
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear33)',
                  strokeWidth: '4.17px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(1,0,0,1,10,68.3333)">
            <MyAnime>
              <path
                d="M818.11,260L827.5,260C839.918,260 850,270.082 850,282.5L850,300L870,300C875.519,300 880,304.481 880,310C880,315.519 875.519,320 870,320L850,320L850,357.5C850,369.918 839.918,380 827.5,380L782.5,380C770.082,380 760,369.918 760,357.5L760,320L807.638,320C807.638,320 809.697,278.782 818.11,260Z"
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear34)',
                  strokeWidth: '4.17px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(1,0,0,1,10,68.3333)">
            <MyAnime>
              <path
                d="M820,260C820,260 810,270 810,310C810,350 830,350 830,380"
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear35)',
                  strokeWidth: '4.17px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(1,0,0,0.25,10,323.333)">
            <MyAnime>
              <path
                d="M790,260L790,340"
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear36)',
                  strokeWidth: '5.72px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(1,0,0,1,10,68.3333)">
            <MyAnime>
              <circle
                cx={790}
                cy={350}
                r={10}
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear37)',
                  strokeWidth: '4.17px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(1,0,0,1,10,68.3333)">
            <MyAnime>
              <path
                d="M790,380L790,360"
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear38)',
                  strokeWidth: '4.17px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(1,0,0,1,10,68.3333)">
            <MyAnime>
              <circle
                cx={870}
                cy={310}
                r={10}
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear39)',
                  strokeWidth: '4.17px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(1,0,0,1,10,68.3333)">
            <MyAnime>
              <path
                d="M833,260C840,260 850,380 833,380"
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear40)',
                  strokeWidth: '4.17px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(0.707107,0.707107,-0.707107,0.707107,334.568,-353.921)">
            <MyAnime>
              <path
                d="M720,200L720,160L780,160L780,170L842.362,170L850,190L780,190L780,200L720,200Z"
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear41)',
                  strokeWidth: '4.17px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(0.707107,0.707107,-0.707107,0.707107,334.568,-353.921)">
            <MyAnime>
              <path
                d="M780,170L780,190"
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear42)',
                  strokeWidth: '4.17px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(0.707107,0.707107,-0.707107,0.707107,334.568,-353.921)">
            <MyAnime>
              <path
                d="M770,160L770,200"
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear43)',
                  strokeWidth: '4.17px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(0.944444,0,0,1,56.1111,60)">
            <MyAnime>
              <rect
                x={1010}
                y={210}
                width={180}
                height={180}
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear44)',
                  strokeWidth: '4.28px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(1,0,0,1,-10,60)">
            <MyAnime>
              <path
                d="M1050,325C1050,322.24 1047.76,320 1045,320C1042.24,320 1040,322.24 1040,325L1040,365C1040,367.76 1042.24,370 1045,370C1047.76,370 1050,367.76 1050,365L1050,325Z"
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear45)',
                  strokeWidth: '4.17px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(1,0,0,1,-10,60)">
            <MyAnime>
              <path
                d="M1070,305C1070,302.24 1067.76,300 1065,300C1062.24,300 1060,302.24 1060,305L1060,335C1060,337.76 1062.24,340 1065,340C1067.76,340 1070,337.76 1070,335L1070,305Z"
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear46)',
                  strokeWidth: '4.17px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(1,0,0,1,-10,60)">
            <MyAnime>
              <path
                d="M1090,285C1090,282.24 1087.76,280 1085,280C1082.24,280 1080,282.24 1080,285L1080,305C1080,307.76 1082.24,310 1085,310C1087.76,310 1090,307.76 1090,305L1090,285Z"
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear47)',
                  strokeWidth: '4.17px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(1,0,0,1,-10,60)">
            <MyAnime>
              <path
                d="M1110,315C1110,312.24 1107.76,310 1105,310C1102.24,310 1100,312.24 1100,315L1100,335C1100,337.76 1102.24,340 1105,340C1107.76,340 1110,337.76 1110,335L1110,315Z"
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear48)',
                  strokeWidth: '4.17px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(1,0,0,1,-10,60)">
            <MyAnime>
              <path
                d="M1130,315C1130,312.24 1127.76,310 1125,310C1122.24,310 1120,312.24 1120,315L1120,325C1120,327.76 1122.24,330 1125,330C1127.76,330 1130,327.76 1130,325L1130,315Z"
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear49)',
                  strokeWidth: '4.17px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(1,0,0,1,-10,60)">
            <MyAnime>
              <path
                d="M1150,285C1150,282.24 1147.76,280 1145,280C1142.24,280 1140,282.24 1140,285L1140,315C1140,317.76 1142.24,320 1145,320C1147.76,320 1150,317.76 1150,315L1150,285Z"
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear50)',
                  strokeWidth: '4.17px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(1,0,0,1,-10,60)">
            <MyAnime>
              <path
                d="M1170,245C1170,242.24 1167.76,240 1165,240C1162.24,240 1160,242.24 1160,245L1160,295C1160,297.76 1162.24,300 1165,300C1167.76,300 1170,297.76 1170,295L1170,245Z"
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear51)',
                  strokeWidth: '4.17px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(1,0,0,1,-2.27374e-13,60)">
            <MyAnime>
              <path
                d="M1030,350L1010,370"
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear52)',
                  strokeWidth: '4.17px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(1,0,0,1,-2.27374e-13,60)">
            <MyAnime>
              <path
                d="M1040,340L1050,320"
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear53)',
                  strokeWidth: '4.17px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(1,0,0,1,-2.27374e-13,60)">
            <MyAnime>
              <path
                d="M1060,320L1070,290"
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear54)',
                  strokeWidth: '4.17px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(1,0,0,1,-2.27374e-13,60)">
            <MyAnime>
              <path
                d="M1080,290L1090,330"
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear55)',
                  strokeWidth: '4.17px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(1,0,0,1,-2.27374e-13,60)">
            <MyAnime>
              <path
                d="M1100,330L1110,320"
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear56)',
                  strokeWidth: '4.17px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(1,0,0,1,-2.27374e-13,60)">
            <MyAnime>
              <path
                d="M1120,320L1130,300"
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear57)',
                  strokeWidth: '4.17px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(1,0,0,1,-2.27374e-13,60)">
            <MyAnime>
              <path
                d="M1140,300L1150,270"
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear58)',
                  strokeWidth: '4.17px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(1,0,0,1,-2.27374e-13,60)">
            <MyAnime>
              <path
                d="M1160,270L1180,250"
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear59)',
                  strokeWidth: '4.17px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(1,0,0,1,-2.27374e-13,60)">
            <MyAnime>
              <path
                d="M1020,210L1020,390"
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear60)',
                  strokeWidth: '4.17px'
                }}
              />
            </MyAnime>
          </g>
          <g transform="matrix(1,0,0,1,-2.27374e-13,60)">
            <MyAnime>
              <path
                d="M1170,390L1170,210"
                style={{
                  fill: 'none',
                  stroke: 'url(#_Linear61)',
                  strokeWidth: '4.17px'
                }}
              />
            </MyAnime>
          </g>
        </g>
        <defs>
          <linearGradient
            id="_Linear1"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-200,240,-240,-200,300,161.667)">
            <stop offset={0} style={{ stopColor: 'white', stopOpacity: 1 }} />
            <stop
              offset={0}
              style={{ stopColor: 'rgb(236,103,238)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(248,83,118)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear2"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-200,240,-240,-200,298,161.667)">
            <stop offset={0} style={{ stopColor: 'white', stopOpacity: 1 }} />
            <stop
              offset={0}
              style={{ stopColor: 'rgb(236,103,238)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(248,83,118)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear3"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-200,200,-240,-166.667,300,176.389)">
            <stop offset={0} style={{ stopColor: 'white', stopOpacity: 1 }} />
            <stop
              offset={0}
              style={{ stopColor: 'rgb(236,103,238)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(248,83,118)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear4"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-200,200,-240,-166.667,300,176.389)">
            <stop offset={0} style={{ stopColor: 'white', stopOpacity: 1 }} />
            <stop
              offset={0}
              style={{ stopColor: 'rgb(236,103,238)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(248,83,118)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear5"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-400,480,-480,-400,350,-6.66667)">
            <stop offset={0} style={{ stopColor: 'white', stopOpacity: 1 }} />
            <stop
              offset={0}
              style={{ stopColor: 'rgb(236,103,238)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(248,83,118)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear6"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-400,480,-480,-400,450,-6.66667)">
            <stop offset={0} style={{ stopColor: 'white', stopOpacity: 1 }} />
            <stop
              offset={0}
              style={{ stopColor: 'rgb(236,103,238)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(248,83,118)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear7"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-200,240,-240,-200,300,161.667)">
            <stop offset={0} style={{ stopColor: 'white', stopOpacity: 1 }} />
            <stop
              offset={0}
              style={{ stopColor: 'rgb(236,103,238)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(248,83,118)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear8"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-200,240,-240,-200,300,161.667)">
            <stop offset={0} style={{ stopColor: 'white', stopOpacity: 1 }} />
            <stop
              offset={0}
              style={{ stopColor: 'rgb(236,103,238)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(248,83,118)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear9"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-200,240,-240,-200,300,161.667)">
            <stop offset={0} style={{ stopColor: 'white', stopOpacity: 1 }} />
            <stop
              offset={0}
              style={{ stopColor: 'rgb(236,103,238)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(248,83,118)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear10"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(180,200,-200,180,420,190)">
            <stop
              offset={0}
              style={{ stopColor: 'rgb(255,195,0)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(235,122,44)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear11"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(257.143,285.714,-285.714,257.143,385.714,170)">
            <stop
              offset={0}
              style={{ stopColor: 'rgb(255,195,0)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(235,122,44)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear12"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(180,200,-200,180,420,190)">
            <stop
              offset={0}
              style={{ stopColor: 'rgb(255,195,0)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(235,122,44)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear13"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(180,200,-200,180,391,190)">
            <stop
              offset={0}
              style={{ stopColor: 'rgb(255,195,0)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(235,122,44)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear14"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(180,200,-200,180,362,190)">
            <stop
              offset={0}
              style={{ stopColor: 'rgb(255,195,0)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(235,122,44)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear15"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(180,200,-200,180,333,190)">
            <stop
              offset={0}
              style={{ stopColor: 'rgb(255,195,0)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(235,122,44)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear16"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(180,200,-200,180,304,190)">
            <stop
              offset={0}
              style={{ stopColor: 'rgb(255,195,0)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(235,122,44)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear17"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(202.5,200,-225,180,420,190)">
            <stop
              offset={0}
              style={{ stopColor: 'rgb(255,195,0)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(235,122,44)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear18"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(180,200,-200,180,420,190)">
            <stop
              offset={0}
              style={{ stopColor: 'rgb(255,195,0)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(235,122,44)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear19"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(180,200,-200,180,420,190)">
            <stop
              offset={0}
              style={{ stopColor: 'rgb(255,195,0)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(235,122,44)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear20"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(180,200,-200,180,420,190)">
            <stop
              offset={0}
              style={{ stopColor: 'rgb(255,195,0)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(235,122,44)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear21"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(180,200,-200,180,420,150)">
            <stop
              offset={0}
              style={{ stopColor: 'rgb(255,195,0)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(235,122,44)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear22"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(180,200,-200,180,391,190)">
            <stop
              offset={0}
              style={{ stopColor: 'rgb(255,195,0)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(235,122,44)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear23"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(180,200,-200,180,391,190)">
            <stop
              offset={0}
              style={{ stopColor: 'rgb(255,195,0)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(235,122,44)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear24"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(180,200,-200,180,391,150)">
            <stop
              offset={0}
              style={{ stopColor: 'rgb(255,195,0)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(235,122,44)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear25"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(180,200,-200,180,362,190)">
            <stop
              offset={0}
              style={{ stopColor: 'rgb(255,195,0)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(235,122,44)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear26"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(180,200,-200,180,362,190)">
            <stop
              offset={0}
              style={{ stopColor: 'rgb(255,195,0)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(235,122,44)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear27"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(180,200,-200,180,362,150)">
            <stop
              offset={0}
              style={{ stopColor: 'rgb(255,195,0)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(235,122,44)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear28"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(180,200,-200,180,333,190)">
            <stop
              offset={0}
              style={{ stopColor: 'rgb(255,195,0)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(235,122,44)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear29"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(180,200,-200,180,333,190)">
            <stop
              offset={0}
              style={{ stopColor: 'rgb(255,195,0)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(235,122,44)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear30"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(180,200,-200,180,333,150)">
            <stop
              offset={0}
              style={{ stopColor: 'rgb(255,195,0)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(235,122,44)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear31"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(180,200,-200,180,304,190)">
            <stop
              offset={0}
              style={{ stopColor: 'rgb(255,195,0)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(235,122,44)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear32"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(180,200,-200,180,304,190)">
            <stop
              offset={0}
              style={{ stopColor: 'rgb(255,195,0)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(235,122,44)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear33"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(180,200,-200,180,304,150)">
            <stop
              offset={0}
              style={{ stopColor: 'rgb(255,195,0)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(235,122,44)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear34"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(221,40,-40,221,710,291.667)">
            <stop
              offset={0}
              style={{ stopColor: 'rgb(0,255,219)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(87,173,223)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear35"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(221,40,-40,221,710,291.667)">
            <stop
              offset={0}
              style={{ stopColor: 'rgb(0,255,219)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(87,173,223)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear36"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(221,160,-40,884,710,146.667)">
            <stop
              offset={0}
              style={{ stopColor: 'rgb(0,255,219)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(87,173,223)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear37"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(221,40,-40,221,710,291.667)">
            <stop
              offset={0}
              style={{ stopColor: 'rgb(0,255,219)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(87,173,223)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear38"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(221,40,-40,221,710,291.667)">
            <stop
              offset={0}
              style={{ stopColor: 'rgb(0,255,219)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(87,173,223)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear39"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(221,40,-40,221,710,291.667)">
            <stop
              offset={0}
              style={{ stopColor: 'rgb(0,255,219)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(87,173,223)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear40"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(221,40,-40,221,710,291.667)">
            <stop
              offset={0}
              style={{ stopColor: 'rgb(0,255,219)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(87,173,223)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear41"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(184.555,-127.986,127.986,184.555,777.36,232.277)">
            <stop
              offset={0}
              style={{ stopColor: 'rgb(0,255,219)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(87,173,223)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear42"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(184.555,-127.986,127.986,184.555,777.36,232.277)">
            <stop
              offset={0}
              style={{ stopColor: 'rgb(0,255,219)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(87,173,223)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear43"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(184.555,-127.986,127.986,184.555,777.36,232.277)">
            <stop
              offset={0}
              style={{ stopColor: 'rgb(0,255,219)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(87,173,223)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear44"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-52.9412,307,-325.059,-50,1211.18,173)">
            <stop
              offset={0}
              style={{ stopColor: 'rgb(150,255,0)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(59,190,52)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear45"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-50,307,-307,-50,1210,173)">
            <stop
              offset={0}
              style={{ stopColor: 'rgb(150,255,0)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(59,190,52)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear46"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-50,307,-307,-50,1210,173)">
            <stop
              offset={0}
              style={{ stopColor: 'rgb(150,255,0)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(59,190,52)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear47"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-50,307,-307,-50,1210,173)">
            <stop
              offset={0}
              style={{ stopColor: 'rgb(150,255,0)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(59,190,52)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear48"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-50,307,-307,-50,1210,173)">
            <stop
              offset={0}
              style={{ stopColor: 'rgb(150,255,0)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(59,190,52)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear49"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-50,307,-307,-50,1210,173)">
            <stop
              offset={0}
              style={{ stopColor: 'rgb(150,255,0)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(59,190,52)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear50"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-50,307,-307,-50,1210,173)">
            <stop
              offset={0}
              style={{ stopColor: 'rgb(150,255,0)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(59,190,52)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear51"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-50,307,-307,-50,1210,173)">
            <stop
              offset={0}
              style={{ stopColor: 'rgb(150,255,0)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(59,190,52)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear52"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-50,307,-307,-50,1200,173)">
            <stop
              offset={0}
              style={{ stopColor: 'rgb(150,255,0)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(59,190,52)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear53"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-50,307,-307,-50,1200,173)">
            <stop
              offset={0}
              style={{ stopColor: 'rgb(150,255,0)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(59,190,52)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear54"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-50,307,-307,-50,1200,173)">
            <stop
              offset={0}
              style={{ stopColor: 'rgb(150,255,0)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(59,190,52)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear55"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-50,307,-307,-50,1200,173)">
            <stop
              offset={0}
              style={{ stopColor: 'rgb(150,255,0)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(59,190,52)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear56"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-50,307,-307,-50,1200,173)">
            <stop
              offset={0}
              style={{ stopColor: 'rgb(150,255,0)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(59,190,52)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear57"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-50,307,-307,-50,1200,173)">
            <stop
              offset={0}
              style={{ stopColor: 'rgb(150,255,0)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(59,190,52)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear58"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-50,307,-307,-50,1200,173)">
            <stop
              offset={0}
              style={{ stopColor: 'rgb(150,255,0)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(59,190,52)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear59"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-50,307,-307,-50,1200,173)">
            <stop
              offset={0}
              style={{ stopColor: 'rgb(150,255,0)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(59,190,52)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear60"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-50,307,-307,-50,1200,173)">
            <stop
              offset={0}
              style={{ stopColor: 'rgb(150,255,0)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(59,190,52)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="_Linear61"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-50,307,-307,-50,1200,173)">
            <stop
              offset={0}
              style={{ stopColor: 'rgb(150,255,0)', stopOpacity: 1 }}
            />
            <stop
              offset={1}
              style={{ stopColor: 'rgb(59,190,52)', stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
      </svg>
    );
  }
}

//snapshot test
it('svg paths', () => {
  const tree = render(<SvgPaths />);
  expect(tree.asFragment()).toMatchSnapshot();
});
