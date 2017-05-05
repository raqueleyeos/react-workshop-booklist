import TotalBooksReducer from '../../src/reducers/reducer_totalbooks';

describe('reducer_totalbooks', ()  => {


        it('it should return [] with undefined args', () => {

            var expected = [];

            var state = TotalBooksReducer(undefined, {});
            expect(state).toEqual(expected);
        });

        it('it should return [] because of ACTION_UNKOWN ', () => {

            var expected = [];

            var action = {
                type: 'ACTION_UNKNOWN',
                payload: {
                    data: 3
                }
            };

            var state = TotalBooksReducer(undefined, action);
            expect(state).toEqual(expected);
        });


        it('it should return payload.data because of action.type = TOTAL_BOOKS ', () => {

            var expected = 300;

            var action = {
                type: 'TOTAL_BOOKS',
                payload: {
                    data: 300
                }
            };

            var state = TotalBooksReducer(undefined, action);
            expect(state).toEqual(expected);
        });
});