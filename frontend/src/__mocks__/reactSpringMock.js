const React = require('react')

function renderPropsComponent(children) {
  return React.createElement('div', null, children()({}))
}

export function Spring(props) {
  return renderPropsComponent(props.children)
}

export function Trail(props) {
  return renderPropsComponent(props.children)
}

export const useTrail = () => [{}, () => {}]

export function Transition(props) {
  return renderPropsComponent(props.children)
}

export function Keyframes(props) {
  return renderPropsComponent(props.children)
}

export function Parallax(props) {
  return renderPropsComponent(props.children)
}
