let tabs =[
    {
        header: 'Водопад Кон',
        body: '<img src="images/vodopad_kon-500x333.jpg" alt="">',
    },
    {
        header: 'Водопад Игуасу',
        body: '<img src="images/vodopad_iguasu.jpg" alt="">',
    },
    {
        header: 'Ниагарский Водопад',
        body: '<img src="images/vodopad_niagarskiy-500x313.jpg" alt="">',
    },
    {
        header: 'Водопад Виктория',
        body: '<img src="images/vodopad_viktoria.jpg" alt="">',
    },
    {
        header: 'Водопад Анхель',
        body: '<img src="images/vodopad_anhel.jpg" alt="">',
    }
]

const tabHeader = document.querySelector('.tab-header');
const tabBodyItem = document.querySelector('.tab-body__item');

tabs.forEach((tab, index) => {
    let divHeader = createElement('div', ['tab-header__item'], `<span>${tab.header}</span>`);
    divHeader.dataset.target = index;
    divHeader.addEventListener('click', doActiveTab);

    tabHeader.append(divHeader)
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
    let currentHeader = e.target.closest('div.tab-header__item')
    currentHeader.classList.add('active')

    let currentTab = tabs[currentHeader.dataset.target];
    tabBodyItem.innerHTML = `<p>${currentTab.body}</p>`;
}

function clearTab(){
    [...tabHeader.children].forEach(item => item.classList.remove('active'));
}
