document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('button')
    const h3 = document.querySelector('.counter h3')
    const h2 = document.querySelector('.counter h2')

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
            let en = localStorage.getItem('event');
            if (en != null) {
                if (en === 'Индира' || en === 'Indira') {
                    en = en + ' 💝'
                }
            }
            h2.textContent = en
            h3.textContent = 'Siz kechikdingiz'
        } else {
            const d = Math.floor(dif / 86400)
            dif = dif % 86400
            const h = Math.floor(dif / 3600)
            dif = dif % 3600
            const m = Math.floor(dif / 60)
            dif = dif % 60
            const s = dif

            h2.textContent = localStorage.getItem('event')
            h3.textContent = `${d} kun ${h} soat ${m}:${s}`
        }
    }, 1000)

    const inputs = document.querySelectorAll('input');
    let evf = localStorage.getItem('event')
    if (evf != null) {
        inputs[0].defaultValue = evf
    }
    const tif = localStorage.getItem('time')
    if (tif != null)
        inputs[1].value = new Date(+tif).toISOString().split('T')[0]

    inputs[0].addEventListener('input', (e) => {
        h2.textContent = e.target.value;
        localStorage.setItem('event', e.target.value)
    })

    inputs[1].addEventListener('change', (e) => {
        const date = new Date(e.target.value);
        localStorage.setItem('time', date.getTime().toString());
    })

    const svg = document.querySelector('svg')
    const set = document.querySelector('#set')
    svg.addEventListener('click', () => {
        set.classList.toggle('close')
    })
})

