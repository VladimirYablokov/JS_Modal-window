// // массив с данными
// const posts  = [
// 'Не следует, однако забывать, что реализация намеченных плановых заданий позволяет оценить значение новых предложений. Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение систем массового участия. Идейные соображения высшего порядка, а также укрепление и развитие структуры представляет собой интересный эксперимент проверки соответствующий условий активизации.',

// 'Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности представляет собой интересный эксперимент проверки систем массового участия. Равным образом сложившаяся структура организации влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции способствует подготовки и реализации форм развития. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности способствует подготовки и реализации дальнейших направлений развития. Повседневная практика показывает, что укрепление и развитие структуры требуют от нас анализа модели развития. Таким образом дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании направлений прогрессивного развития.',

// 'Задача организации, в особенности же начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке новых предложений. Товарищи! сложившаяся структура организации обеспечивает широкому кругу (специалистов) участие в формировании форм развития.',

// 'Равным образом консультация с широким активом играет важную роль в формировании соответствующий условий активизации. Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании соответствующий условий активизации. Равным образом сложившаяся структура организации представляет собой интересный эксперимент проверки форм развития. Товарищи! сложившаяся структура организации способствует подготовки и реализации позиций, занимаемых участниками в отношении поставленных задач. Таким образом начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке новых предложений.',

// 'Задача организации, в особенности же консультация с широким активом позволяет выполнять важные задания по разработке модели развития. Значимость этих проблем настолько очевидна, что новая модель организационной деятельности обеспечивает широкому кругу (специалистов) участие в формировании системы обучения кадров, соответствует насущным потребностям.'
// ];
// const postsElem = document.createElement('div');
// const triggerContainerElem = document.createElement('div');
// const postsContainerElem = document.createElement('div');

// postsElem.append(triggerContainerElem, postsContainerElem);

// postsElem.classList.add('posts');
// triggerContainerElem.classList.add('trigger-container');
// postsContainerElem.classList.add('post-container');

// root.appendChild(postsElem);

// for (let i = 0; i < posts.length; i++){
//     const triggerPointElem = document.createElement('div');
//     triggerPointElem.innerText = i+1;
//     triggerPointElem.setAttribute('data-id', i)
//     triggerContainerElem.appendChild(triggerPointElem);
//     triggerPointElem.addEventListener('click', ()=>{

//         const children =  triggerPointElem.parentNode.children;
//         for( i= 0; i < children.length; i++){
//             children[i].classList.remove('active');
//         }
//         triggerPointElem.classList.add('active'); 

//         const id = +triggerPointElem.getAttribute('data-id')

//         const post_children = postsContainerElem.children;
//         for( i= 0; i < post_children.length; i++){
//             post_children[i].classList.remove('active');
//         }
//         postsContainerElem.children[id].classList.add('active')
//     });

//     const postsElem = document.createElement('p');
//     postsElem.innerText = posts[i];
//     postsContainerElem.appendChild(postsElem);
// }

const posts = [
    'Не следует, однако забывать, что реализация намеченных плановых заданий позволяет оценить значение новых предложений. Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение систем массового участия. Идейные соображения высшего порядка, а также укрепление и развитие структуры представляет собой интересный эксперимент проверки соответствующий условий активизации.',

    'Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности представляет собой интересный эксперимент проверки систем массового участия. Равным образом сложившаяся структура организации влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции способствует подготовки и реализации форм развития. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности способствует подготовки и реализации дальнейших направлений развития. Повседневная практика показывает, что укрепление и развитие структуры требуют от нас анализа модели развития. Таким образом дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании направлений прогрессивного развития.',

    'Задача организации, в особенности же начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке новых предложений. Товарищи! сложившаяся структура организации обеспечивает широкому кругу (специалистов) участие в формировании форм развития.',

    'Равным образом консультация с широким активом играет важную роль в формировании соответствующий условий активизации. Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании соответствующий условий активизации. Равным образом сложившаяся структура организации представляет собой интересный эксперимент проверки форм развития. Товарищи! сложившаяся структура организации способствует подготовки и реализации позиций, занимаемых участниками в отношении поставленных задач. Таким образом начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке новых предложений.',

    'Задача организации, в особенности же консультация с широким активом позволяет выполнять важные задания по разработке модели развития. Значимость этих проблем настолько очевидна, что новая модель организационной деятельности обеспечивает широкому кругу (специалистов) участие в формировании системы обучения кадров, соответствует насущным потребностям.'
];

const postsElem = document.createElement('div');
const triggerContainerElem = document.createElement('div');
const postsContainerElem = document.createElement('div');

postsElem.append(triggerContainerElem, postsContainerElem);

postsElem.classList.add('posts');
triggerContainerElem.classList.add('trigger-container');
postsContainerElem.classList.add('post-container');

root.append(postsElem);

for (let i = 0; i < posts.length; i++) {
    const triggerPointElem = document.createElement('div');
    triggerContainerElem.append(triggerPointElem);
    triggerPointElem.innerText = i + 1;
    triggerPointElem.setAttribute('data-id', i);
    triggerPointElem.addEventListener('click', () => {
        const trigger_children = triggerPointElem.parentNode.children;
        for (let i = 0; i < trigger_children.length; i++) {
            trigger_children[i].classList.remove('active');
        }
        triggerPointElem.classList.add('active');
        const id = +triggerPointElem.getAttribute('data-id');
        postsContainerElem.children[id].classList.add('active');
        
        const post_children = postsContainerElem.children;
        for (i = 0; i < post_children.length; i++) {
            post_children[i].classList.remove('active');
        }
        postsContainerElem.children[id].classList.add('active');
    });
    const postElem = document.createElement('p');
    postElem.innerText = posts[i];
    postsContainerElem.append(postElem);
}
