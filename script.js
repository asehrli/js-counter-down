const btn = document.querySelector('button')
const h3 = document.querySelector('.counter h3')
const h2 = document.querySelector('.counter h2')

btn.addEventListener('click', (e) => setTime(e))


const si = setInterval(() => {
    const time = +localStorage.getItem('time')
    if (time == null) {
        clearInterval(si)
        return;
    }
    const currentTime = new Date().getTime()
    let dif = time - currentTime
    dif = Math.floor(dif / 1000) - 5 * 60 * 60

    if (dif < 0) {
        h2.textContent = localStorage.getItem('event')
        h3.textContent = 'You are late'
    } else {
        const d = Math.floor(dif / 86400)
        dif = dif % 86400
        const h = Math.floor(dif / 3600)
        dif = dif % 3600
        const m = Math.floor(dif / 60)
        dif = dif % 60
        const s = dif

        h2.textContent = localStorage.getItem('event')
        h3.textContent = `${d} d ${h} h ${m}:${s}`
    }
}, 1000)

const setTime = (e) => {
    e.preventDefault()

    const inputs = document.querySelectorAll('input');

    if (inputs[1].value) {
        const date = new Date(inputs[1].value);
        localStorage.setItem('time', date.getTime().toString());
    }

    if (inputs[0].value) {
        localStorage.setItem('event', inputs[0].value);
    }
}