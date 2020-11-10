
function createtipbox(params) {
    const body = _$('body')
    let ishas =  _$('.tip_messagetipsbox:last-child')
    let creatfun = function (params={}) {
        let box = _c('div')
        box.classList = 'tip_messagetipsbox';
        if (params.hasOwnProperty('bottom')) {
            box.style.bottom = params.bottom+'px'
        }
        let iconbox = _c('div')
        iconbox.classList = 'tip_iconbox'
        let textbox = _c('p')
        textbox.classList = 'tip_textbox'
        textbox.textContent = params.text
        box.appendChild(iconbox)
        box.appendChild(textbox)
        body.appendChild(box)
        setTimeout(() => {
            $(box).fadeOut('normal',_=>$(box).remove())
        }, 3000);
    }
    if (ishas) {
      let bt = ishas.style.bottom  
      let nbt = parseInt(bt.match(/\d+/)[0])+80
      creatfun({bottom:nbt,text:params})
    }else{
        creatfun({text:params,bottom:'30'})
    }

}

function _$(params) {
    return document.querySelector(params)
}

function _c(params) {
    return document.createElement(params)
}

export default createtipbox