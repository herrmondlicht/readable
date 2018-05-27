import { shallow as enzymeShallow, mount as enzymeMount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from 'react'
import { PropTypes } from "prop-types";

configure({ adapter: new Adapter() });

export const shallow = (ReactComponent) => ({
    withProps: (props) => enzymeShallow(<ReactComponent  {...props} />)
  })

export const mount = (ReactComponent) => ({
    withProps: (props) => enzymeMount(<ReactComponent  {...props} />),
})
