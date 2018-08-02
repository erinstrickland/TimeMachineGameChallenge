function postData(url, data) {
  return fetch(url, {
    body: JSON.stringify(data),
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    method: 'POST',
    mode: 'cors'
  })
}

export default postData