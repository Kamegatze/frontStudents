let checkSubject = false;
let checkTeachers = false;
let checkStudents = false;
let checkGroupFaculty = false;
let checkOneControlWeek = false;
let checkTwoControlWeek = false;
let checkThreeControlWeek = false;

let checkFormSubject = false;
let checkFormTeacher = false;
let checkFormStudent = false;
let checkFormGroupFaculty = false;
let checkFormOneControlWeek = false;
let checkFormTwoControlWeek = false;
let checkFormThreeControlWeek = false;

let Subject = [];
let Teacher = [];
let Student = [];
let GroupFaculty = [];
let OneControlWeek = [];
let TwoControlWeek = [];
let ThreeControlWeek = [];
let formStudy = [];
let Semesters = [];

sendRequst('GET', 'http://localhost:8080/semesters').then(data => {
    for (let i = 0; i < data.length; i++) {
        Semesters.push(data[i])}}).catch(err => console.log(err));

sendRequst('GET', 'http://localhost:8080/subject').then(data => {
    for (let i = 0; i < data.length; i++) {
        Subject.push(data[i])}}).catch(err => console.log(err));

sendRequst('GET', 'http://localhost:8080/teacher').then(data => {
    for (let i = 0; i < data.length; i++) {
        Teacher.push(data[i])}}).catch(err => console.log(err));

sendRequst('GET', 'http://localhost:8080/students').then(data => {
    for (let i = 0; i < data.length; i++) {
        Student.push(data[i])}}).catch(err => console.log(err));

sendRequst('GET', 'http://localhost:8080/groupFaculty').then(data => {
    for (let i = 0; i < data.length; i++) {
        GroupFaculty.push(data[i])}}).catch(err => console.log(err));

sendRequst('GET', 'http://localhost:8080/oneControlWeek').then(data => {
    for (let i = 0; i < data.length; i++) {
        OneControlWeek.push(data[i])}}).catch(err => console.log(err));

sendRequst('GET', 'http://localhost:8080/twoControlWeek').then(data => {
    for (let i = 0; i < data.length; i++) {
        TwoControlWeek.push(data[i])}}).catch(err => console.log(err));

sendRequst('GET', 'http://localhost:8080/threeControlWeek').then(data => {
    for (let i = 0; i < data.length; i++) {
        ThreeControlWeek.push(data[i])}}).catch(err => console.log(err));

sendRequst('GET', 'http://localhost:8080/formStudy').then(data => {
    for (let i = 0; i < data.length; i++) {
        formStudy.push(data[i])}}).catch(err => console.log(err));



let regExp = /[а-яА-Я]/g

function sendRequst(method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);

        xhr.responseType = "json";

        xhr.setRequestHeader("Content-type", "application/json");

        xhr.onload = () => {
            if(xhr.status >= 400) {
                reject(xhr.response);
            }
            else {
                resolve(xhr.response);
            }
        }

        xhr.onerror = () => {
            reject(xhr.response);
        }

        xhr.send(JSON.stringify(body));
    });
}

function parsingTh(data = []) {
    let tableRecord = document.getElementById("header");
    for (let i = 0; i < data.length; i++) {
        let tableHeader = document.createElement('th')
        tableHeader.className = 'table-header';
        if(data[i] !== 'id'){
            tableHeader.innerHTML = `${data[i]}`;
            tableRecord.append(tableHeader);
        }
        else{
            tableHeader.innerHTML = '№';
            tableRecord.append(tableHeader);
        }
    }

    let tableHandlerChange = document.createElement('th');
    tableHandlerChange.className = 'table-header';
    tableHandlerChange.innerHTML = 'изменение записи';
    tableRecord.append(tableHandlerChange);

    let tableHandlerDelete = document.createElement('th');
    tableHandlerDelete.className = 'table-header';
    tableHandlerDelete.innerHTML = 'удаление записи';
    tableRecord.append(tableHandlerDelete);

    let tagTable = document.getElementById('tagTable');
    tagTable.style.border = '1px solid black';
}

function parsingTdForSubject(data = []) {
    let table = document.getElementById("table");
    Subject = [];
    for (let i = 0; i < data.length; i++) {

        if(Subject.length < data.length){
            Subject.push(data[i]);
        }

        let tableRecord = document.createElement('tr');
        tableRecord.className = 'table-record';

        let tableData1 = document.createElement('td');
        let divData1 = document.createElement('div');
        divData1.className = 'center';
        divData1.innerHTML = `${i + 1}`;
        tableData1.append(divData1);

        let tableData2 = document.createElement('td');
        let divData2 = document.createElement('div');
        divData2.className = 'center';
        divData2.innerHTML = `${data[i].title}`;
        tableData2.append(divData2);

        let tableData3 = document.createElement('td');
        let divData3 = document.createElement('div');
        divData3.className = 'center';
        let buttonChange = document.createElement('button');
        buttonChange.innerHTML = '...';
        buttonChange.id = `update${i + 1}`;
        divData3.append(buttonChange);
        tableData3.append(divData3);

        let tableData4 = document.createElement('td');
        let divData4 = document.createElement('div');
        divData4.className = 'center';
        let buttonDelete = document.createElement('button');
        buttonDelete.id = `delete${i + 1}`;
        buttonDelete.innerHTML = '...';
        divData4.append(buttonDelete);
        tableData4.append(divData4);

        tableRecord.append(tableData1);
        tableRecord.append(tableData2);
        tableRecord.append(tableData3);
        tableRecord.append(tableData4);
        table.append(tableRecord);
    }
}

function deleteTable() {
    let tableHeader = document.getElementsByClassName("table-header");

    while (tableHeader.length > 0) {
        tableHeader[0].remove();
    }

    let tableRecord = document.getElementsByClassName("table-record");

    while (tableRecord.length > 0) {
        tableRecord[0].remove();
    }

    let tagTable = document.getElementById('tagTable');
    tagTable.style.border = '';
}

function parsingTdForTeacher(data = []) {
    let table = document.getElementById("table");
    Teacher = [];
    for (let i = 0; i < data.length; i++) {

        if(Teacher.length < data.length){
            Teacher.push(data[i]);
        }

        let tableRecord = document.createElement('tr');
        tableRecord.className = 'table-record';

        let tableData1 = document.createElement('td');
        let divData1 = document.createElement('div');
        divData1.className = 'center';
        divData1.innerHTML = `${i + 1}`;
        tableData1.append(divData1);

        let tableData2 = document.createElement('td');
        let divData2 = document.createElement('div');
        divData2.className = 'center';
        divData2.innerHTML = `${data[i].lastName}`;
        tableData2.append(divData2);

        let tableData3 = document.createElement('td');
        let divData3 = document.createElement('div');
        divData3.className = 'center';
        divData3.innerHTML = `${data[i].firstName}`;
        tableData3.append(divData3);

        let tableData4 = document.createElement('td');
        let divData4 = document.createElement('div');
        divData4.className = 'center';
        divData4.innerHTML = `${data[i].patronymic}`;
        tableData4.append(divData4);

        let tableData5 = document.createElement('td');
        let divData5 = document.createElement('div');
        divData5.className = 'center';
        divData5.innerHTML = `${data[i].email}`;
        tableData5.append(divData5);

        let tableData6 = document.createElement('td');
        let divData6 = document.createElement('div');
        divData6.className = 'center';
        let buttonChange = document.createElement('button');
        buttonChange.innerHTML = '...';
        buttonChange.id = `update${i + 1}`;

        divData6.append(buttonChange);
        tableData6.append(divData6);

        let tableData7 = document.createElement('td');
        let divData7 = document.createElement('div');
        divData7.className = 'center';
        let buttonDelete = document.createElement('button');
        buttonDelete.id = `delete${i + 1}`
        buttonDelete.innerHTML = '...';
        divData7.append(buttonDelete);
        tableData7.append(divData7);

        tableRecord.append(tableData1);
        tableRecord.append(tableData2);
        tableRecord.append(tableData3);
        tableRecord.append(tableData4);
        tableRecord.append(tableData5);
        tableRecord.append(tableData6);
        tableRecord.append(tableData7);
        table.append(tableRecord);
    }
}


function parsingTdForStudents(dataStudents = [], dataForm = [], dataGroup = []) {
    let table = document.getElementById("table");
    Student = [];
    for (let i = 0; i < dataStudents.length; i++) {

        if(Student.length < dataStudents.length){
            Student.push(dataStudents[i]);
        }

        let tableRecord = document.createElement('tr');
        tableRecord.className = 'table-record';

        let tableData1 = document.createElement('td');
        let divData1 = document.createElement('div');
        divData1.className = 'center';
        divData1.innerHTML = `${i + 1}`;
        tableData1.append(divData1);

        let tableData2 = document.createElement('td');
        let divData2 = document.createElement('div');
        divData2.className = 'center';
        divData2.innerHTML = `${dataStudents[i].lastName}`;
        tableData2.append(divData2);

        let tableData3 = document.createElement('td');
        let divData3 = document.createElement('div');
        divData3.className = 'center';
        divData3.innerHTML = `${dataStudents[i].firstName}`;
        tableData3.append(divData3);

        let tableData4 = document.createElement('td');
        let divData4 = document.createElement('div');
        divData4.className = 'center';
        divData4.innerHTML = `${dataStudents[i].patronymic}`;
        tableData4.append(divData4);

        let tableData5 = document.createElement('td');
        let indexForm = 0;
        for (let j = 0; dataStudents[i].formStudyId !== dataForm[j].id; j++) {
            indexForm = j + 1;
        }
        let divData5 = document.createElement('div');
        divData5.className = 'center';
        divData5.innerHTML = `${dataForm[indexForm].title}`;
        tableData5.append(divData5);

        let indexGroup = 0;
        let tableData6 = document.createElement('td');
        for (let j = 0; dataStudents[i].groupId !== dataGroup[j].id; j++) {
            indexGroup = j + 1;
        }
        let divData6 = document.createElement('div');
        divData6.className = 'center';
        divData6.innerHTML = `${dataGroup[indexGroup].title}`;
        tableData6.append(divData6);

        let tableData7 = document.createElement('td');
        let divData7 = document.createElement('div');
        divData7.className = 'center';
        divData7.innerHTML = `${dataStudents[i].email}`;
        tableData7.append(divData7);

        let tableData8 = document.createElement('td');
        let divData8 = document.createElement('div');
        divData8.className = 'center';
        let buttonChange = document.createElement('button');
        buttonChange.innerHTML = '...';
        buttonChange.id = `update${i + 1}`;
        divData8.append(buttonChange);
        tableData8.append(divData8);

        let tableData9 = document.createElement('td');
        let divData9 = document.createElement('div');
        divData9.className = 'center';
        let buttonDelete = document.createElement('button');
        buttonDelete.id = `delete${i + 1}`;
        buttonDelete.innerHTML = '...';
        divData9.append(buttonDelete);
        tableData9.append(divData9);

        tableRecord.append(tableData1);
        tableRecord.append(tableData2);
        tableRecord.append(tableData3);
        tableRecord.append(tableData4);
        tableRecord.append(tableData5);
        tableRecord.append(tableData6);
        tableRecord.append(tableData7);
        tableRecord.append(tableData8);
        tableRecord.append(tableData9);
        table.append(tableRecord);
    }
    console.log(Student);
}

function parsingTdForGroup(dataGroup = [], dataSpecialization = []) {
    let table = document.getElementById("table");
    GroupFaculty = [];
    for (let i = 0; i < dataGroup.length; i++) {

        if(GroupFaculty.length < dataGroup.length){
            GroupFaculty.push(dataGroup[i]);
        }

        let tableRecord = document.createElement('tr');
        tableRecord.className = 'table-record';

        let tableData1 = document.createElement('td');
        let divData1 = document.createElement('div');
        divData1.className = 'center';
        divData1.innerHTML = `${i + 1}`;
        tableData1.append(divData1);

        let tableData2 = document.createElement('td');
        let divData2 = document.createElement('div');
        divData2.className = 'center';
        divData2.innerHTML = `${dataGroup[i].title}`;
        tableData2.append(divData2);

        let tableData3 = document.createElement('td');
        let indexSpecialization = 0;
        for (let j = 0; dataGroup[i].specializationId !== dataSpecialization[j].id; j++) {
            indexSpecialization = j + 1;
        }
        let divData3 = document.createElement('div');
        divData3.className = 'center';
        divData3.innerHTML = `${dataSpecialization[indexSpecialization].title}`;
        tableData3.append(divData3);

        let tableData4 = document.createElement('td');
        let divData4 = document.createElement('div');
        divData4.className = 'center';
        let buttonChange = document.createElement('button');
        buttonChange.innerHTML = '...';
        buttonChange.id = `update${i + 1}`;
        divData4.append(buttonChange);
        tableData4.append(divData4);

        let tableData5 = document.createElement('td');
        let divData5 = document.createElement('div');
        divData5.className = 'center';
        let buttonDelete = document.createElement('button');
        buttonDelete.id = `delete${i + 1}`;
        buttonDelete.innerHTML = '...';

        divData5.append(buttonDelete);
        tableData5.append(divData5);
        tableRecord.append(tableData1);
        tableRecord.append(tableData2);
        tableRecord.append(tableData3);
        tableRecord.append(tableData4);
        tableRecord.append(tableData5);
        table.append(tableRecord);
    }
}

function parsingTdForControlWeek(dataControlWeek = [], dataStudent = [], dataSubject = [], dataTeacher = [], dataGroup = []) {
    let table = document.getElementById("table");
    OneControlWeek = [];
    TwoControlWeek = [];
    ThreeControlWeek = [];
    for (let i = 0; i < dataControlWeek.length; i++) {

        if(checkOneControlWeek && OneControlWeek.length < dataControlWeek.length){
            OneControlWeek.push(dataControlWeek[i]);
        }
        else if(checkTwoControlWeek && TwoControlWeek.length < dataControlWeek.length){
            TwoControlWeek.push(dataControlWeek[i]);
        }
        else if(checkThreeControlWeek && ThreeControlWeek.length < dataControlWeek.length){
            ThreeControlWeek.push(dataControlWeek[i]);
        }

        let tableRecord = document.createElement('tr');
        tableRecord.className = 'table-record';

        let tableData = document.createElement('td');
        let divData = document.createElement('div');
        divData.innerHTML = `${i + 1}`;
        divData.className = 'center'
        tableData.append(divData);

        let tableData1 = document.createElement('td');
        let indexStudent = 0;
        for (let j = 0; dataControlWeek[i].studentId !== dataStudent[j].id; j++) {
            indexStudent = j + 1;
        }

        let divData1 = document.createElement('div');
        divData1.className = 'center';
        divData1.innerHTML = `${dataStudent[indexStudent].lastName} ${dataStudent[indexStudent].firstName} ${dataStudent[indexStudent].patronymic}`;
        tableData1.append(divData1);

        let indexGroup = 0;
        for (let j = 0; dataStudent[indexStudent].groupId !== dataGroup[j].id; j++) {
            indexGroup = j + 1;
        }

        let tableDataGroup = document.createElement('td');
        let divDataGroup = document.createElement('div');
        divDataGroup.className = 'center';
        divDataGroup.innerHTML = `${dataGroup[indexGroup].title}`
        tableDataGroup.append(divDataGroup);

        let tableData2 = document.createElement('td');
        let indexSubject = 0;
        for (let j = 0; dataControlWeek[i].subjectId !== dataSubject[j].id; j++) {
            indexSubject = j + 1;
        }

        let divData2 = document.createElement('div');
        divData2.className = 'center';
        divData2.innerHTML = `${dataSubject[indexSubject].title}`;
        tableData2.append(divData2);

        let tableData3 = document.createElement('td');
        let indexTeacher = 0;
        for (let j = 0; dataControlWeek[i].teacherId !== dataTeacher[j].id; j++) {
            indexTeacher = j + 1;
        }

        let divData3 = document.createElement('div');
        divData3.className = 'center';
        divData3.innerHTML = `${dataTeacher[indexTeacher].lastName} ${dataTeacher[indexTeacher].firstName} ${dataTeacher[indexTeacher].patronymic}`;
        tableData3.append(divData3);

        let tableData4 = document.createElement('td');
        let divData4 = document.createElement('div');
        divData4.className = 'center';
        divData4.innerHTML = `${dataControlWeek[i].semesterId}`;
        tableData4.append(divData4);

        let tableData5 = document.createElement('td');
        let divData5 = document.createElement('div');
        divData5.className = 'center';
        divData5.innerHTML = `${dataControlWeek[i].mark}`;
        tableData5.append(divData5)

        let tableDataButton = document.createElement('td');
        let buttonChanges = document.createElement('button');
        let divDataButton = document.createElement('div');
        divDataButton.className = 'center';
        buttonChanges.innerHTML = '...';
        buttonChanges.id = `update${i + 1}`;
        divDataButton.append(buttonChanges);
        tableDataButton.append(divDataButton);

        let tableData6 = document.createElement('td');
        let divData6 = document.createElement('div');
        divData6.className = 'center';
        let buttonDelete = document.createElement('button');
        buttonDelete.id = `delete${i + 1}`;
        buttonDelete.innerHTML = '...';
        divData6.append(buttonDelete);
        tableData6.append(divData6);

        tableRecord.append(tableData);
        tableRecord.append(tableData1);
        tableRecord.append(tableDataGroup);
        tableRecord.append(tableData2);
        tableRecord.append(tableData3);
        tableRecord.append(tableData4);
        tableRecord.append(tableData5);
        tableRecord.append(tableDataButton);
        tableRecord.append(tableData6);
        table.append(tableRecord);
    }

    console.log(OneControlWeek);
    console.log(TwoControlWeek);
    console.log(ThreeControlWeek);
}

function deleteForm() {
    let form = document.getElementsByClassName('deleteForm');
    while (form.length) {
        form[0].remove();
    }

    let divForm = document.getElementById('formSend');
    divForm.style.boxShadow = '';
}

function formForAddSubject(){

    let formDiv = document.getElementById("formSend");
    formDiv.style = 'box-shadow: 0 0 5px 2px;';

    let form = document.createElement('form');
    form.className = 'deleteForm';

    let divFlex = document.createElement('div');
    divFlex.className = 'dataSending';

    // let divTextInputId = document.createElement('div');
    let divTextInputTitle = document.createElement('div');
    // divTextInputId.className = 'formInputText';
    divTextInputTitle.className = 'formInputText';

    // let tagPId = document.createElement('p');
    // tagPId.innerHTML = 'Введите id предмета';

    let tagPTitle = document.createElement('p');
    tagPTitle.innerHTML = 'Введите название предмета';

    // divTextInputId.append(tagPId);
    divTextInputTitle.append(tagPTitle);

    // let inputId = document.createElement('input');
    // inputId.inputMode = 'number';
    // inputId.id = 'inputId';
    // inputId.min = '1';
    // inputId.size = '62';

    // let inputIdDiv = document.createElement('div');
    // inputIdDiv.className = 'formInput';
    // inputIdDiv.append(inputId);

    let inputTitle = document.createElement('input');
    inputTitle.inputMode = 'text';
    inputTitle.id = 'inputTitle';
    inputTitle.size = '62';

    let inputTitleDiv = document.createElement('div');
    inputTitleDiv.className = 'formInput';
    inputTitleDiv.append(inputTitle);

    let buttonSend = document.createElement('button');
    buttonSend.type = 'button';
    buttonSend.innerHTML = 'Добавить запись';
    buttonSend.id = 'btnSend';

    let buttonClear = document.createElement('button');
    buttonClear.type = 'button';
    buttonClear.innerHTML = 'Очистить поля';
    buttonClear.id = 'btnClear';

    let buttonBack = document.createElement('button');
    buttonBack.type = 'button';
    buttonBack.innerHTML = 'Вернуться назад';
    buttonBack.id = 'btnBack';

    let divButton = document.createElement('div');
    divButton.className = 'processingBtn';

    let heading = document.createElement('p');
    heading.className = 'heading';
    heading.innerHTML = 'Форма добавление';

    divButton.append(buttonSend);
    divButton.append(buttonBack);
    divButton.append(buttonClear);

    divFlex.append(heading);
    // divFlex.append(divTextInputId);
    // divFlex.append(inputIdDiv);
    divFlex.append(divTextInputTitle);
    divFlex.append(inputTitleDiv);
    divFlex.append(divButton);
    form.append(divFlex);
    formDiv.append(form);
}

function formForAddTeacher() {
    let formDiv = document.getElementById("formSend");
    formDiv.style = 'box-shadow: 0 0 5px 2px;';

    let form = document.createElement('form');
    form.className = 'deleteForm';

    let divFlex = document.createElement('div');
    divFlex.className = 'dataSending';

    // let divTextInputId = document.createElement('div');
    let divTextLastName = document.createElement('div');
    // divTextInputId.className = 'formInputText';
    divTextLastName.className = 'formInputText';

    let divTextFirstName = document.createElement('div');
    divTextFirstName.className = 'formInputText';

    let divTextPatronymic = document.createElement('div');
    divTextPatronymic.className = 'formInputText';

    let divTextEmail = document.createElement('div');
    divTextEmail.className = 'formInputText';


    // let tagPId = document.createElement('p');
    // tagPId.innerHTML = 'Введите id предмета';

    let tagPLastName = document.createElement('p');
    tagPLastName.innerHTML = 'Введите Фамилию';

    let tagPFirstName = document.createElement('p');
    tagPFirstName.innerHTML = 'Введите Имя';

    let tagP = document.createElement('p');
    tagP.innerHTML = 'Введите Отчество';

    let tagPEmail = document.createElement('p');
    tagPEmail.innerHTML = 'Введите email';

    // divTextInputId.append(tagPId);
    divTextLastName.append(tagPLastName);
    divTextFirstName.append(tagPFirstName);
    divTextPatronymic.append(tagP);
    divTextEmail.append(tagPEmail);

    // let inputId = document.createElement('input');
    // inputId.inputMode = 'number';
    // inputId.id = 'inputId';
    // inputId.min = '1';
    // inputId.size = '62';

    // let inputIdDiv = document.createElement('div');
    // inputIdDiv.className = 'formInput';
    // inputIdDiv.append(inputId);

    let inputLastName = document.createElement('input');
    inputLastName.inputMode = 'text';
    inputLastName.id = 'inputTitle';
    inputLastName.size = '62';

    let inputFirstName = document.createElement('input');
    inputFirstName.inputMode = 'text';
    inputFirstName.id = 'inputTitle';
    inputFirstName.size = '62';

    let inputPatronymic = document.createElement('input');
    inputPatronymic.inputMode = 'text';
    inputPatronymic.id = 'inputTitle';
    inputPatronymic.size = '62';

    let inputEmail = document.createElement('input');
    inputEmail.inputMode = 'text';
    inputEmail.id = 'inputTitle';
    inputEmail.size = '62';


    let inputLastNameDiv = document.createElement('div');
    inputLastNameDiv.className = 'formInput';
    inputLastNameDiv.append(inputLastName);

    let inputFirstNameDiv = document.createElement('div');
    inputFirstNameDiv.className = 'formInput';
    inputFirstNameDiv.append(inputFirstName);

    let inputPatronymicDiv = document.createElement('div');
    inputPatronymicDiv.className = 'formInput';
    inputPatronymicDiv.append(inputPatronymic);

    let inputEmailDiv = document.createElement('div');
    inputEmailDiv.className = 'formInput';
    inputEmailDiv.append(inputEmail);

    let buttonSend = document.createElement('button');
    buttonSend.type = 'button';
    buttonSend.innerHTML = 'Добавить запись';
    buttonSend.id = 'btnSend';

    let buttonClear = document.createElement('button');
    buttonClear.type = 'button';
    buttonClear.innerHTML = 'Очистить поля';
    buttonClear.id = 'btnClear';

    let buttonBack = document.createElement('button');
    buttonBack.type = 'button';
    buttonBack.innerHTML = 'Вернуться назад';
    buttonBack.id = 'btnBack';

    let divButton = document.createElement('div');
    divButton.className = 'processingBtn';

    let heading = document.createElement('p');
    heading.className = 'heading';
    heading.innerHTML = 'Форма добавление';

    divButton.append(buttonSend);
    divButton.append(buttonBack);
    divButton.append(buttonClear);

    divFlex.append(heading);
    // divFlex.append(divTextInputId);
    // divFlex.append(inputIdDiv);
    divFlex.append(divTextLastName);
    divFlex.append(inputLastNameDiv);
    divFlex.append(divTextFirstName);
    divFlex.append(inputFirstNameDiv);
    divFlex.append(divTextPatronymic);
    divFlex.append(inputPatronymicDiv);
    divFlex.append(divTextEmail);
    divFlex.append(inputEmailDiv);
    divFlex.append(divButton);
    form.append(divFlex);
    formDiv.append(form);
}

function formForAddStudent() {
    let formDiv = document.getElementById("formSend");
    formDiv.style = 'box-shadow: 0 0 5px 2px;';

    let form = document.createElement('form');
    form.className = 'deleteForm';

    let divFlex = document.createElement('div');
    divFlex.className = 'dataSending';

    // let divTextInputId = document.createElement('div');
    let divTextLastName = document.createElement('div');
    // divTextInputId.className = 'formInputText';
    divTextLastName.className = 'formInputText';

    let divTextFirstName = document.createElement('div');
    divTextFirstName.className = 'formInputText';

    let divTextPatronymic = document.createElement('div');
    divTextPatronymic.className = 'formInputText';

    let divTextEmail = document.createElement('div');
    divTextEmail.className = 'formInputText';

    let divTextGroup = document.createElement('div');
    divTextGroup.className = 'formInputText';

    let divTextFormStudy = document.createElement('div');
    divTextFormStudy.className = 'formInputText';

    // let tagPId = document.createElement('p');
    // tagPId.innerHTML = 'Введите id предмета';

    let tagPLastName = document.createElement('p');
    tagPLastName.innerHTML = 'Введите Фамилию';

    let tagPFirstName = document.createElement('p');
    tagPFirstName.innerHTML = 'Введите Имя';

    let tagP = document.createElement('p');
    tagP.innerHTML = 'Введите Отчество';

    let  tagPFormStudy = document.createElement('p');
    tagPFormStudy.innerHTML = 'Введите форму обучения';

    let tagPGroup = document.createElement('p');
    tagPGroup.innerHTML = 'Введитее группу'

    let tagPEmail = document.createElement('p');
    tagPEmail.innerHTML = 'Введите email';

    // divTextInputId.append(tagPId);
    divTextLastName.append(tagPLastName);
    divTextFirstName.append(tagPFirstName);
    divTextPatronymic.append(tagP);
    divTextEmail.append(tagPEmail);
    divTextFormStudy.append(tagPFormStudy);
    divTextGroup.append(tagPGroup);

    // let inputId = document.createElement('input');
    // inputId.inputMode = 'number';
    // inputId.id = 'inputId';
    // inputId.min = '1';
    // inputId.size = '62';

    // let inputIdDiv = document.createElement('div');
    // inputIdDiv.className = 'formInput';
    // inputIdDiv.append(inputId);

    let inputLastName = document.createElement('input');
    inputLastName.inputMode = 'text';
    inputLastName.id = 'inputTitle';
    inputLastName.size = '62';

    let inputFirstName = document.createElement('input');
    inputFirstName.inputMode = 'text';
    inputFirstName.id = 'inputTitle';
    inputFirstName.size = '62';

    let inputPatronymic = document.createElement('input');
    inputPatronymic.inputMode = 'text';
    inputPatronymic.id = 'inputTitle';
    inputPatronymic.size = '62';

    let inputEmail = document.createElement('input');
    inputEmail.inputMode = 'text';
    inputEmail.id = 'inputTitle';
    inputEmail.size = '62';

    let selectFormStudy = document.createElement('select');
    selectFormStudy.id = 'selectFormStudy';
    let optionSelectValueFormStudy = document.createElement('option');
    optionSelectValueFormStudy.selected;
    optionSelectValueFormStudy.innerHTML = 'Выберите форму обучения';
    selectFormStudy.append(optionSelectValueFormStudy);
    for (let i = 0; i < formStudy.length ; i++) {
        let option = document.createElement('option');
        option.value = formStudy[i].id;
        option.innerHTML = formStudy[i].title;
        selectFormStudy.append(option);
    }

    let selectGroup = document.createElement('select');
    selectGroup.id = 'selectGroup';
    let optionSelectValueGroup = document.createElement('option');
    optionSelectValueGroup.selected;
    optionSelectValueGroup .innerHTML = 'Выберите предмет';
    selectGroup.append(optionSelectValueGroup);
    for (let i = 0; i < GroupFaculty.length ; i++) {
        let option = document.createElement('option');
        option.value = GroupFaculty[i].id;
        option.innerHTML = GroupFaculty[i].title;
        selectGroup.append(option);
    }



    let inputLastNameDiv = document.createElement('div');
    inputLastNameDiv.className = 'formInput';
    inputLastNameDiv.append(inputLastName);

    let inputFirstNameDiv = document.createElement('div');
    inputFirstNameDiv.className = 'formInput';
    inputFirstNameDiv.append(inputFirstName);

    let inputPatronymicDiv = document.createElement('div');
    inputPatronymicDiv.className = 'formInput';
    inputPatronymicDiv.append(inputPatronymic);

    let inputEmailDiv = document.createElement('div');
    inputEmailDiv.className = 'formInput';
    inputEmailDiv.append(inputEmail);

    let selectFormStudyDiv = document.createElement('div');
    selectFormStudyDiv.className = 'formInput';
    selectFormStudyDiv.append(selectFormStudy);

    let selectGroupDiv = document.createElement('div');
    selectGroupDiv.className = 'formInput';
    selectGroupDiv.append(selectGroup);



    let buttonSend = document.createElement('button');
    buttonSend.type = 'button';
    buttonSend.innerHTML = 'Добавить запись';
    buttonSend.id = 'btnSend';

    let buttonClear = document.createElement('button');
    buttonClear.type = 'button';
    buttonClear.innerHTML = 'Очистить поля';
    buttonClear.id = 'btnClear';

    let buttonBack = document.createElement('button');
    buttonBack.type = 'button';
    buttonBack.innerHTML = 'Вернуться назад';
    buttonBack.id = 'btnBack';

    let divButton = document.createElement('div');
    divButton.className = 'processingBtn';

    let heading = document.createElement('p');
    heading.className = 'heading';
    heading.innerHTML = 'Форма добавление';

    divButton.append(buttonSend);
    divButton.append(buttonBack);
    divButton.append(buttonClear);

    divFlex.append(heading);
    // divFlex.append(divTextInputId);
    // divFlex.append(inputIdDiv);
    divFlex.append(divTextLastName);
    divFlex.append(inputLastNameDiv);
    divFlex.append(divTextFirstName);
    divFlex.append(inputFirstNameDiv);
    divFlex.append(divTextPatronymic);
    divFlex.append(inputPatronymicDiv);
    divFlex.append(divTextFormStudy);
    divFlex.append(selectFormStudyDiv);
    divFlex.append(divTextGroup);
    divFlex.append(selectGroupDiv);
    divFlex.append(divTextEmail);
    divFlex.append(inputEmailDiv);
    divFlex.append(divButton);
    form.append(divFlex);
    formDiv.append(form);
}

function formAddForControlWeek() {
    let formDiv = document.getElementById("formSend");
    formDiv.style = 'box-shadow: 0 0 5px 2px;';

    let form = document.createElement('form');
    form.className = 'deleteForm';

    let divFlex = document.createElement('div');
    divFlex.className = 'dataSending';

    // let divTextInputId = document.createElement('div');
    let divTextNameStudent = document.createElement('div');
    // divTextInputId.className = 'formInputText';
    divTextNameStudent.className = 'formInputText';

    let divTextSubject = document.createElement('div');
    divTextSubject.className = 'formInputText';

    let divTextTeacher = document.createElement('div');
    divTextTeacher.className = 'formInputText';

    let divTextSemester = document.createElement('div');
    divTextSemester.className = 'formInputText';

    let divTextMark = document.createElement('div');
    divTextMark.className = 'formInputText';

    // let tagPId = document.createElement('p');
    // tagPId.innerHTML = 'Введите id предмета';

    let tagPNameStudent = document.createElement('p');
    tagPNameStudent.innerHTML = 'Выберите Ф.И.О студента';

    let tagPSubject = document.createElement('p');
    tagPSubject.innerHTML = 'Выберите предмет';

    let tagPTeacher = document.createElement('p');
    tagPTeacher.innerHTML = 'Выберите Ф.И.О преподавателя';

    let tagPSemester = document.createElement('p');
    tagPSemester.innerHTML = 'Выберите семестр';

    let tagPMark = document.createElement('p');
    tagPMark.innerHTML = 'Введите успеваемость'

    // divTextInputId.append(tagPId);
    divTextNameStudent.append(tagPNameStudent);
    divTextSubject.append(tagPSubject);
    divTextTeacher.append(tagPTeacher);
    divTextSemester.append(tagPSemester);
    divTextMark.append(tagPMark);

    // let inputId = document.createElement('input');
    // inputId.inputMode = 'number';
    // inputId.id = 'inputId';
    // inputId.min = '1';
    // inputId.size = '62';

    // let inputIdDiv = document.createElement('div');
    // inputIdDiv.className = 'formInput';
    // inputIdDiv.append(inputId);

    let selectNameStudent = document.createElement('select');
    selectNameStudent.id = 'selectNameStudent';
    let optionSelectValueNameStudent = document.createElement('option');
    optionSelectValueNameStudent.selected;
    optionSelectValueNameStudent.innerHTML = 'Выберите студента';
    selectNameStudent.append(optionSelectValueNameStudent);
    for (let i = 0; i < Student.length ; i++) {
        let option = document.createElement('option');
        option.value = Student[i].id;
        option.innerHTML = Student[i].lastName + ' ' + Student[i].firstName + ' ' + Student[i].patronymic;
        selectNameStudent.append(option);
    }

    let selectSubject = document.createElement('select');
    selectSubject.id = 'selectSubject';
    let optionSelectValueSubject = document.createElement('option');
    optionSelectValueSubject.selected;
    optionSelectValueSubject.innerHTML = 'Выберите предмет';
    selectSubject.append(optionSelectValueSubject);
    for (let i = 0; i < Subject.length ; i++) {
        let option = document.createElement('option');
        option.value = Subject[i].id;
        option.innerHTML = Subject[i].title;
        selectSubject.append(option);
    }

    let selectTeacher = document.createElement('select');
    selectTeacher.id = 'selectTeacher';
    let optionSelectValueTeacher = document.createElement('option');
    optionSelectValueTeacher.selected;
    optionSelectValueTeacher.innerHTML = 'Выберите преподавателя';
    selectTeacher.append(optionSelectValueTeacher);
    for (let i = 0; i < Teacher.length ; i++) {
        let option = document.createElement('option');
        option.value = Teacher[i].id;
        option.innerHTML = Teacher[i].lastName + ' ' + Teacher[i].firstName + ' ' + Teacher[i].patronymic;
        selectTeacher.append(option);
    }

    let selectSemester = document.createElement('select');
    selectSemester.id = 'selectSemester';
    let optionSelectValueSemester = document.createElement('option');
    optionSelectValueSemester.selected;
    optionSelectValueSemester.innerHTML = 'Выберите семестор';
    selectSemester.append(optionSelectValueSemester);
    for (let i = 0; i < Semesters.length ; i++) {
        let option = document.createElement('option');
        option.value = Semesters[i].id;
        option.innerHTML = Semesters[i].name;
        selectSemester.append(option);
    }

    let inputMark = document.createElement('input');
    inputMark.inputMode = 'text';
    inputMark.id = 'inputTitle';
    inputMark.size = '62';

    let selectNameStudentDiv = document.createElement('div');
    selectNameStudentDiv.className = 'formInput';
    selectNameStudentDiv.append(selectNameStudent);

    let selectSubjectDiv = document.createElement('div');
    selectSubjectDiv.className = 'formInput';
    selectSubjectDiv.append(selectSubject);

    let selectTeacherDiv = document.createElement('div');
    selectTeacherDiv.className = 'formInput';
    selectTeacherDiv.append(selectTeacher);

    let selectSemesterDiv = document.createElement('div');
    selectSemesterDiv.className = 'formInput';
    selectSemesterDiv.append(selectSemester);

    let inputMarkDiv = document.createElement('div');
    inputMarkDiv.className = 'formInput';
    inputMarkDiv.append(inputMark);

    let buttonSend = document.createElement('button');
    buttonSend.type = 'button';
    buttonSend.innerHTML = 'Добавить запись';
    buttonSend.id = 'btnSend';

    let buttonClear = document.createElement('button');
    buttonClear.type = 'button';
    buttonClear.innerHTML = 'Очистить поля';
    buttonClear.id = 'btnClear';

    let buttonBack = document.createElement('button');
    buttonBack.type = 'button';
    buttonBack.innerHTML = 'Вернуться назад';
    buttonBack.id = 'btnBack';

    let divButton = document.createElement('div');
    divButton.className = 'processingBtn';

    let heading = document.createElement('p');
    heading.className = 'heading';
    heading.innerHTML = 'Форма добавление';

    divButton.append(buttonSend);
    divButton.append(buttonBack);
    divButton.append(buttonClear);

    divFlex.append(heading);
    // divFlex.append(divTextInputId);
    // divFlex.append(inputIdDiv);
    divFlex.append(divTextNameStudent);
    divFlex.append(selectNameStudentDiv);
    divFlex.append(divTextSubject);
    divFlex.append(selectSubjectDiv);
    divFlex.append(divTextTeacher);
    divFlex.append(selectTeacherDiv);
    divFlex.append(divTextSemester);
    divFlex.append(selectSemesterDiv);
    divFlex.append(divTextMark);
    divFlex.append(inputMarkDiv);
    divFlex.append(divButton);
    form.append(divFlex);
    formDiv.append(form);
}

function formForAddGroupFaculty() {
    let formDiv = document.getElementById("formSend");
    formDiv.style = 'box-shadow: 0 0 5px 2px;';

    let form = document.createElement('form');
    form.className = 'deleteForm';

    let divFlex = document.createElement('div');
    divFlex.className = 'dataSending';

    // let divTextInputId = document.createElement('div');
    let divTextGroup = document.createElement('div');
    // divTextInputId.className = 'formInputText';
    divTextGroup.className = 'formInputText';

    let divTextSpecialization = document.createElement('div');
    divTextSpecialization.className = 'formInputText';

    // let tagPId = document.createElement('p');
    // tagPId.innerHTML = 'Введите id предмета';

    let tagPGroup = document.createElement('p');
    tagPGroup.innerHTML = 'Введите группу';

    let tagPSpecialization = document.createElement('p');
    tagPSpecialization.innerHTML = 'Введите специальность';

    // divTextInputId.append(tagPId);
    divTextGroup.append(tagPGroup);
    divTextSpecialization.append(tagPSpecialization);

    // let inputId = document.createElement('input');
    // inputId.inputMode = 'number';
    // inputId.id = 'inputId';
    // inputId.min = '1';
    // inputId.size = '62';

    // let inputIdDiv = document.createElement('div');
    // inputIdDiv.className = 'formInput';
    // inputIdDiv.append(inputId);

    let inputGroup = document.createElement('input');
    inputGroup.inputMode = 'text';
    inputGroup.id = 'inputTitle';
    inputGroup.size = '62';

    let inputSpecialization = document.createElement('input');
    inputSpecialization.inputMode = 'text';
    inputSpecialization.id = 'inputTitle';
    inputSpecialization.size = '62';

    let inputGroupDiv = document.createElement('div');
    inputGroupDiv.className = 'formInput';
    inputGroupDiv.append(inputGroup);

    let inputSpecializationDiv = document.createElement('div');
    inputSpecializationDiv.className = 'formInput';
    inputSpecializationDiv.append(inputSpecialization);

    let buttonSend = document.createElement('button');
    buttonSend.type = 'button';
    buttonSend.innerHTML = 'Добавить запись';
    buttonSend.id = 'btnSend';

    let buttonClear = document.createElement('button');
    buttonClear.type = 'button';
    buttonClear.innerHTML = 'Очистить поля';
    buttonClear.id = 'btnClear';

    let buttonBack = document.createElement('button');
    buttonBack.type = 'button';
    buttonBack.innerHTML = 'Вернуться назад';
    buttonBack.id = 'btnBack';

    let divButton = document.createElement('div');
    divButton.className = 'processingBtn';

    let heading = document.createElement('p');
    heading.className = 'heading';
    heading.innerHTML = 'Форма добавление';

    divButton.append(buttonSend);
    divButton.append(buttonBack);
    divButton.append(buttonClear);

    divFlex.append(heading);
    // divFlex.append(divTextInputId);
    // divFlex.append(inputIdDiv);
    divFlex.append(divTextGroup);
    divFlex.append(inputGroupDiv);
    divFlex.append(divTextSpecialization);
    divFlex.append(inputSpecializationDiv);
    divFlex.append(divButton);
    form.append(divFlex);
    formDiv.append(form);
}
//Кулаков Виктор Андреевич
//Рыжкова Мария Николаевна
function sendObject(data = []) {
    function search(data = [], value) {
        for (let i = 0; i < data.length; i++) {
            if(data[i].title === value || `${data[i].lastName} ${data[i].firstName} ${data[i].patronymic}` === value) {
                return data[i].id;
            }
        }
    }
    if(checkFormSubject){
        sendRequst('POST', 'http://localhost:8080/subject/add', {
            id: 1,
            title: data[0].firstElementChild.value
        }).then(data => console.log(data))
            .catch(err => console.log(err));
    }
    else if(checkFormTeacher){
        sendRequst('POST', 'http://localhost:8080/teacher/add', {
            id: 1,
            lastName: data[0].firstElementChild.value,
            firstName: data[1].firstElementChild.value,
            patronymic: data[2].firstElementChild.value,
            email: data[3].firstElementChild.value
        }).then(data => console.log(data))
            .catch(err => console.log(err));
    }
    else if(checkFormStudent) {

        console.log(data);

        sendRequst('POST', 'http://localhost:8080/students/add', {
            id: 1,
            lastName: data[0].firstElementChild.value,
            firstName: data[1].firstElementChild.value,
            patronymic: data[2].firstElementChild.value,
            formStudyId: Number(data[3].firstElementChild.value),
            groupId: Number(data[4].firstElementChild.value),
            email: data[5].firstElementChild.value

        }).then(data => console.log(data))
            .catch(err => console.log(err));
    }
    else if (checkFormGroupFaculty) {
        sendRequst('GET', 'http://localhost:8080/specialization').then(data1 => {
            let specialization = search(data1, data[1].firstElementChild.value);
            sendRequst('POST', 'http://localhost:8080/groupFaculty/add', {
                id: 1,
                title: data[0].firstElementChild.value,
                specializationId: specialization
            }).then(data2 => console.log(data2)
            ).catch(err => console.log(err));
        }).catch(err => console.log(err));
    }
    else if(checkFormOneControlWeek) {
        sendRequst('GET', 'http://localhost:8080/students').then(dataStudents => {
            sendRequst('GET', 'http://localhost:8080/subject').then(dataSubject => {
                sendRequst('GET', 'http://localhost:8080/teacher').then(dataTeacher => {
                    let studentId = search(dataStudents, data[0].firstElementChild.value);
                    let subjectId = search(dataSubject, data[1].firstElementChild.value);
                    let teacherId = search(dataTeacher, data[2].firstElementChild.value);
                    sendRequst("POST", "http://localhost:8080/oneControlWeek/add", {
                        studentId: studentId,
                        subjectId: subjectId,
                        teacherId: teacherId,
                        semesterId: Number(data[3].firstElementChild.value),
                        mark: Number(data[4].firstElementChild.value),
                    }).then(dataOneControlWeek => console.log(dataOneControlWeek))
                        .catch(err => console.log(err));
                }).catch(err => console.log(err));
            }).catch(err => console.log(err));
        }).catch(err => console.log(err));
    }
    else if(checkFormTwoControlWeek) {
        sendRequst('GET', 'http://localhost:8080/students').then(dataStudents => {
            sendRequst('GET', 'http://localhost:8080/subject').then(dataSubject => {
                sendRequst('GET', 'http://localhost:8080/teacher').then(dataTeacher => {
                    let studentId = search(dataStudents, data[0].firstElementChild.value);
                    let subjectId = search(dataSubject, data[1].firstElementChild.value);
                    let teacherId = search(dataTeacher, data[2].firstElementChild.value);
                    sendRequst("POST", "http://localhost:8080/twoControlWeek/add", {
                        studentId: studentId,
                        subjectId: subjectId,
                        teacherId: teacherId,
                        semesterId: Number(data[3].firstElementChild.value),
                        mark: Number(data[4].firstElementChild.value),
                    }).then(dataTwoControlWeek => console.log(dataTwoControlWeek))
                        .catch(err => console.log(err));
                }).catch(err => console.log(err));
            }).catch(err => console.log(err));
        }).catch(err => console.log(err));
    }
    else if(checkFormThreeControlWeek){
        sendRequst('GET', 'http://localhost:8080/students').then(dataStudents => {
            sendRequst('GET', 'http://localhost:8080/subject').then(dataSubject => {
                sendRequst('GET', 'http://localhost:8080/teacher').then(dataTeacher => {
                    let studentId = search(dataStudents, data[0].firstElementChild.value);
                    let subjectId = search(dataSubject, data[1].firstElementChild.value);
                    let teacherId = search(dataTeacher, data[2].firstElementChild.value);
                    sendRequst("POST", "http://localhost:8080/threeControlWeek/add", {
                        studentId: studentId,
                        subjectId: subjectId,
                        teacherId: teacherId,
                        semesterId: Number(data[3].firstElementChild.value),
                        mark: Number(data[4].firstElementChild.value),
                    }).then(dataThreeControlWeek => console.log(dataThreeControlWeek))
                        .catch(err => console.log(err));
                }).catch(err => console.log(err));
            }).catch(err => console.log(err));
        }).catch(err => console.log(err));
    }
}

document.body.addEventListener('click', () => {
    let target = event.target;

    if(target.tagName !== 'BUTTON') return;
    if(checkSubject){
        for (let i = 0; i < Subject.length; i++) {
            if(target.id === `delete${i + 1}`){
                sendRequst('DELETE', `http://localhost:8080/subject/delete/${Subject[i].id}`)
                    .then(data => console.log(data)).catch(err => console.log(err));

                setTimeout(() =>{
                    deleteTable();

                    sendRequst('GET', 'http://localhost:8080/subject').then(data => {
                        parsingTh(data[0].field);
                    }).catch(err => console.log(err))

                    sendRequst("GET", "http://localhost:8080/subject").then(data =>{
                        parsingTdForSubject(data);
                    }).catch(err => console.log(err))
                }, 1000);

                break;
            }
            else if(target.id === `update${i + 1}`){
                deleteTable();

                formForAddSubject();

                let sendBtn = document.getElementById('btnSend');
                sendBtn.innerHTML = 'Изменить запись'

                let dataFromInput = document.getElementsByClassName('formInput');

                sendBtn.addEventListener('click', function () {

                    let title;

                    if(dataFromInput[0].firstElementChild.value.matchAll(regExp) !== null) {
                        title = dataFromInput[0].firstElementChild.value;
                    }
                    else {
                        title = Subject[i].title;
                    }

                    let subjectUpdate = {
                        id: Subject[i].id,
                        title: title
                    }

                    sendRequst('PATCH', 'http://localhost:8080/subject/update', subjectUpdate).
                    then(data => console.log(data)).catch(err => console.log(err));

                    setTimeout(() =>{
                        deleteForm();

                        sendRequst('GET', 'http://localhost:8080/subject').then(data => {
                            parsingTh(data[0].field);
                        }).catch(err => console.log(err))

                        sendRequst("GET", "http://localhost:8080/subject").then(data =>{
                            parsingTdForSubject(data);
                        }).catch(err => console.log(err))
                    }, 1000);

                })

                break;

            }
        }
    }
    else if(checkTeachers){
        for (let i = 0; i < Teacher.length; i++) {
            if(target.id === `delete${i + 1}`){

                sendRequst('DELETE', `http://localhost:8080/teacher/delete/${Teacher[i].id}`)
                    .then(data => console.log(data)).catch(err => console.log(err));

                setTimeout(() =>{
                    deleteTable();

                    sendRequst('GET', 'http://localhost:8080/teacher').then(data => {
                        parsingTh(data[0].field);
                    }).catch(err => console.log(err))

                    sendRequst("GET", "http://localhost:8080/teacher").then(data =>{
                        parsingTdForTeacher(data);
                    }).catch(err => console.log(err))
                }, 1000);

                break;
            }
            else if(target.id === `update${i + 1}`){

                deleteTable();

                formForAddTeacher();

                let sendBtn = document.getElementById('btnSend');
                sendBtn.innerHTML = 'Изменить запись'

                let dataFromInput = document.getElementsByClassName('formInput');

                let lastName = '';
                let firstName = '';
                let patronymic = '';
                let email = '';

                sendBtn.addEventListener('click', function () {

                    if(dataFromInput[0].firstElementChild.value.match(regExp) !== null) {
                        lastName = dataFromInput[0].firstElementChild.value;
                    }
                    else{
                        lastName = Teacher[i].lastName;
                    }
                    if(dataFromInput[1].firstElementChild.value.match(regExp) !== null){
                        firstName = dataFromInput[1].firstElementChild.value;
                    }
                    else{
                        firstName = Teacher[i].firstName;
                    }
                    if(dataFromInput[2].firstElementChild.value.match(regExp) !== null){
                        patronymic = dataFromInput[2].firstElementChild.value;
                    }
                    else{
                        patronymic = Teacher[i].patronymic;
                    }
                    if(dataFromInput[3].firstElementChild.value.match(regExp) !== null){
                        email = dataFromInput[3].firstElementChild.value;
                    }
                    else{
                        email = Teacher[i].email;
                    }

                    let teacherUpdate = {
                        id: Teacher[i].id,
                        lastName: lastName,
                        firstName: firstName,
                        patronymic: patronymic,
                        email: email
                    }

                    sendRequst('PATCH', 'http://localhost:8080/teacher/update', teacherUpdate).
                    then(data => console.log(data)).catch(err => console.log(err));

                    setTimeout(() =>{
                        deleteForm();

                        sendRequst('GET', 'http://localhost:8080/teacher').then(data => {
                            parsingTh(data[0].field);
                        }).catch(err => console.log(err))

                        sendRequst("GET", "http://localhost:8080/teacher").then(data =>{
                            parsingTdForTeacher(data);
                        }).catch(err => console.log(err))
                    }, 1000);
                })

                break;
            }
        }
    }
    else if(checkStudents) {

        for (let i = 0; i < Student.length; i++) {
            if(target.id === `delete${i + 1}`){

                sendRequst('DELETE', `http://localhost:8080/students/delete/${Student[i].id}`)
                    .then(data => console.log(data)).catch(err => console.log(err));

                setTimeout(() =>{
                    deleteTable();

                    sendRequst('GET', 'http://localhost:8080/students').then(data => {
                        parsingTh(data[0].field);
                    }).catch(err => console.log(err))

                    sendRequst("GET", "http://localhost:8080/students").then(dataStudent =>{
                        sendRequst('GET', 'http://localhost:8080/formStudy').then(dataForm => {
                                sendRequst('GET', 'http://localhost:8080/groupFaculty').then(dataGroup => {
                                        parsingTdForStudents(dataStudent, dataForm, dataGroup);
                                }).catch(err => console.log(err));
                            }).catch(err => console.log(err));
                    }).catch(err => console.log(err))
                }, 2000);

                break;
            }
        }
    }
    else if(checkGroupFaculty) {
        for (let i = 0; i < GroupFaculty.length; i++) {
            if(target.id === `delete${i + 1}`){

                sendRequst('DELETE', `http://localhost:8080/groupFaculty/delete/${GroupFaculty[i].id}`)
                    .then(data => console.log(data)).catch(err => console.log(err));

                setTimeout(() =>{

                    deleteTable();

                    sendRequst('GET', 'http://localhost:8080/groupFaculty').then(data => {
                        parsingTh(data[0].field);
                    }).catch(err => console.log(err))

                    sendRequst('GET', 'http://localhost:8080/groupFaculty').then(dataGroup => {
                            sendRequst('GET', 'http://localhost:8080/specialization').then(dataSpecialization => {
                                parsingTdForGroup(dataGroup, dataSpecialization);
                            }).catch(err => console.log(err));
                    }).catch(err => console.log(err));
                }, 2000);

                break;
            }
        }
    }
    else if(checkOneControlWeek) {
        for (let i = 0; i < OneControlWeek.length; i++) {
            if(target.id === `delete${i + 1}`){

                sendRequst('DELETE', `http://localhost:8080/oneControlWeek/delete/`, OneControlWeek[i])
                    .then(data => console.log(data)).catch(err => console.log(err));

                setTimeout(() =>{

                    deleteTable();

                    sendRequst('GET', 'http://localhost:8080/oneControlWeek').then(data => {
                        parsingTh(data[0].field);
                    }).catch(err => console.log(err))

                    sendRequst('GET', 'http://localhost:8080/oneControlWeek').then(dataOneControlWeek => {
                        sendRequst('GET', 'http://localhost:8080/students').then(dataStudents => {
                            sendRequst('GET', 'http://localhost:8080/subject').then(dataSubject => {
                                sendRequst('GET', 'http://localhost:8080/teacher').then(dataTeacher => {
                                    sendRequst('GET', 'http://localhost:8080/groupFaculty').then(dataGroup => {
                                        parsingTdForControlWeek(dataOneControlWeek, dataStudents, dataSubject, dataTeacher, dataGroup);
                                    }).catch(err => console.log(err));
                                }).catch(err => console.log(err));
                            }).catch(err => console.log(err));
                        }).catch(err => console.log(err));
                    }).catch(err => console.log(err));
                }, 2000);

                break;
            }
        }
    }
    else if(checkTwoControlWeek) {
        for (let i = 0; i < TwoControlWeek.length; i++) {
            if(target.id === `delete${i + 1}`){

                sendRequst('DELETE', `http://localhost:8080/twoControlWeek/delete`, TwoControlWeek[i])
                    .then(data => console.log(data)).catch(err => console.log(err));

                setTimeout(() =>{

                    deleteTable();

                    sendRequst('GET', 'http://localhost:8080/twoControlWeek').then(data => {
                        parsingTh(data[0].field);
                    }).catch(err => console.log(err))

                    sendRequst('GET', 'http://localhost:8080/twoControlWeek').then(dataOneControlWeek => {
                        sendRequst('GET', 'http://localhost:8080/students').then(dataStudents => {
                            sendRequst('GET', 'http://localhost:8080/subject').then(dataSubject => {
                                sendRequst('GET', 'http://localhost:8080/teacher').then(dataTeacher => {
                                    sendRequst('GET', 'http://localhost:8080/groupFaculty').then(dataGroup => {
                                        parsingTdForControlWeek(dataOneControlWeek, dataStudents, dataSubject, dataTeacher, dataGroup);
                                    }).catch(err => console.log(err));
                                }).catch(err => console.log(err));
                            }).catch(err => console.log(err));
                        }).catch(err => console.log(err));
                    }).catch(err => console.log(err));
                }, 2000);

                break;
            }
        }
    }
    else if(checkThreeControlWeek) {
        for (let i = 0; i < ThreeControlWeek.length; i++) {
            if(target.id === `delete${i + 1}`){

                sendRequst('DELETE', `http://localhost:8080/threeControlWeek/delete`, ThreeControlWeek[i])
                    .then(data => console.log(data)).catch(err => console.log(err));

                setTimeout(() =>{

                    deleteTable();

                    sendRequst('GET', 'http://localhost:8080/threeControlWeek').then(data => {
                        parsingTh(data[0].field);
                    }).catch(err => console.log(err))

                    sendRequst('GET', 'http://localhost:8080/threeControlWeek').then(dataOneControlWeek => {
                        sendRequst('GET', 'http://localhost:8080/students').then(dataStudents => {
                            sendRequst('GET', 'http://localhost:8080/subject').then(dataSubject => {
                                sendRequst('GET', 'http://localhost:8080/teacher').then(dataTeacher => {
                                    sendRequst('GET', 'http://localhost:8080/groupFaculty').then(dataGroup => {
                                        parsingTdForControlWeek(dataOneControlWeek, dataStudents, dataSubject, dataTeacher, dataGroup);
                                    }).catch(err => console.log(err));
                                }).catch(err => console.log(err));
                            }).catch(err => console.log(err));
                        }).catch(err => console.log(err));
                    }).catch(err => console.log(err));
                }, 2000);

                break;
            }
        }
    }
});

let select = document.getElementById("selected");

select.addEventListener("click", function () {
   let value = this.value;
   deleteForm();

   if(value === 'Subject' && !checkSubject) {

       deleteTable();

       sendRequst('GET', 'http://localhost:8080/subject').then(data => {
           parsingTh(data[0].field);
       }).catch(err => console.log(err))

       sendRequst("GET", "http://localhost:8080/subject").then(data =>{
           parsingTdForSubject(data);
       }).catch(err => console.log(err))


       checkSubject = true;
       checkTeachers = false;
       checkStudents = false;
       checkGroupFaculty = false;
       checkOneControlWeek = false;
       checkTwoControlWeek = false;
       checkThreeControlWeek = false;

       checkFormSubject = true;
       checkFormTeacher = false;
       checkFormStudent = false;
       checkFormGroupFaculty = false;
       checkFormOneControlWeek = false;
       checkFormTwoControlWeek = false;
       checkFormThreeControlWeek = false;
   }
   else if (value === 'Teachers' && !checkTeachers){

       deleteTable();

       sendRequst('GET', 'http://localhost:8080/teacher').then(data => {
           parsingTh(data[0].field)
       }).catch(err => console.log(err))

       sendRequst('GET', 'http://localhost:8080/teacher').then(data => {
           parsingTdForTeacher(data);
       }).catch(err => console.log(err))

       checkTeachers = true;
       checkSubject = false;
       checkStudents = false;
       checkGroupFaculty = false;
       checkOneControlWeek = false;
       checkTwoControlWeek = false;
       checkThreeControlWeek = false;

       checkFormSubject = false;
       checkFormTeacher = true;
       checkFormStudent = false;
       checkFormGroupFaculty = false;
       checkFormOneControlWeek = false;
       checkFormTwoControlWeek = false;
       checkFormThreeControlWeek = false;
   }

   else if (value === 'Students' && !checkStudents) {

       deleteTable();

       sendRequst('GET', 'http://localhost:8080/students').then(data => {
           parsingTh(data[0].field)
       }).catch(err => console.log(err))

       sendRequst('GET', 'http://localhost:8080/students').then(dataStudents => {
           sendRequst("GET", 'http://localhost:8080/groupFaculty').then(dataGroup => {
               sendRequst('GET', 'http://localhost:8080/formStudy').then(dataForm => {
                    parsingTdForStudents(dataStudents, dataForm, dataGroup);
               }).catch(err => console.log(err))
           }).catch(err => console.log(err));
       }).catch(err => console.log(err))

       checkTeachers = false;
       checkGroupFaculty = false;
       checkSubject = false;
       checkStudents = true;
       checkOneControlWeek = false;
       checkTwoControlWeek = false;
       checkThreeControlWeek = false;

       checkFormSubject = false;
       checkFormTeacher = false;
       checkFormStudent = true;
       checkFormGroupFaculty = false;
       checkFormOneControlWeek = false;
       checkFormTwoControlWeek = false;
       checkFormThreeControlWeek = false;
   }

   else if(value === 'GroupFaculty' && !checkGroupFaculty) {

       deleteTable();

       sendRequst('GET', 'http://localhost:8080/groupFaculty').then(data => {
           parsingTh(data[0].field);
       }).catch(err => console.log(err));

       sendRequst('GET', 'http://localhost:8080/groupFaculty').then(dataGroup => {
           sendRequst('GET', 'http://localhost:8080/specialization').then(dataSpecialization => {
                    parsingTdForGroup(dataGroup, dataSpecialization);
               }
           ).catch(err => console.log(err));
       }).catch(err => console.log(err));

       checkTeachers = false;
       checkGroupFaculty = true;
       checkSubject = false;
       checkStudents = false;
       checkOneControlWeek = false;
       checkTwoControlWeek = false;
       checkThreeControlWeek = false;

       checkFormSubject = false;
       checkFormTeacher = false;
       checkFormStudent = false;
       checkFormGroupFaculty = true;
       checkFormOneControlWeek = false;
       checkFormTwoControlWeek = false;
       checkFormThreeControlWeek = false;
   }

   else if (value === 'ControlWeekOne' && !checkOneControlWeek) {

       deleteTable();

       sendRequst('GET', 'http://localhost:8080/oneControlWeek').then(data => {
           parsingTh(data[0].field);
       }).catch(err => console.log(err));

       sendRequst('GET', 'http://localhost:8080/oneControlWeek').then(dataOneControlWeek => {
           sendRequst('GET', 'http://localhost:8080/students').then(dataStudents => {
               sendRequst('GET', 'http://localhost:8080/subject').then(dataSubject => {
                   sendRequst('GET', 'http://localhost:8080/teacher').then(dataTeacher => {
                       sendRequst('GET', 'http://localhost:8080/groupFaculty').then(dataGroup => {
                           parsingTdForControlWeek(dataOneControlWeek, dataStudents, dataSubject, dataTeacher, dataGroup);
                       }).catch(err => console.log(err));
                   }).catch(err => console.log(err));
               }).catch(err => console.log(err));
           }).catch(err => console.log(err));
       }).catch(err => console.log(err));

       checkTeachers = false;
       checkGroupFaculty = false;
       checkSubject = false;
       checkStudents = false;
       checkOneControlWeek = true;
       checkTwoControlWeek = false;
       checkThreeControlWeek = false;

       checkFormSubject = false;
       checkFormTeacher = false;
       checkFormStudent = false;
       checkFormGroupFaculty = false;
       checkFormOneControlWeek = true;
       checkFormTwoControlWeek = false;
       checkFormThreeControlWeek = false;
   }

   else if (value === 'ControlWeekTwo' && !checkTwoControlWeek) {

       deleteTable();

       sendRequst('GET', 'http://localhost:8080/twoControlWeek').then(data => {
           parsingTh(data[0].field);
       }).catch(err => console.log(err));

       sendRequst('GET', 'http://localhost:8080/twoControlWeek').then(dataTwoControlWeek => {
           sendRequst('GET', 'http://localhost:8080/students').then(dataStudents => {
               sendRequst('GET', 'http://localhost:8080/subject').then(dataSubject => {
                   sendRequst('GET', 'http://localhost:8080/teacher').then(dataTeacher => {
                       sendRequst('GET', 'http://localhost:8080/groupFaculty').then(dataGroup => {
                            parsingTdForControlWeek(dataTwoControlWeek, dataStudents, dataSubject, dataTeacher, dataGroup);
                        }).catch(err => console.log(err));
                   }).catch(err => console.log(err));
               }).catch(err => console.log(err));
           }).catch(err => console.log(err));
       }).catch(err => console.log(err));

       checkTeachers = false;
       checkGroupFaculty = false;
       checkSubject = false;
       checkStudents = false;
       checkOneControlWeek = false;
       checkTwoControlWeek = true;
       checkThreeControlWeek = false;

       checkFormSubject = false;
       checkFormTeacher = false;
       checkFormStudent = false;
       checkFormGroupFaculty = false;
       checkFormOneControlWeek = false;
       checkFormTwoControlWeek = true;
       checkFormThreeControlWeek = false;
   }

   else if (value === 'ControlWeekThree' && !checkThreeControlWeek) {

       deleteTable();

       sendRequst('GET', 'http://localhost:8080/threeControlWeek').then(data => {
           parsingTh(data[0].field);
       }).catch(err => console.log(err));

       sendRequst('GET', 'http://localhost:8080/threeControlWeek').then(dataThreeControlWeek => {
           sendRequst('GET', 'http://localhost:8080/students').then(dataStudents => {
               sendRequst('GET', 'http://localhost:8080/subject').then(dataSubject => {
                   sendRequst('GET', 'http://localhost:8080/teacher').then(dataTeacher => {
                       sendRequst('GET', 'http://localhost:8080/groupFaculty').then(dataGroup => {
                            parsingTdForControlWeek(dataThreeControlWeek, dataStudents, dataSubject, dataTeacher, dataGroup);
                        }).catch(err => console.log(err));
                   }).catch(err => console.log(err));
               }).catch(err => console.log(err));
           }).catch(err => console.log(err));
       }).catch(err => console.log(err));

       checkTeachers = false;
       checkGroupFaculty = false;
       checkSubject = false;
       checkStudents = false;
       checkOneControlWeek = false;
       checkTwoControlWeek = false;
       checkThreeControlWeek = true;

       checkFormSubject = false;
       checkFormTeacher = false;
       checkFormStudent = false;
       checkFormGroupFaculty = false;
       checkFormOneControlWeek = false;
       checkFormTwoControlWeek = false;
       checkFormThreeControlWeek = true;
   }
});

let addBtn = document.getElementById("addBtn");

addBtn.addEventListener('click', function (){
    deleteTable();
    if (checkSubject) {
        formForAddSubject();

        let dataFromInput = document.getElementsByClassName('formInput');

        let sendBtn = document.getElementById('btnSend');

        sendBtn.addEventListener('click', function () {
            sendObject(dataFromInput);

            checkFormSubject = false;
        })
        checkSubject = false;
    } else if (checkTeachers) {
        formForAddTeacher();

        let dataFromInput = document.getElementsByClassName('formInput');

        let sendBtn = document.getElementById('btnSend');

        sendBtn.addEventListener('click', function () {
            sendObject(dataFromInput);

            checkFormTeacher = false;
        })

        checkTeachers = false;
    } else if (checkStudents) {
        formForAddStudent();

        let dataFromInput = document.getElementsByClassName('formInput');

        let sendBtn = document.getElementById('btnSend');

        sendBtn.addEventListener('click', function () {
            sendObject(dataFromInput);

            checkFormStudent = false;
        })

        checkStudents = false;
    } else if (checkOneControlWeek) {
        formAddForControlWeek();

        let dataFromInput = document.getElementsByClassName('formInput');

        let sendBtn = document.getElementById('btnSend');

        sendBtn.addEventListener('click', function () {
            sendObject(dataFromInput);

            checkFormOneControlWeek = false;
        })

        checkOneControlWeek = false;

    } else if (checkTwoControlWeek) {
        formAddForControlWeek();

        let dataFromInput = document.getElementsByClassName('formInput');

        let sendBtn = document.getElementById('btnSend');

        sendBtn.addEventListener('click', function () {
            sendObject(dataFromInput);

            checkFormTwoControlWeek = false;
        })

        checkTwoControlWeek = false;
    } else if (checkThreeControlWeek) {
        formAddForControlWeek();

        let dataFromInput = document.getElementsByClassName('formInput');

        let sendBtn = document.getElementById('btnSend');

        sendBtn.addEventListener('click', function () {
            sendObject(dataFromInput);

            checkFormTwoControlWeek = false;
        })

        checkThreeControlWeek = false;
    } else if (checkGroupFaculty) {
        formForAddGroupFaculty();

        let dataFromInput = document.getElementsByClassName('formInput');

        let sendBtn = document.getElementById('btnSend');

        sendBtn.addEventListener('click', function () {
            sendObject(dataFromInput);

            checkFormGroupFaculty = false;
        })

        checkGroupFaculty = false;
    }
});