'use strict';

function parseSalary(s) {
  return Number(s.replace(/[^0-9.-]/g, ''));
}

function sortList(list) {
  const items = Array.from(list.querySelectorAll('li'));

  items.sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
  );

  items.forEach((item) => list.append(item));
}

function getEmployees(list) {
  const items = Array.from(list.querySelectorAll('li'));

  return items.map((el) => ({
    name: el.textContent.trim(),
    position: el.dataset.position,
    salary: parseSalary(el.dataset.salary),
    age: Number(el.dataset.age),
  }));
}

const ul = document.querySelector('ul');

sortList(ul);

const employeesArr = getEmployees(ul);

// eslint-disable-next-line no-console
console.log(employeesArr);
