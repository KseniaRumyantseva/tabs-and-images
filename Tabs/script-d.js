let tabs =[
    {
        header: 'Один',
        body: 'Первая вкладка',
    },
    {
        header: 'Два',
        body: 'Вторая вкладка',
    },
    {
        header: 'Три',
        body: 'Третья вкладка',
    }
]

const tabHeader = document.querySelector('.tab-header');
const tabBodyItem = document.querySelector('.tab-body__item');

let i=0;
tabs.forEach(tab => {
    let divHeader = createElement('div', ['tab-header__item'], `<span>${tab.header}</span>`);
    divHeader.dataset.target = i;
    divHeader.addEventListener('click', doActiveTab);

    //let divBody = createElement('div', ['tab-body__item'], `<p>${tab.body}</p>`);
    //divBody.id = tab.target;

    tabHeader.append(divHeader)
    //tabBody.append(divBody)
    i++;
})

function createElement(el, classes, template){
    let element = document.createElement(el);
    element.classList.add(...classes)
    element.innerHTML = template;
    return element;
}

start()

function start() {
    tabHeader.firstChild.classList.add('active');
    tabBodyItem.innerHTML = `<p>${tabs[0].body}</p>`
}

function  doActiveTab(e){
    clearTab()
    let currentHeader = e.target.closest('div.tab-header__item') //current target
    currentHeader.classList.add('active')

    let currentTab = tabs[currentHeader.dataset.target]
    tabBodyItem.innerHTML = `<p>${currentTab.body}</p>`
    //2 способ
    //let currentTab = tabs.find(item =>item.target === currentHeader.dataset.target)
    //let currentBody = document.querySelector(`#${currentHeader.dataset.target}`)
    //currentBody.classList.add('active')
}

function clearTab(){
    [...tabHeader.children].forEach(item => item.classList.remove('active'));
    //[...tabBody.children].forEach(item => item.classList.remove('active'));
}