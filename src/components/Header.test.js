import React from 'react';
import { shallow } from 'enzyme'
import {findByTestAtrr , checkProps} from '../utills/tests'
import Header from './Header'


const mockSetanchorEl = jest.fn()
//allows  using Rect useState destructure
jest.mock('react', () => ( { 
    ...jest.requireActual('react'),
    useState: (initialState) => [initialState,mockSetanchorEl]
}))



const setUp =() => { 
 return shallow(<Header/>)
}

describe ('Header render tests' , () => { 

    test("render header Component ", () => { 
        const wrapper = setUp()
        const header = findByTestAtrr(wrapper, 'header-comp');
        expect(header.length).toBe(1)

    })

    test("render searchBox div ", () => { 
        const wrapper = setUp()
        const searchBox = findByTestAtrr(wrapper, 'header-search');
        expect(searchBox.length).toBe(1)

    })

    test("render Links div ", () => { 
        const wrapper = setUp()
        const links = findByTestAtrr(wrapper, 'header-links');
        expect(links.length).toBe(1)

    })


// after connecting the api's
describe.skip('activate search component ' , () => { 



})

describe('test menu ' , () => { 
    let originalUseState;
    beforeEach (() => { 

        originalUseState=React.useState
        mockSetanchorEl.mockClear()
    })
afterEach(() => {
React.useState= originalUseState
})
    it('catch a menu button click', () => { 
        const wrapper = setUp()
        const menuButton = findByTestAtrr(wrapper, 'menu-button');
        menuButton.simulate("click", {event() {}})
        expect(mockSetanchorEl).toHaveBeenCalled();
    


    })



})



} )