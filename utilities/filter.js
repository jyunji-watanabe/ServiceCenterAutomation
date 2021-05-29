const { I } = inject();

class Filter {
    constructor() {
        // assume that a week starts on Sunday and ends on Saturday
        let today = new Date();
        let dayOfTheWeek = today.getDay();  // 0: Sunday, 1: Monday, ...
        let lastWeekStart = this.addDays(today, -1 * dayOfTheWeek - 7);  // Sunday of the last week
        lastWeekStart = this.setMidnight(lastWeekStart); // 00:00:00 on Sunday of the last week
        let lastWeekEnd = this.addDays(lastWeekStart, 7);
        lastWeekEnd.setSeconds(-1);

        this.startDateAsString = this.formatDateAsDateFilter(lastWeekStart);
        this.endDateAsString = this.formatDateAsDateFilter(lastWeekEnd);
    }
    
    addDays (baseDate, days) {
        let tempDate = new Date(baseDate);
        tempDate.setDate(tempDate.getDate() + days);
        return tempDate;
    }

    setMidnight (baseDate) {  // ex: 2021/05/29 11:41:22 -> 2021/05/29 00:00:00
        let tempDate = new Date(baseDate);
        tempDate.setHours(0);
        tempDate.setMinutes(0);
        tempDate.setSeconds(0);
        return tempDate;
    }

    formatDateAsDateFilter (date) {
        return `${date.getFullYear()}-${(date.getMonth() + 1 + '').padStart(2, '0')}-${(date.getDate() + '').padStart(2, '0')}` +
        ` ${(date.getHours() + '').padStart(2, '0')}:${(date.getMinutes() + '').padStart(2, '0')}:${(date.getSeconds() + '').padStart(2, '0')}`;
    }
}

module.exports = Filter;