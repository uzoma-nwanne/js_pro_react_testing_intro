import { screen, render } from '@testing-library/react';
import WelcomeBanner from './WelcomeBanner';

describe('WelcomeBanner', () => {
    // TODO: write a series of tests for the <WelcomeBannerComponent/>
    it('gives the correct greeting when a first name is present and NOT returning', () => {
        render(<WelcomeBanner firstName={'Brian'} isReturning={false}/>)
        expect(screen.getByRole('heading')).toHaveTextContent('Welcome, Brian')
    });
    it('gives the correct greeting when a first name is present and IS returning', () => {
        render(<WelcomeBanner firstName={'Brian'} isReturning={true}/>)
        expect(screen.getByRole('heading')).toContainHTML('Welcome Back, Brian')
    });
    it('gives the correct greeting when NO first name is present and NOT returning', () => {
        render(<WelcomeBanner firstName={null} isReturning={false}/>)
        expect(screen.getByRole('heading')).toHaveTextContent('Welcome!')
    });
    it('gives the correct greeting when NO first name is present and IS returning', () => {
        render(<WelcomeBanner firstName={null} isReturning={true}/>)
        expect(screen.getByRole('heading')).toContainHTML('Welcome Back!')
    });

    // TODO: consolidate the tests above by using a truth table implementation
    it('Tests the Header in the Welcome Banner Component with a truth table', ()=>{
        const tests = [
            ['Brian', false, 'Welcome, Brian'],     ['Brian', true, 'Welcome Back, Brian'],
            [null, false, 'Welcome!'],     [null, true, 'Welcome Back!']
        ]
        let count = 0
        for(test of tests){
            let [firstName, isReturning, greeting] = test
            render(<WelcomeBanner firstName={firstName} isReturning={isReturning}/>)
            expect(screen.getAllByRole('heading')[count]).toContainHTML(greeting)
            count++
        }
    })
});
