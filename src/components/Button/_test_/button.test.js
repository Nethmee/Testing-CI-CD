import React from 'react';
import ReactDOM from 'react-dom';
import  Button from './../button';
import  {isTsAnyKeyword} from '@babel/types';
import {render,cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import renderer from "react-test-renderer"

afterEach(cleanup)
//checking if the component renders without crashing

it('renders without crashing', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<Button></Button>,div)
})


it('renders the button correctly',()=>{

    const {getByTestId} = render(<Button label={'click this test'}></Button>)
    expect(getByTestId('button')).toHaveTextContent('click this test')
})

it('renders the button correctly',()=>{

    const {getByTestId} = render(<Button label={'Save'}></Button>)
    expect(getByTestId('button')).toHaveTextContent('Save')
})


//snapshot testing
it("matches snapshot",()=>{
  const tree =  renderer.create(<Button label="save me"></Button>).toJSON();
  expect(tree).toMatchSnapshot();
}
)

it("it matches the snapshot 2", ()=>{

    //they have a snapshot 
    const tree = renderer.create(<Button></Button>).toJSON();
    expect(tree).toMatchSnapshot()
})

 
