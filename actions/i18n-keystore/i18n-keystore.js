// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  try {
    const data = [
      {
        "key": "social",
        "translations": {
          "en": "Social"
        }
      },
      {
        "key": "professional",
        "translations": {
          "en": "Professional"
        }
      },
      {
        "key": "male",
        "translations": {
          "en": "Male"
        }
      },
      {
        "key": "he_him",
        "translations": {
          "en": "(He/Him)"
        }
      },
      {
        "key": "languages",
        "translations": {
          "en": "Languages"
        }
      },
      {
        "key": "bio:",
        "translations": {
          "en": "Bio:"
        }
      },
      {
        "key": "skills:",
        "translations": {
          "en": "Skills:"
        }
      },
      {
        "key": "technologies",
        "translations": {
          "en": "Technologies"
        }
      },
      {
        "key": "devops",
        "translations": {
          "en": "DevOps"
        }
      },
      {
        "key": "cloud_technologies",
        "translations": {
          "en": "Cloud Technologies"
        }
      }
    ];
    return {
      statusCode: 200,
      body: JSON.stringify(data),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
