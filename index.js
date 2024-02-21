function displayUsers(users) {
    const userListDiv = document.getElementById('userList');
    userListDiv.innerHTML = ''; // Clear previous results
    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.innerHTML = `
            <h3>${user.name}</h3>
            <p>Email: <input type="text" value="${user.email}" data-id="${user.id}" data-field="email"></p>
            <p>Phone: <input type="text" value="${user.phone}" data-id="${user.id}" data-field="phone"></p>
            <p>Website: <input type="text" value="${user.website}" data-id="${user.id}" data-field="website"></p>
            <button onclick="saveUserData(${user.id})">Save</button>
            <hr>
        `;
        userListDiv.appendChild(userDiv);
    });
}

async function saveUserData(userId) {
    const emailInput = document.querySelector(`input[data-id="${userId}"][data-field="email"]`);
    const phoneInput = document.querySelector(`input[data-id="${userId}"][data-field="phone"]`);
    const websiteInput = document.querySelector(`input[data-id="${userId}"][data-field="website"]`);

    const userData = {
        email: emailInput.value,
        phone: phoneInput.value,
        website: websiteInput.value
    };

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }

        alert('User data updated successfully!');
    } catch (error) {
        console.error('Error updating user data:', error.message);
        alert('Error updating user data. Please try again.');
    }
}
