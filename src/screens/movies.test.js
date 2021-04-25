import React from 'react';
import { shallow,mount } from 'enzyme'
import {findByTestAtrr , checkProps} from '../utills/tests'
import Movies from './movies'
import MovieCard from '../components/MovieCard'
import moxios from 'moxios'
import { MemoryRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';


const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
      push: mockHistoryPush
    })
  }));
  

const setUp =(props) => { 
     return mount(<Movies {...props }/>)
   }


describe('movie list tests' , () => { 
    // let originalUseState;
    beforeEach (() => { 
        moxios.install()

    })
    afterEach(() => {
    moxios.uninstall()

        })
   

    test('check div list exist' , () => { 
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
        const wrapper = setUp()
        const movies = findByTestAtrr(wrapper, 'movies-div');
        expect(movies.length).toBe(1)

    })


    test('inside table display, check movie info button exist' , () => { 

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
        const wrapper = setUp()
        const button = findByTestAtrr(wrapper,"show-button" );
        expect(button.length).toBe(2)



    })
    test('inside table display, check movie works and function handlePush works correctly ' , () => { 
        const response = {
            docs: [
                {
                "_id": "5cd95395de30eff6ebccde56",
                "id": 2,
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
               "episode_id": 1,
                "name": "The Lord of the Rings Series",
                "runtimeInMinutes": 558,
                "budgetInMillions": 281,
                "boxOfficeRevenueInMillions": 2917,
                "academyAwardNominations": 30,
                "academyAwardWins": 17,
                "rottenTomatesScore": 94
            }
            //  , {
            //     "_id": "5cd95395de30eff6ebccde5b",
            //     "id": 2,
            //     "name": "The Two Towers ",
            //     "runtimeInMinutes": 179,
            //     "budgetInMillions": 94,
            //     "boxOfficeRevenueInMillions": 926,
            //     "academyAwardNominations": 6,
            //     "academyAwardWins": 2,
            //     "rottenTomatesScore": 96
            // }
        ]
            , mockSetMovieList ])
            const props = {
                history: mockHistoryPush,
            }
const wrapper = setUp(props)
const materialButton = wrapper.find(Button).find('button');
        const button2 = findByTestAtrr(materialButton,"show-button2" );
        expect(button2.length).toBe(1)
        button2.simulate('click')
        expect(mockHistoryPush).toHaveBeenCalledWith('/movie/4')





    })

})