import React, { PureComponent, PropTypes } from 'react';
import Prism from 'prismjs';

export class CodeBlock extends PureComponent {
  componentDidMount() {
    this.hightlight();
  }

  componentDidUpdate() {
    this.hightlight();
  }

  hightlight() {
    Prism.highlightElement(this.prismNode, this.props.async);
    if (this.props.plugins) {
      this.props.plugins.map(plugin => plugin.func(Prism));
    }
  }

  render() {
    return (
      <pre
        className={
          this.props.plugins
            ? this.props.plugins.map(plugin => plugin.title).join(' ')
            : ''
        }
        data-line={this.props.dataLine || ''}
        data-dependecies={this.props.dataDependecies || ''}
        data-user={this.props.dataUser || ''}
        data-host={this.props.dataHost || ''}
        data-prompt={this.props.dataPrompt || ''}
        data-output={this.props.dataOutput || ''}
      >
        <code
          ref={prismNode => this.prismNode = prismNode}
          className={`language-${this.props.language}`}
        >
          {this.props.children}
        </code>
      </pre>
    );
  }
}

Prism.propTypes = {
  className: PropTypes.string,
  language: PropTypes.string,
  plugins: PropTypes.arrayOf(
    PropTypes.shape({
      title: React.PropTypes.string,
      func: React.PropTypes.func
    })
  )
};

export default CodeBlock;
