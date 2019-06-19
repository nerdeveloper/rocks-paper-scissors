import * as application from '../src/index';

describe('Get a match for rock Paper scissors', function() {
    it('check match', function() {
        let result = application.checkMatch('rock', 'scissors');
        expect(result).toBe('rock wins');
    });
});

