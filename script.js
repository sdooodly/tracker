const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    { username: 'user3', password: 'password3' },
  ];

  const form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);

  function handleFormSubmit(event) {
    event.preventDefault();

    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const username = usernameInput.value;
    const password = passwordInput.value;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      const formContainer = document.querySelector('.container form');
      formContainer.style.display = 'none';

      const chartContainer = document.querySelector('.container canvas');
      chartContainer.style.display = 'block';

      const ctx = chartContainer.getContext('2d');
      const chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Mar 1', 'Mar 2', 'Mar 3', 'Mar 4', 'Mar 5', 'Mar 6'],
          datasets: [{
            label: 'Sleep (hours)',
            backgroundColor: 'rgba(0, 102, 204, 0.2)',
            borderColor: 'rgba(0, 102, 204, 1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(0, 102, 204, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(0, 102, 204, 1)',
            data: [8, 7.5, 8, 7, 6.5, 7],
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
    } else {
      alert('Invalid username or password');
    }
  }