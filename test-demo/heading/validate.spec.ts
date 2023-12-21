import { MakeaHeading } from "./heading"
describe('MakeaHeading a heading for test', ()=>{
    it('creates a h1 heading', ()=>{
        expect(MakeaHeading('Welcome to my page', 1)).toBe('<h1>Welcome to my page</h1>')
    })
})

it('creates a h2 heading ', ()=>{
    expect(MakeaHeading('Heading for second page', 2)).toBe('<h2>Heading for second page</h2>')
})