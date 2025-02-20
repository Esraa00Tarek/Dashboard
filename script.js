document.addEventListener('DOMContentLoaded', function () {

    const outstandingCtx = document.getElementById('outstandingChart').getContext('2d');
    const outstandingChart = new Chart(outstandingCtx, {
        type: 'line',
        data: {
            labels: ['10k', '20k', '30k', '40k', '50k', '60k', '70k', '80k', '90k', '100k'],
            datasets: [{
                label: 'Total Outstanding',
                data: [12, 19, 3, 5, 2, 3, 20, 15, 17, 22], 
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const profitCtx = document.getElementById('profitChart').getContext('2d');
    const profitChart = new Chart(profitCtx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Total Profit',
                data: [65, 59, 80, 81, 56, 55, 40, 60, 70, 66, 50, 45], 
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Total Revenue Chart
    const revenueCtx = document.getElementById('revenueChart').getContext('2d');
    const revenueChart = new Chart(revenueCtx, {
        type: 'doughnut',
        data: {
            labels: ['Invoice', 'Online Sales', 'Rental Income', 'In-Person Sales'],
            datasets: [{
                label: 'Total Revenue',
                data: [45, 55, 35, 15], // Placeholder data
                backgroundColor: [
                  'rgba(4, 79, 129, 0.8)',
                     'rgba(6, 135, 58, 0.8)',
                     'rgba(255, 206, 86, 0.8)',
                     'rgba(110, 3, 26, 0.8)'
                ],
                borderColor: [
                    'rgba(4, 79, 129, 1)',
                     'rgba(6, 135, 58, 1)',
                     'rgba(255, 206, 86, 1)',
                     'rgba(110, 3, 26, 1)'
                ],
                borderWidth: 1
            }]
        }
    });

     
     const spendingCtx = document.getElementById('spendingChart').getContext('2d');
     const spendingChart = new Chart(spendingCtx, {
         type: 'doughnut',
         data: {
             labels: ['Supplies', 'Employee Benefits', 'Office Expenses', 'Uncategorized'],
             datasets: [{
                 label: 'Total Spending',
                 data: [14, 5, 2, 1], 
                 backgroundColor: [
                     'rgba(4, 79, 129, 0.8)',
                     'rgba(6, 135, 58, 0.8)',
                     'rgba(255, 206, 86, 0.8)',
                     'rgba(110, 3, 26, 0.8)'
                 ],
                 borderColor: [
                    'rgba(4, 79, 129, 1)',
                     'rgba(6, 135, 58, 1)',
                     'rgba(255, 206, 86, 1)',
                     'rgba(110, 3, 26, 1)'
                 ],
                 borderWidth: 1
             }]
         }
     });
});