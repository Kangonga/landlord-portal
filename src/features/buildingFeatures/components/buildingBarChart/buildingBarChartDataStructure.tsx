
export function getLast12Months(){
    let monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let d = new Date();
    let months = []
    for (let i=0; i<=11; i++) {
        let year = String(d.getFullYear()).slice(-2)
        let month = monthName[d.getMonth()] + ' / ' + year;
        months.push(month)
        d.setMonth(d.getMonth() - 1);
    }
    return {
        start:`${months[0]}`,
        end: `${months[11]}`,
        labels: `${months}`
    }
}
//obtain labels for last 12 months
//make api request with the start and end dates

//bar chart options
const barchartTitle: string = 'Building collections for the last 12 months'
const barChartLabels = getLast12Months().labels
export const options = {
    responsive:true,
    plugins: {
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: barchartTitle,
        },
      },
}
export const barChartData = {
    labels: barChartLabels,
    datasets:[

    ]
}