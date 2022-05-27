export function getList() {
    return fetch('https://app.swaggerhub.com/apis/Bandsintown/PublicAPI/3.0.0')
      .then(data => data.json())
  }