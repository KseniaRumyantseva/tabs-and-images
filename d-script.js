let tabs =[
    {
        header: 'Водопад Кон',
        body: '<img src="images/vodopad_kon-500x333.jpg" alt="">',
        target: 'tab-1'
    },
    {
        header: 'Водопад Игуасу',
        body: '<img src="images/vodopad_iguasu.jpg" alt="">',
        target: 'tab-2'
    },
    {
        header: 'Ниагарский Водопад',
        body: '<img src="images/vodopad_niagarskiy-500x313.jpg" alt="">',
        target: 'tab-3'
    },
    {
        header: 'Водопад Виктория',
        body: '<img src="images/vodopad_viktoria.jpg" alt="">',
        target: 'tab-4'
    },
    {
        header: 'Водопад Анхель',
        body: '<img src="images/vodopad_anhel.jpg" alt="">',
        target: 'tab-5'
    }
]

const tabHeader = document.querySelector('.tab-header');
const tabBody = document.querySelector('.tab-body');

tabs.forEach(tab => {
    let divHeader = document.createElement('div');
    divHeader.classList.add('tab-header__item')
    divHeader.dataset.target = tab.target
    divHeader.innerHTML=`<span>${tab.header}</span>`
    divHeader.addEventListener('click', doActiveTab)

    let divBody = document.createElement('div')
    divBody.classList.add('tab-body__item')
    divBody.innerHTML=`<div>${tab.body}</div>`
    divBody.id = tab.target

    tabHeader.append(divHeader)
    tabBody.append(divBody)
})

function  doActiveTab(e){
    clearTab()
    let currentHeader = e.target.closest('div.tab-header__item')
    currentHeader.classList.add('active')

    let currentBody = document.querySelector(`#${currentHeader.dataset.target}`)
    currentBody.classList.add('active')
}

function clearTab(){
    [...tabHeader.children].forEach(item => item.classList.remove('active'));
    [...tabBody.children].forEach(item => item.classList.remove('active'));
}