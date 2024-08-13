const full_name = document.querySelector('.name');
const username = document.querySelector('.username');
const birthday = document.querySelector('.birthday');
const email = document.querySelector('.email');
const sex = document.querySelector('.sex');
const address = document.querySelector('.address');

const api_url = "https://api.api-ninjas.com/v1/randomuser";
const api_key = 'yglYWn3brjxEO85D9NtnRg==pdfW82SZ0xKRZT0a'; //this api key generate by site, jaha se humne api_url liya hai

const promise = async () => {
    try {
        const api_data = await fetch(api_url, {
            headers: {
                "X-Api-Key": api_key
            }
        });
        if (!api_data.ok) {
            throw new Error(`Error  Status Code : ${api_data.status} and ${api_data.statusText}`);
        } else {
            const response = await api_data.json();
            // console.log(response);
            
            // render on html

            full_name.innerHTML = response.name;
            username.innerHTML = response.username;
            birthday.innerHTML = response.birthday;
            email.innerHTML = response.email;
            sex.innerHTML = response.sex;
            address.innerHTML = response.address;
        }
    } catch (err) {
        console.log("API Fetching Error", err);
    }

}
promise();