import * as application from '../src/index';

describe('Get a match for rock Paper scissors', function() {
    it('check match', function() {
        let result = application.checkMatch('rock', 'scissors');
        expect(result).toBe('rock wins');
    });
});

it('check match', function() {
    let result = application.checkMatch('rock', 'paper');
    expect(result).toBe('Rock losses');
});

it('check players', function() {
    let result = application.checkPlayers('rock', 'paper');
    expect(result).toString;
});

it('check players', function() {
    let result = application.checkPlayers('rock', 'paper');
    expect(result).toBeDefined;
});

it('check the loop', function() {
    let result = application.myLoop();
    expect(result).toBeDefined;
});
it('check the loop', function() {
    let result = application.myLoop();
    expect(result).toString;
});
