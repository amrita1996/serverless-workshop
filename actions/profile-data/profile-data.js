// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method

const handler = async (event) => {
  try {
    const data = {
      "basic_info": {
        "image": "profile-pic.jpg",
        "name": {
          "first_name": "Amrita ",
          "middle_name": "",
          "last_name": "Krishna",
          "order": [
            "first_name",
            "middle_name",
            "last_name"
          ]
        },
        "pronouns": {
          "value": "she_her",
          "emoji": "&#128102;"
        }
      },
      "contact_info": {
        "phone_no": {
          "value": "+1 (782) 882-2376",
          "emoji": "&#128222;"
        },
        "email_id": {
          "value": "amritakrishna12@gmail.com",
          "emoji": "&#128232;",
          "emoji_style": {
            "font-size": "20px"
          }
        },
        "websites": [
          {
            "name": "professional",
            "labelKey": "professional",
            "data": [
              {
                "name": "LinkedIn",
                "url": "https://www.linkedin.com/in/amritakrishna/",
                "icon": "linkedin.svg"
              },
              {
                "name": "GitHub",
                "url": "https://github.com/amrita1996",
                "icon": "github.svg"
              },
              {
                "name": "Wordpress",
                "url": "",
                "icon": "wordpress.svg"
              },
              {
                "name": "Codechef",
                "url": "",
                "icon": "codechef.svg"
              },
              {
                "name": "Hackerrank",
                "url": "",
                "icon": "hackerrank.svg"
              }
            ]
          },
          {
            "name": "social",
            "labelKey": "social",
            "data": [
              {
                "name": "YouTube",
                "url": "",
                "icon": "youtube.svg"
              },
              {
                "name": "Instagram",
                "url": "",
                "icon": "instagram.svg"
              },
              {
                "name": "Twitter",
                "url": "",
                "icon": "twitter.svg"
              },
              {
                "name": "Facebook",
                "url": "",
                "icon": "facebook.svg"
              }
            ]
          }
        ]
      },
      "skills_info": {
        "titleKey": "skills:",
        "details": [
          {
            "title": "languages",
            "labelKey": "languages",
            "skills": [
              {
                "name": "HTML5",
                "icon": "html5.svg",
                "percentage": 85,
                "size": "sm"
              },
              {
                "name": "CSS3",
                "icon": "css3.svg",
                "percentage": 85,
                "size": "sm"
              },
              {
                "name": "Angular",
                "icon": "angular.svg",
                "percentage": 95,
                "size": "sm"
              },
              {
                "name": "Javascript",
                "icon": "javascript.svg",
                "percentage": 95,
                "size": "sm"
              },
              {
                "name": "Typescript",
                "icon": "typescript.svg",
                "percentage": 95,
                "size": "sm"
              },
              {
                "name": "NodeJS",
                "icon": "nodejs.svg",
                "percentage": 80,
                "size": "sm"
              }
            ]
          },
          {
            "title": "cloud_technologies",
            "labelKey": "cloud_technologies",
            "skills": [
              {
                "name": "Netlify",
                "icon": "netlify.svg",
                "percentage": 40,
                "size": "sm"
              }
            ]
          }
        ]
      },
      "bio_info": {
        "titleKey": "bio:",
        "details": [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quam dolor, gravida ac fermentum id, vestibulum ut sem. Curabitur sed odio in eros euismod imperdiet quis ac erat. Aliquam accumsan dapibus ex, tincidunt egestas ligula sagittis sed.",
          "Suspendisse pretium venenatis turpis in molestie.",
          "Nulla pulvinar ac nulla ac sollicitudin. Sed molestie erat sit amet nibh sodales, ut laoreet urna laoreet. Donec consequat sapien nec ante malesuada, a auctor ante consequat.",
          "Praesent vitae suscipit eros, ut cursus nibh. Ut non molestie lectus"
        ]
      }
    };
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
