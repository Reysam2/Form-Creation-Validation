document.addEventListener('DOMContentLoaded', () => {


  async function fetchUserData() {
    const dataContainer = document.getElementById('api-data');



    try {

      // const apiUrl = 'https://jsonplaceholder.typicode.com/users';

      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await response.json();
      dataContainer.innerHTML = '';

      const userList = document.createElement('ul');
      dataContainer.appendChild(userList);

  
      users.forEach((user) => {

        const listItem = document.createElement('li');
        userList.appendChild(listItem);
        listItem.textContent = user.name;
      });
      return users

 
    } catch (error) {
      console.log('Failed to load user data.', error)
      console.log('Failed to load user data.', error)
    }



  }


  fetchUserData()




  // userList.appendChild(listItem);







})