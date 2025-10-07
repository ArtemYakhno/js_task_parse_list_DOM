"use strict";
function sortList(array) {
    array.sort((el1, el2)=>{
        const salaryEl1 = Number(el1.dataset.salary.replace(/[^0-9.-]/g, ""));
        const salaryEl2 = Number(el2.dataset.salary.replace(/[^0-9.-]/g, ""));
        return salaryEl2 - salaryEl1;
    });
    return array;
}
function getEmployees(array) {
    return array.map((el)=>{
        return {
            name: el.innerHTML,
            position: el.dataset.position,
            salary: Number(el.dataset.salary.replace(/[^0-9.-]/g, "")),
            age: +el.dataset.age
        };
    });
}
const list = document.querySelector("ul");
const employees = document.querySelectorAll("ul li");
const sortArray = sortList([
    ...employees
]);
list.innerHTML = "";
sortArray.forEach((el)=>{
    list.append(el);
});
getEmployees([
    ...employees
]);

//# sourceMappingURL=index.f75de5e1.js.map
