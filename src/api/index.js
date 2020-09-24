export const getTreatments = () => {
  return fetch(`https://haenyeospa.herokuapp.com/api/v1/treatments`)
    .then(r => r.json())
}

export const getAppointment = () => {
  return fetch(`https://haenyeospa.herokuapp.com/api/v1/users/1/appointments`)
    .then(r => r.json())
}

export const addAppointment = () => {
  return fetch(`https://haenyeospa.herokuapp.com/api/v1/users/1/appointments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify()
  })
    .then(r => r.json().then(data => {
      if (r.ok) return data
      throw data
    }))
}