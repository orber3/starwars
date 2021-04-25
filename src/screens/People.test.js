import React from 'react';
import { shallow,mount } from 'enzyme'
import {findByTestAtrr , checkProps} from '../utills/tests'
import moxios from 'moxios'
import Button from '@material-ui/core/Button';
import People from './People'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MovieCard from '../components/MovieCard';



const response = {
  docs: [
      {
      "_id": "123456789",
      "name": "qwerty",
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

//mocking the history.push
const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
      push: mockHistoryPush
    })
  }));

//write the tests
  

const setUp =(props) => { 

    return mount(<People {...props }/>)
  }

 describe('testing card PropTypes works as it should' , () => { 

  it('should not show error' , () => { 
        const expectedProps = {
           
 upperRight: '3232',
 mainText: 'wwww',
 name: 'nameee',
 subHeader: 'header',
 id: 222 , 
            }
        
        const propsError = checkProps(MovieCard, expectedProps)
        expect(propsError).toBe(undefined)
      })


    })


    

  describe('testing People Page',() => { 
    beforeEach (() => { 
      moxios.install()
   
        
    const mocksetDataList = jest.fn()
    React.useState = jest.fn(() => [[{
        "created": "1234",
        "name": "The Lord of the Rings Series",
        "birth_year": '558',
        "height": 281,
        "skin_color": 2917,
        "academyAwardNominations": 30,
        "academyAwardWins": 17,
        "rottenTomatesScore": 94
    } , {
      "created": "8888",
      "name": "or the great",
      "birth_year": '444',
      "height": 333,
      "skin_color": 'blue',
        "academyAwardNominations": 6,
        "academyAwardWins": 2,
        "rottenTomatesScore": 96
    }]
    , mocksetDataList ])


  })

  afterEach(() => {
  moxios.uninstall()
  })


        test('testing people cards exists according to the length of the axios response' , () => { 

          const wrapper = setUp()
          moxios.wait(() => { 
            const request = moxios.requests.mostRecent()
            request.respondWith({ 
                status: 200,
                response: response
            
            })
            })
          const materialTyp = wrapper.find(Paper).find('div');

          
          const card = findByTestAtrr(materialTyp,"card" );
          expect(card.length).toBe(response.docs.length)

        })


  

  })