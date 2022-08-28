export const BASE_URL = 'https://api.movies.movchan.nomoredomains.xyz';

function checkResponse(res) {
    if (res.ok) {
        // console.log(res)
        return res.json()
    } else {
        return Promise.reject(res.status)
    }
}

export const register = (name, email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, password, email})
    })
    .then(checkResponse)
};

export const authorize = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })
    .then(checkResponse)
};

export const getContent = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
    .then((res) => checkResponse(res))
}

export const getSavedMovies = () => {
    console.log('getSavedMovies')
    return fetch(`${BASE_URL}/movies`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
    })
    .then((res) => {
        console.log('res = ', res)
        return checkResponse(res)
       
    })
}

export const deleteMovies = (id) => {
    return fetch(`${BASE_URL}/movies/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        }
    })
    .then(checkResponse)
}

//export const getUserInfo = () => {
//    return fetch(`${BASE_URL}/users/me`, {
//        method: 'GET',
//        headers: {
//        authorization: `Bearer ${localStorage.getItem('jwt')}`,
//        'Content-Type': 'application/json'
//    }
//    })
//        .then((res) => checkResponse(res))
//  }
//
export const updateUserInfo = (data) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'PATCH', 
        headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: data.name,
            email: data.email
        })  
    })
    .then((res) => checkResponse(res))
  }

export const saveMovie = (
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    thumbnail,
    movieId
) => {

    const body = {
        country: country || '-',
        director,
        duration,
        year,
        description,
        image,
        trailerLink: trailerLink || "https://vimeo.com/129794961",
        nameRU,
        nameEN: nameEN || '-',
        thumbnail,
        movieId,
    };

    return fetch(`${BASE_URL}/movies`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(checkResponse)
}