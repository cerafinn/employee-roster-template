const Intern = require('../lib/Intern')

// test role
test('check that getRole gets the role Intern', () => {
  const role = 'Intern';
  const instanceIntern = new Intern('Anna', 1, 'test@example.com', 'schoolName');
  expect(instanceIntern.getRole()).toBe(role);
});

// test school setting and getting
test('setting school through the app', () => {
  const school = 'schoolName';
  const instanceIntern = new Intern('Anna', 1, 'test@example.com', school);
  expect(instanceIntern.school).toBe(school);
});

test('check that getSchool gets the school', () => {
  const school = 'schoolName';
  const instanceIntern = new Intern('Anna', 1, 'test@example.com', school);
  expect(instanceIntern.getSchool()).toBe(school);
});