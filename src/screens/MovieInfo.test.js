import React from 'react';
import { Button, Typography } from '@material-ui/core'
import MovieInfo from './MovieInfo'
import { shallow,mount } from 'enzyme'
import {findByTestAtrr , checkProps} from '../utills/tests'
import moxios from 'moxios'


const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
      push: mockHistoryPush
    })
  }));
  

const setUp =(props) => { 

    return mount(<MovieInfo {...props}/>)
   }

   const response = {
    docs: [
        {
        "_id": "5cd95395de30eff6ebccde56",
        "name": "dasdasdasdsadasdasdas",
        "runtimeInMinutes": 558,
        "budgetInMillions": 281,
        "boxOfficeRevenueInMillions": 2917,
        "academyAwardNominations": 30,
        "academyAwardWins": 17,
        "rottenTomatesScore": 94
    } , {
        "_id": "5cd95395de30eff6ebccde5b",
        "name": "rsqwweerrtyyyyyyyyyyyyyy ",
        "runtimeInMinutes": 179,
        "budgetInMillions": 94,
        "boxOfficeRevenueInMillions": 926,
        "academyAwardNominations": 6,
        "academyAwardWins": 2,
        "rottenTomatesScore": 96
    }
]
}
   describe('Movie info test', () => { 
let props
props = { 
  match: {params: {id: 1}, isExact: true, path: "", url: ""}
}
beforeEach (() => { 
  moxios.install()
  
  moxios.wait(() => { 
    const request = moxios.requests.mostRecent()
    request.respondWith({ 
        status: 200,
        response: response
    
    })
    })
    const mockSetMovieList = jest.fn()
    React.useState = jest.fn(() => [[{
        "_id": "5cd95395de30eff6ebccde56",
        "name": "The Lord of the Rings Series",
        "runtimeInMinutes": 558,
        "budgetInMillions": 281,
        "boxOfficeRevenueInMillions": 2917,
        "academyAwardNominations": 30,
        "academyAwardWins": 17,
        "rottenTomatesScore": 94
    } , {
        "_id": "5cd95395de30eff6ebccde5b",
        "name": "The Two Towers ",
        "runtimeInMinutes": 179,
        "budgetInMillions": 94,
        "boxOfficeRevenueInMillions": 926,
        "academyAwardNominations": 6,
        "academyAwardWins": 2,
        "rottenTomatesScore": 96
    }]
    , mockSetMovieList ])

})

afterEach(() => {
moxios.uninstall()

  })
   

    test('headLine appear', () => { 

          const wrapper = setUp(props)
          const materialTyp = wrapper.find(Typography).find('h5');
                  const head = findByTestAtrr(materialTyp,"head" );
                  expect(head.length).toBe(1)


            
        })
        
        test('more Info Button displays', () => { 
          const wrapper = setUp(props)
          const materialButton = wrapper.find(Button).find('button');
                  const button = findByTestAtrr(materialButton,"backButton" );
                  expect(button.length).toBe(1)


            
        })

        
        test('handle push works fine', () => { 
          const props = {
            match: {params: {id: 1}, isExact: true, path: "", url: ""},
            history: mockHistoryPush,
        }
const wrapper = setUp(props)
const materialButton = wrapper.find(Button).find('button');
    const button2 = findByTestAtrr(materialButton,"backButton" );
    expect(button2.length).toBe(1)
    button2.simulate('click')
    expect(mockHistoryPush).toHaveBeenCalledWith('/movies')
            
     })





   })