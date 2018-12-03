/* Юридические Лица */
function legalEntities() {
    var numberOfContacts, resultMonth, resultWeek, resultDay,
        month1, month2, month3, month4, month5, month6, month7, month8, month9, month10, month11, month12, month13, month14, month15,
        week1, week2, week3, week4, week5, week6, week7, week8, week9, week10, week11, week12, week13, week14, week15,
        day1, day2, day3, day4, day5, day6, day7, day8, day9, day10, day11, day12, day13, day14, day15;

    month1 = 0.86;      week1 = 0.99;       day1 = 0.80;
    month2 = 0.80;      week2 = 0.86;       day2 = 0.72;
    month3 = 0.72;      week3 = 0.80;       day3 = 0.68;
    month4 = 0.68;      week4 = 0.72;       day4 = 0.64;
    month5 = 0.64;      week5 = 0.68;       day5 = 0.62;
    month6 = 0.62;      week6 = 0.64;       day6 = 0.60;
    month7 = 0.60;      week7 = 0.62;       day7 = 0.58;
    month8 = 0.58;      week8 = 0.60;       day8 = 0.56;
    month9 = 0.56;      week9 = 0.58;       day9 = 0.54;
    month10 = 0.54;     week10 = 0.56;      day10 = 0.52;
    month11 = 0.52;     week11 = 0.54;      day11 = 0.50;
    month12 = 0.50;     week12 = 0.52;      day12 = 0.48;
    month13 = 0.48;     week13 = 0.50;      day13 = 0.44;
    month14 = 0.30;     week14 = 0.30;      day14 = 0.30;
    month15 = 0.20;     week15 = 0.20;      day15 = 0.20;

    numberOfContacts = document.getElementById('numberOfContacts').value;

    if (numberOfContacts <= 1000) {
        resultMonth = Math.ceil(numberOfContacts*month1);
        resultWeek = Math.ceil(numberOfContacts*week1);
        resultDay = Math.ceil(numberOfContacts*day1);
    }
    else if (numberOfContacts <= 3000) {
        resultMonth = Math.ceil(numberOfContacts*month2);
        resultWeek = Math.ceil(numberOfContacts*week2);
        resultDay = Math.ceil(numberOfContacts*day2);
    }
    else if (numberOfContacts <= 5000) {
        resultMonth = Math.ceil(numberOfContacts*month3);
        resultWeek = Math.ceil(numberOfContacts*week3);
        resultDay = Math.ceil(numberOfContacts*day3);
    }
    else if (numberOfContacts <=10000) {
        resultMonth = Math.ceil(numberOfContacts*month4);
        resultWeek = Math.ceil(numberOfContacts*week4);
        resultDay = Math.ceil(numberOfContacts*day4);
    }
    else if (numberOfContacts <=20000) {
        resultMonth = Math.ceil(numberOfContacts*month5);
        resultWeek = Math.ceil(numberOfContacts*week5);
        resultDay = Math.ceil(numberOfContacts*day5);
    }
    else if (numberOfContacts <=30000) {
        resultMonth = Math.ceil(numberOfContacts*month6);
        resultWeek = Math.ceil(numberOfContacts*week6);
        resultDay = Math.ceil(numberOfContacts*day6);
    }
    else if (numberOfContacts <=40000) {
        resultMonth = Math.ceil(numberOfContacts*month7);
        resultWeek = Math.ceil(numberOfContacts*week7);
        resultDay = Math.ceil(numberOfContacts*day7);
    }
    else if (numberOfContacts <=50000) {
        resultMonth = Math.ceil(numberOfContacts*month8);
        resultWeek = Math.ceil(numberOfContacts*week8);
        resultDay = Math.ceil(numberOfContacts*day8);
    }
    else if (numberOfContacts <=60000) {
        resultMonth = Math.ceil(numberOfContacts*month9);
        resultWeek = Math.ceil(numberOfContacts*week9);
        resultDay = Math.ceil(numberOfContacts*day9);
    }
    else if (numberOfContacts <=70000) {
        resultMonth = Math.ceil(numberOfContacts*month10);
        resultWeek = Math.ceil(numberOfContacts*week10);
        resultDay = Math.ceil(numberOfContacts*day10);
    }
    else if (numberOfContacts <=80000) {
        resultMonth = Math.ceil(numberOfContacts*month11);
        resultWeek = Math.ceil(numberOfContacts*week11);
        resultDay = Math.ceil(numberOfContacts*day11);
    }
    else if (numberOfContacts <=90000) {
        resultMonth = Math.ceil(numberOfContacts*month12);
        resultWeek = Math.ceil(numberOfContacts*week12);
        resultDay = Math.ceil(numberOfContacts*day12);
    }
    else if (numberOfContacts <=100000) {
        resultMonth = Math.ceil(numberOfContacts*month13);
        resultWeek = Math.ceil(numberOfContacts*week13);
        resultDay = Math.ceil(numberOfContacts*day13);
    }
    else if (numberOfContacts <=500000) {
        resultMonth = Math.ceil(numberOfContacts*month14);
        resultWeek = Math.ceil(numberOfContacts*week14);
        resultDay = Math.ceil(numberOfContacts*day14);
    }
    else if (numberOfContacts >=500001) {
        resultMonth = Math.ceil(numberOfContacts*month15);
        resultWeek = Math.ceil(numberOfContacts*week15);
        resultDay = Math.ceil(numberOfContacts*day15);
    }

    document.getElementById('outMonth').textContent = resultMonth + '₽';
    document.getElementById('outWeek').textContent = resultWeek + '₽';
    document.getElementById('outDay').textContent = resultDay + '₽';
}
/* Физические Лица */
function individuals() {
    var numberOfContacts, resultMonth, resultWeek, resultDay,
        month1, month2, month3, month4, month5, month6, month7, month8, month9, month10, month11, month12, month13, month14, month15,
        week1, week2, week3, week4, week5, week6, week7, week8, week9, week10, week11, week12, week13, week14, week15,
        day1, day2, day3, day4, day5, day6, day7, day8, day9, day10, day11, day12, day13, day14, day15;

    month1 = 0.57;      week1 = 0.59;       day1 = 0.42;
    month2 = 0.55;      week2 = 0.57;       day2 = 0.40;
    month3 = 0.50;      week3 = 0.55;       day3 = 0.35;
    month4 = 0.45;      week4 = 0.50;       day4 = 0.30;
    month5 = 0.42;      week5 = 0.45;       day5 = 0.27;
    month6 = 0.38;      week6 = 0.42;       day6 = 0.23;
    month7 = 0.35;      week7 = 0.38;       day7 = 0.20;
    month8 = 0.34;      week8 = 0.35;       day8 = 0.19;
    month9 = 0.33;      week9 = 0.34;       day9 = 0.18;
    month10 = 0.32;     week10 = 0.33;      day10 = 0.17;
    month11 = 0.31;     week11 = 0.32;      day11 = 0.16;
    month12 = 0.30;     week12 = 0.31;      day12 = 0.15;
    month13 = 0.28;     week13 = 0.30;      day13 = 0.14;
    month14 = 0.20;     week14 = 0.20;      day14 = 0.12;
    month15 = 0.12;     week15 = 0.12;      day15 = 0.10;

    numberOfContacts = document.getElementById('numberOfContacts1').value;

    if (numberOfContacts <= 1000) {
        resultMonth = Math.ceil(numberOfContacts*month1);
        resultWeek = Math.ceil(numberOfContacts*week1);
        resultDay = Math.ceil(numberOfContacts*day1);
    }
    else if (numberOfContacts <= 3000) {
        resultMonth = Math.ceil(numberOfContacts*month2);
        resultWeek = Math.ceil(numberOfContacts*week2);
        resultDay = Math.ceil(numberOfContacts*day2);
    }
    else if (numberOfContacts <= 5000) {
        resultMonth = Math.ceil(numberOfContacts*month3);
        resultWeek = Math.ceil(numberOfContacts*week3);
        resultDay = Math.ceil(numberOfContacts*day3);
    }
    else if (numberOfContacts <=10000) {
        resultMonth = Math.ceil(numberOfContacts*month4);
        resultWeek = Math.ceil(numberOfContacts*week4);
        resultDay = Math.ceil(numberOfContacts*day4);
    }
    else if (numberOfContacts <=20000) {
        resultMonth = Math.ceil(numberOfContacts*month5);
        resultWeek = Math.ceil(numberOfContacts*week5);
        resultDay = Math.ceil(numberOfContacts*day5);
    }
    else if (numberOfContacts <=30000) {
        resultMonth = Math.ceil(numberOfContacts*month6);
        resultWeek = Math.ceil(numberOfContacts*week6);
        resultDay = Math.ceil(numberOfContacts*day6);
    }
    else if (numberOfContacts <=40000) {
        resultMonth = Math.ceil(numberOfContacts*month7);
        resultWeek = Math.ceil(numberOfContacts*week7);
        resultDay = Math.ceil(numberOfContacts*day7);
    }
    else if (numberOfContacts <=50000) {
        resultMonth = Math.ceil(numberOfContacts*month8);
        resultWeek = Math.ceil(numberOfContacts*week8);
        resultDay = Math.ceil(numberOfContacts*day8);
    }
    else if (numberOfContacts <=60000) {
        resultMonth = Math.ceil(numberOfContacts*month9);
        resultWeek = Math.ceil(numberOfContacts*week9);
        resultDay = Math.ceil(numberOfContacts*day9);
    }
    else if (numberOfContacts <=70000) {
        resultMonth = Math.ceil(numberOfContacts*month10);
        resultWeek = Math.ceil(numberOfContacts*week10);
        resultDay = Math.ceil(numberOfContacts*day10);
    }
    else if (numberOfContacts <=80000) {
        resultMonth = Math.ceil(numberOfContacts*month11);
        resultWeek = Math.ceil(numberOfContacts*week11);
        resultDay = Math.ceil(numberOfContacts*day11);
    }
    else if (numberOfContacts <=90000) {
        resultMonth = Math.ceil(numberOfContacts*month12);
        resultWeek = Math.ceil(numberOfContacts*week12);
        resultDay = Math.ceil(numberOfContacts*day12);
    }
    else if (numberOfContacts <=100000) {
        resultMonth = Math.ceil(numberOfContacts*month13);
        resultWeek = Math.ceil(numberOfContacts*week13);
        resultDay = Math.ceil(numberOfContacts*day13);
    }
    else if (numberOfContacts <=500000) {
        resultMonth = Math.ceil(numberOfContacts*month14);
        resultWeek = Math.ceil(numberOfContacts*week14);
        resultDay = Math.ceil(numberOfContacts*day14);
    }
    else if (numberOfContacts >=500001) {
        resultMonth = Math.ceil(numberOfContacts*month15);
        resultWeek = Math.ceil(numberOfContacts*week15);
        resultDay = Math.ceil(numberOfContacts*day15);
    }

    document.getElementById('outMonthPhis').textContent = resultMonth + '₽';
    document.getElementById('outWeekPhis').textContent = resultWeek + '₽';
    document.getElementById('outDayPhis').textContent = resultDay + '₽';
}