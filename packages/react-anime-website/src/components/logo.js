import React, { Component, createElement } from 'react';
import Anime from 'react-anime';

export class Logo extends Component {
  render() {
    let mapRender = arr =>
      arr.map(({
        type,
        props
      }, i) => createElement(type, { ...props, key: i }));

    return (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', userSelect: 'none', cursor: 'default'}}>
        <svg style={{width: '100%'}} viewBox="0 0 280 144">
          <LineAnime direction="reverse" delay={(_, i) => 2400 + 120 * i}>
            {mapRender([...components.solid.react, ...components.solid.anime])}
          </LineAnime>
          <LineAnime delay={(_, i) => 120 * i}>
            {mapRender([...components.line.react, ...components.line.anime])}
          </LineAnime>
        </svg>
        <Anime
          style={{ zIndex: 1000, fontSize: '2.5em', fontWeight: 100, position: 'absolute', display: 'flex', letterSpacing: '.2em'}}
          opacity={[0, 1]}
          translateY={[320, 0]}
          delay={(_, i) => 6000 + 120 * i}
          scaleX={[1.15, 1.15]}
        >
          <div></div>
          <div>R</div>
          <div>E</div>
          <div>A</div>
          <div>C</div>
          <div>T</div>
          <p>&nbsp;</p>
          <div>A</div>
          <div>N</div>
          <div>I</div>
          <div>M</div>
          <div>E</div>
        </Anime>
      </div>
    );
  }
}

class LineAnime extends Component {
  render() {
    let props = {
      easing: 'easeOutQuad',
      direction: 'alternate',
      duration: 1500,
      strokeDashoffset: el => {
        var pathLength = 0;
        if (el.getTotalLength) {
          pathLength = el.getTotalLength();
          el.setAttribute('stroke-dasharray', pathLength);
        }
        return [pathLength, 0];
      },
      ...this.props
    };
    return <Anime {...props} />;
  }
}

const styles = {
  letters: { display: 'block' },
  line: {
    red: {
      fill: 'none',
      stroke: '#F60051',
      strokeWidth: 14,
      strokeMiterlimit: 10
    },
    green: {
      fill: 'none',
      stroke: '#27F986',
      strokeWidth: 14,
      strokeMiterlimit: 10
    },
    blue: {
      fill: 'none',
      stroke: '#587DF9',
      strokeWidth: 14,
      strokeMiterlimit: 10
    },
    circle: {
      fill: '#27F986'
    }
  },
  solid: {
    red: {
      fill: 'none',
      strokeWidth: 1,
      strokeMiterlimit: 10,
      stroke: '#f60051'
    },
    green: {
      fill: 'none',
      strokeWidth: 1,
      strokeMiterlimit: 10,
      stroke: '#27f986'
    },
    blue: {
      fill: 'none',
      strokeWidth: 1,
      strokeMiterlimit: 10,
      stroke: '#587df9'
    }
  }
};

// Logo SVG Components
const components = {
  // Path is solid version of line art
  solid: {
    react: [
      {
        type: 'rect',
        props: {
          x: '215.3',
          y: '32',
          style: styles.solid.green,
          width: 42,
          height: 12
        }
      },
      {
        type: 'path',
        props: {
          style: styles.solid.red,
          d: 'M20.3,72V45c0-14.888,12.112-27,27-27c14.553,0,26.455,11.573,26.982,26H62.267C61.75,36.194,55.235,30,47.3,30c-8.271,0-15,6.729-15,15v27H20.3z'
        }
      },
      {
        type: 'path',
        props: {
          style: styles.solid.green,
          d: 'M257.3,71.982c-14.427-0.527-26-12.429-26-26.982V16h12v29c0,7.935,6.193,14.45,14,14.967V71.982z'
        }
      },
      {
        type: 'path',
        props: {
          style: styles.solid.red,
          d: 'M74.3,71.982C60.204,71.467,48.833,60.096,48.318,46h12.015c0.495,7.476,6.491,13.472,13.967,13.967V71.982z'
        }
      },
      {
        type: 'path',
        props: {
          style: styles.solid.blue,
          d: 'M160.3,72V45c0-8.271-6.729-15-15-15c-8.271,0-15,6.729-15,15c0,7.935,6.194,14.45,14,14.967v12.015c-14.427-0.527-26-12.429-26-26.982c0-14.888,12.112-27,27-27s27,12.112,27,27v27H160.3z'
        }
      },
      {
        type: 'path',
        props: {
          style: styles.solid.green,
          d: 'M102.3,71.982c-14.427-0.527-26-12.429-26-26.982c0-14.888,12.112-27,27-27s27,12.112,27,27v13h-26V46h14v-1c0-8.271-6.729-15-15-15s-15,6.729-15,15c0,7.935,6.194,14.45,14,14.967V71.982z'
        }
      },
      {
        type: 'path',
        props: {
          style: styles.solid.red,
          d: 'M187.3,72c-14.888,0-27-12.112-27-27s12.112-27,27-27h26v12h-26c-8.271,0-15,6.729-15,15s6.729,15,15,15h26v12H187.3z'
        }
      }
    ],
    anime: [
      {
        type: 'path',
        props: {
          style: styles.solid.blue,
          d: 'M62.3,128v-27c0-8.271-6.729-15-15-15s-15,6.729-15,15c0,7.935,6.194,14.45,14,14.967v12.015c-14.427-0.527-26-12.428-26-26.981c0-14.888,12.112-27,27-27s27,12.112,27,27v27H62.3z'
        }
      },
      {
        type: 'rect',
        props: {
          x: 62.3,
          y: 74,
          style: styles.solid.red,
          width: '12',
          height: '54'
        }
      },
      {
        type: 'path',
        props: {
          style: styles.solid.red,
          d: 'M104.3,128v-27c0-8.271-6.729-15-15-15c-8.148,0-14.737,6.619-15,15.068l0,26.932h-12l0.002-27.182C62.691,85.791,74.55,74,89.3,74c14.888,0,27,12.112,27,27v27H104.3z'
        }
      },
      {
        type: 'rect',
        props: {
          x: '118.3',
          y: '74',
          style: styles.solid.blue,
          width: '12',
          height: '54'
        }
      },
      {
        type: 'path',
        props: {
          style: styles.solid.blue,
          d: 'M160.3,128v-27c0-8.271-6.729-15-15-15c-8.148,0-14.737,6.619-15,15.068l0,26.932h-12l0.002-27.182C118.691,85.791,130.55,74,145.3,74c14.888,0,27,12.112,27,27v27H160.3z'
        }
      },
      {
        type: 'path',
        props: {
          style: styles.solid.red,
          d: 'M202.3,128v-27c0-8.271-6.729-15-15-15c-8.061,0-14.649,6.629-14.999,15.091L172.3,128h-12l0.004-27.241C160.821,85.769,172.68,74,187.3,74c14.888,0,27,12.112,27,27v27H202.3z'
        }
      },
      {
        type: 'path',
        props: {
          style: styles.solid.green,
          d: 'M228.3,127.981c-14.427-0.527-26-12.428-26-26.981c0-14.888,12.112-27,27-27s27,12.112,27,27v13h-26v-12h14v-1c0-8.271-6.729-15-15-15s-15,6.729-15,15c0,7.935,6.193,14.45,14,14.967V127.981z'
        }
      },
      {
        type: 'path',
        props: {
          style: styles.solid.green,
          d: 'M130.25,127.981c-14.427-0.527-26-12.428-26-26.981v-6h12v6c0,7.935,6.194,14.45,14,14.967V127.981z'
        }
      }
    ],
    circle: {
      type: 'circle',
      props: {
        style: styles.solid.green,
        cx: '110.25',
        cy: '80',
        r: '6'
      }
    }
  },
  // Thick 13px lines
  line: {
    react: [
      {
        type: 'line',
        props: {
          style: styles.line.green,
          x1: '214.25',
          y1: '38',
          x2: '258.25',
          y2: '38'
        }
      },
      {
        type: 'path',
        props: {
          style: styles.line.red,
          d: 'M68.25,45c0-11.598-9.402-21-21-21s-21,9.402-21,21v28'
        }
      },
      {
        type: 'path',
        props: {
          style: styles.line.green,
          d: 'M258.25,66c-11.598,0-21-9.402-21-21V15'
        }
      },
      {
        type: 'path',
        props: {
          style: styles.line.red,
          d: 'M75.25,66c-11.598,0-21-9.402-21-21'
        }
      },
      {
        type: 'path',
        props: {
          style: styles.line.blue,
          d: 'M145.25,66c-11.598,0-21-9.402-21-21s9.402-21,21-21s21,9.402,21,21v28'
        }
      },
      {
        type: 'path',
        props: {
          style: styles.line.green,
          d: 'M103.25,66c-11.598,0-21-9.402-21-21s9.402-21,21-21s21,9.402,21,21v7h-21'
        }
      },
      {
        type: 'path',
        props: {
          style: styles.line.red,
          d: 'M214.25,24h-27c-11.598,0-21,9.402-21,21s9.402,21,21,21h27'
        }
      }
    ],
    anime: [
      {
        type: 'path',
        props: {
          style: styles.line.blue,
          d: 'M47.3,122c-11.6,0-21-9.4-21-21s9.4-21,21-21s21,9.4,21,21v28'
        }
      },
      {
        type: 'path',
        props: {
          style: styles.line.red,
          d: 'M68.3,129V73'
        }
      },
      {
        type: 'path',
        props: {
          style: styles.line.red,
          d: 'M68.3,129v-28c0.3-11.6,9.4-21,21-21s21,9.4,21,21v28'
        }
      },
      { type: 'path', props: { style: styles.line.blue, d: 'M124.3,129V73' } },
      {
        type: 'path',
        props: {
          style: styles.line.blue,
          d: 'M124.3,129v-28c0.3-11.6,9.4-21,21-21s21,9.4,21,21v28'
        }
      },
      {
        type: 'path',
        props: {
          style: styles.line.red,
          d: 'M166.3,129v-28c0.4-11.6,9.4-21,21-21s21,9.4,21,21v28'
        }
      },
      {
        type: 'path',
        props: {
          style: styles.line.green,
          d: 'M229.3,122c-11.6,0-21-9.4-21-21s9.4-21,21-21s21,9.4,21,21v7h-21'
        }
      },
      {
        type: 'path',
        props: {
          style: styles.line.green,
          d: 'M110.25,94v7c0,11.598,9.402,21,21,21'
        }
      }
    ],
    circle: {
      type: 'ellipse',
      props: {
        style: styles.line.circle,
        cx: '110.25',
        cy: '80',
        rx: '7',
        ry: '7'
      }
    }
  }
};
