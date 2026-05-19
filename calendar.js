const weeks = ['日', '月', '火', '水', '木', '金', '土'];
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const today = date.getDate();
const startDate = new Date(year, month - 1, 1);
const endDate = new Date(year, month, 0);
const endDayCount = endDate.getDate();
const startDay = startDate.getDay();
let dayCount = 1;
let calendarHtml = '';
calendarHtml += '<p class="currentMonth">' + year + '年' + month + '月</p>';

//ここからカレンダー
//ここから曜日
calendarHtml += '<table>';
for (let i = 0; i < weeks.length; i++) {
    calendarHtml += '<td>' + weeks[i] + '</td>';
}
//ここまで曜日
for (let w = 0; w < 6; w++) {
    calendarHtml += '<tr>';
    for (let d = 0; d < 7; d++) {
        if (w == 0 && d < startDay) {
            calendarHtml += '<td></td>';
        } else if (dayCount > endDayCount) {
            calendarHtml += '<td></td>';
        } else if (dayCount === today) {
            calendarHtml += "<td><span class='today'>" + dayCount + "</span></td>";
            dayCount++;
        } else {
            calendarHtml += '<td>' + dayCount + '</td>';
            dayCount++;
        }
    }
    calendarHtml += '</tr>';
}
calendarHtml += '</table>';
calendarHtml += '</th>'
//ここまでカレンダー

document.querySelector('#calendar').innerHTML = calendarHtml;
