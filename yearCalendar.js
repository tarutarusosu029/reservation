const weeks = ['日', '月', '火', '水', '木', '金', '土'];
const date = new Date();
const year = date.getFullYear();

const todayYear = date.getFullYear();
const todayMonth = date.getMonth() + 1;
const todayDate = date.getDate();

let calendarHtml = '';

calendarHtml += `<table class="yearCalendar">`;

for (let row = 0; row < 3; row++) {
    calendarHtml += '<tr>';
    for (let col = 0; col < 4; col++) {
        const month = row * 4 + col + 1;
        const startDate = new Date(year, month - 1, 1);
        const endDate = new Date(year, month, 0);
        const startDay = startDate.getDay();
        const endDayCount = endDate.getDate();
        let dayCount = 1;
        calendarHtml += `<td class="monthCell card">`;
        calendarHtml += `
            <p class="currentMonth">${month}月</p>
            <table class="monthTable">
                <tr>
        `;

        for (let i = 0; i < weeks.length; i++) {
            calendarHtml += `<td>${weeks[i]}</td>`;
        }

        calendarHtml += '</tr>';

        for (let w = 0; w < 6; w++) {
            calendarHtml += '<tr>';
            for (let d = 0; d < 7; d++) {
                if (w === 0 && d < startDay) {
                    calendarHtml += '<td></td>';
                } else if (dayCount > endDayCount) {
                    calendarHtml += '<td></td>';
                } else if (
                    year === todayYear &&
                    month === todayMonth &&
                    dayCount === todayDate
                ) {
                    calendarHtml += `<td><span class="today">${dayCount}</span></td>`;
                    dayCount++;
                } else {
                    calendarHtml += `<td>${dayCount}</td>`;
                    dayCount++;
                }
            }
            calendarHtml += '</tr>';
        }
        calendarHtml += `
            </table>
        `;
        calendarHtml += `</td>`;
    }
    calendarHtml += '</tr>';
}
calendarHtml += `</table>`;
document.querySelector('#calendar').innerHTML = calendarHtml;
// ©2026 tarutarusosu029