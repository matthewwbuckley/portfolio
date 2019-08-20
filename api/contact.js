const apiBase = 'https://matthewwbuckley.com/api/'

export const sendContact = async (email, text) => {
  console.log('contact request start')
  const response = await fetch(apiBase+'contact',{
    method: 'post',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({
      email: email,
      text: text
    })
  })

  const data = await response.json();
  console.log('request sent')
  console.log(data)
  console.log('------------------')

  return data
}

export default sendContact