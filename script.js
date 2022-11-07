const timeSpans = document.querySelectorAll('.time-span')
const amount = document.querySelectorAll('.amount')
const lastWeekAmount = document.querySelectorAll('.last-week')

fetch('data.json')
.then(response => response.json())
.then(data => {
    for(let i = 0; i < 6; i++) {
        amount[i].innerText = data[i].timeframes.weekly.current + 'hrs'
        lastWeekAmount[i].innerText = data[i].timeframes.weekly.previous + 'hrs'

        timeSpans[0].addEventListener('click', () => {
            amount[i].innerText = data[i].timeframes.daily.current + 'hrs'
            lastWeekAmount[i].innerText = data[i].timeframes.daily.previous + 'hrs'

            timeSpans[0].style.color = '#fff'
            timeSpans[0].addEventListener('mouseover', () => {
                timeSpans[0].style.color = '#fff'
            })
            timeSpans[0].addEventListener('mouseout', () => {
                timeSpans[0].style.color = '#fff'
            })

            timeSpans[1].style.color = 'var(--desaturated-blue)'
            timeSpans[2].style.color = 'var(--desaturated-blue)'

            timeSpans[1].addEventListener('mouseover', () => {
                timeSpans[1].style.color = '#fff'
            })
            timeSpans[2].addEventListener('mouseover', () => {
                timeSpans[2].style.color = '#fff'
            })
            timeSpans[1].addEventListener('mouseout', () => {
                timeSpans[1].style.color = 'var(--desaturated-blue)'
            })
            timeSpans[2].addEventListener('mouseout', () => {
                timeSpans[2].style.color = 'var(--desaturated-blue)'
            })
        })

        timeSpans[1].addEventListener('click', () => {
            amount[i].innerText = data[i].timeframes.weekly.current + 'hrs'
            lastWeekAmount[i].innerText = data[i].timeframes.weekly.previous + 'hrs'

            timeSpans[1].style.color = '#fff'
            timeSpans[1].addEventListener('mouseover', () => {
                timeSpans[1].style.color = '#fff'
            })
            timeSpans[1].addEventListener('mouseout', () => {
                timeSpans[1].style.color = '#fff'
            })

            timeSpans[0].style.color = 'var(--desaturated-blue)'
            timeSpans[2].style.color = 'var(--desaturated-blue)'

            timeSpans[0].addEventListener('mouseover', () => {
                timeSpans[0].style.color = '#fff'
            })
            timeSpans[2].addEventListener('mouseover', () => {
                timeSpans[2].style.color = '#fff'
            })
            timeSpans[0].addEventListener('mouseout', () => {
                timeSpans[0].style.color = 'var(--desaturated-blue)'
            })
            timeSpans[2].addEventListener('mouseout', () => {
                timeSpans[2].style.color = 'var(--desaturated-blue)'
            })
        })

        timeSpans[2].addEventListener('click', () => {
            amount[i].innerText = data[i].timeframes.monthly.current + 'hrs'
            lastWeekAmount[i].innerText = data[i].timeframes.monthly.previous + 'hrs'

            timeSpans[2].style.color = '#fff'
            timeSpans[2].addEventListener('mouseover', () => {
                timeSpans[2].style.color = '#fff'
            })
            timeSpans[2].addEventListener('mouseout', () => {
                timeSpans[2].style.color = '#fff'
            })

            timeSpans[0].style.color = 'var(--desaturated-blue)'
            timeSpans[1].style.color = 'var(--desaturated-blue)'
            
            timeSpans[0].addEventListener('mouseover', () => {
                timeSpans[0].style.color = '#fff'
            })
            timeSpans[1].addEventListener('mouseover', () => {
                timeSpans[1].style.color = '#fff'
            })
            timeSpans[0].addEventListener('mouseout', () => {
                timeSpans[0].style.color = 'var(--desaturated-blue)'
            })
            timeSpans[1].addEventListener('mouseout', () => {
                timeSpans[1].style.color = 'var(--desaturated-blue)'
            })
        })
    }
})