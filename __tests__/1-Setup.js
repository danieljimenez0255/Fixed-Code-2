// Example Test
const project = require('../package.json');
describe('1-Setup', () => {

    test('package.json exists', () => {
        expect(project).toBeTruthy();
    });

    test('Name should be correct', () => {
        expect(project.name).toMatch(/^2-HTML-CSS-Assignment/);
    });

    test('Test command should be correct', () => {
        expect(project.scripts).toBeDefined();
        expect(project.scripts.test).toMatch(/jest/);
    });

    test('Git Repository is set', () => {
        expect(project.repository).toBeDefined();
        expect(project.repository.url).toMatch(/\.git$/);
        expect(project.repository.type).toBe("git");
    });

    test('Author should be First and Last Name', ()=>{
        expect(project.author).toBeDefined();
        expect(project.author).toMatch(/\w+ \w+/);
    });

    [
        "jest",
        "live-server"
    ].forEach(dependency => {
        test(`${dependency} Installed in devDependencies`, () => {
            expect(project.devDependencies).toBeDefined();
            expect(project.devDependencies[dependency]).toBeDefined();
        });
    })
});