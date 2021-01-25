const defaultLanguage = 'en'
const languages = ['en', 'fr', 'de']

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function init() {
    let currentLang = ''
    const pageLanguage = document.getElementsByTagName('html')[0].lang

    if(!getCookie('lang')) {
        const userLanguage = window.navigator.userLanguage || window.navigator.language
        languages.forEach(language => {
            if(userLanguage.includes(language)) {
                currentLang = language
            }
        })
    } else {
        currentLang = getCookie('lang')
    }

    if(document.getElementsByTagName('html')[0].lang !== currentLang && currentLang) {
        if(window.location.href.match(`/${pageLanguage}/`)) {
            if(currentLang == defaultLanguage) {
                window.location.href = window.location.href.replace(`/${pageLanguage}/`, '/')
            } else {
                window.location.href = window.location.href.replace(`/${pageLanguage}/`, `/${currentLang}/`)
            }
        } else {
            window.location.href = document.location.origin + document.location.pathname + `${currentLang}`
        }
    }
}

function changeLanguage(language) {
    document.cookie = `lang=${language};path=/`
    init()
}

function isSelected(language) {
    return ''
}


init()