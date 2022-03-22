// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method

const handler = async (event) => {
  try {
    const data = "{\n" +
        "    \"basic_info\": {\n" +
        "        \"image\": \"profile-pic.jpg\",\n" +
        "        \"name\": {\n" +
        "            \"first_name\": \"Amrita \",\n" +
        "            \"middle_name\": \"\",\n" +
        "            \"last_name\": \"Krishna\",\n" +
        "            \"order\": [\n" +
        "                \"first_name\",\n" +
        "                \"middle_name\",\n" +
        "                \"last_name\"\n" +
        "            ]\n" +
        "        },\n" +
        "        \"pronouns\": {\n" +
        "            \"value\": \"she_her\",\n" +
        "            \"emoji\": \"&#128102;\"\n" +
        "        }\n" +
        "    },\n" +
        "    \"contact_info\": {\n" +
        "        \"phone_no\": {\n" +
        "            \"value\": \"+1 (782) 882-2376\",\n" +
        "            \"emoji\": \"&#128222;\"\n" +
        "        },\n" +
        "        \"email_id\": {\n" +
        "            \"value\": \"amritakrishna12@gmail.com\",\n" +
        "            \"emoji\": \"&#128232;\",\n" +
        "            \"emoji_style\": {\n" +
        "                \"font-size\": \"20px\"\n" +
        "            }\n" +
        "        },\n" +
        "        \"websites\": [\n" +
        "            {\n" +
        "                \"name\": \"professional\",\n" +
        "                \"labelKey\": \"professional\",\n" +
        "                \"data\": [\n" +
        "                    {\n" +
        "                        \"name\": \"LinkedIn\",\n" +
        "                        \"url\": \"https://www.linkedin.com/in/amritakrishna/\",\n" +
        "                        \"icon\": \"linkedin.svg\"\n" +
        "                    },\n" +
        "                    {\n" +
        "                        \"name\": \"GitHub\",\n" +
        "                        \"url\": \"https://github.com/amrita1996\",\n" +
        "                        \"icon\": \"github.svg\"\n" +
        "                    },\n" +
        "                    {\n" +
        "                        \"name\": \"Wordpress\",\n" +
        "                        \"url\": \"\",\n" +
        "                        \"icon\": \"wordpress.svg\"\n" +
        "                    },\n" +
        "                    {\n" +
        "                        \"name\": \"Codechef\",\n" +
        "                        \"url\": \"\",\n" +
        "                        \"icon\": \"codechef.svg\"\n" +
        "                    },\n" +
        "                    {\n" +
        "                        \"name\": \"Hackerrank\",\n" +
        "                        \"url\": \"\",\n" +
        "                        \"icon\": \"hackerrank.svg\"\n" +
        "                    }\n" +
        "                ]\n" +
        "            },\n" +
        "            {\n" +
        "                \"name\": \"social\",\n" +
        "                \"labelKey\": \"social\",\n" +
        "                \"data\": [\n" +
        "                    {\n" +
        "                        \"name\": \"YouTube\",\n" +
        "                        \"url\": \"\",\n" +
        "                        \"icon\": \"youtube.svg\"\n" +
        "                    },\n" +
        "                    {\n" +
        "                        \"name\": \"Instagram\",\n" +
        "                        \"url\": \"\",\n" +
        "                        \"icon\": \"instagram.svg\"\n" +
        "                    },\n" +
        "                    {\n" +
        "                        \"name\": \"Twitter\",\n" +
        "                        \"url\": \"\",\n" +
        "                        \"icon\": \"twitter.svg\"\n" +
        "                    },\n" +
        "                    {\n" +
        "                        \"name\": \"Facebook\",\n" +
        "                        \"url\": \"\",\n" +
        "                        \"icon\": \"facebook.svg\"\n" +
        "                    }\n" +
        "                ]\n" +
        "            }\n" +
        "        ]\n" +
        "    },\n" +
        "    \"skills_info\": {\n" +
        "        \"titleKey\": \"skills:\",\n" +
        "        \"details\": [\n" +
        "            {\n" +
        "                \"title\": \"languages\",\n" +
        "                \"labelKey\": \"languages\",\n" +
        "                \"skills\": [\n" +
        "                    {\n" +
        "                        \"name\": \"HTML5\",\n" +
        "                        \"icon\": \"html5.svg\",\n" +
        "                        \"percentage\": 85,\n" +
        "                        \"size\": \"sm\"\n" +
        "                    },\n" +
        "                    {\n" +
        "                        \"name\": \"CSS3\",\n" +
        "                        \"icon\": \"css3.svg\",\n" +
        "                        \"percentage\": 85,\n" +
        "                        \"size\": \"sm\"\n" +
        "                    },\n" +
        "                    {\n" +
        "                        \"name\": \"Angular\",\n" +
        "                        \"icon\": \"angular.svg\",\n" +
        "                        \"percentage\": 95,\n" +
        "                        \"size\": \"sm\"\n" +
        "                    },\n" +
        "                    {\n" +
        "                        \"name\": \"Javascript\",\n" +
        "                        \"icon\": \"javascript.svg\",\n" +
        "                        \"percentage\": 95,\n" +
        "                        \"size\": \"sm\"\n" +
        "                    },\n" +
        "                    {\n" +
        "                        \"name\": \"Typescript\",\n" +
        "                        \"icon\": \"typescript.svg\",\n" +
        "                        \"percentage\": 95,\n" +
        "                        \"size\": \"sm\"\n" +
        "                    },\n" +
        "                    {\n" +
        "                        \"name\": \"NodeJS\",\n" +
        "                        \"icon\": \"nodejs.svg\",\n" +
        "                        \"percentage\": 80,\n" +
        "                        \"size\": \"sm\"\n" +
        "                    }\n" +
        "                ]\n" +
        "            },\n" +
        "            {\n" +
        "                \"title\": \"cloud_technologies\",\n" +
        "                \"labelKey\": \"cloud_technologies\",\n" +
        "                \"skills\": [\n" +
        "                    {\n" +
        "                        \"name\": \"Netlify\",\n" +
        "                        \"icon\": \"netlify.svg\",\n" +
        "                        \"percentage\": 40,\n" +
        "                        \"size\": \"sm\"\n" +
        "                    }\n" +
        "                ]\n" +
        "            }\n" +
        "        ]\n" +
        "    },\n" +
        "    \"bio_info\": {\n" +
        "        \"titleKey\": \"bio:\",\n" +
        "        \"details\": [\n" +
        "            \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quam dolor, gravida ac fermentum id, vestibulum ut sem. Curabitur sed odio in eros euismod imperdiet quis ac erat. Aliquam accumsan dapibus ex, tincidunt egestas ligula sagittis sed.\",\n" +
        "            \"Suspendisse pretium venenatis turpis in molestie.\",\n" +
        "            \"Nulla pulvinar ac nulla ac sollicitudin. Sed molestie erat sit amet nibh sodales, ut laoreet urna laoreet. Donec consequat sapien nec ante malesuada, a auctor ante consequat.\",\n" +
        "            \"Praesent vitae suscipit eros, ut cursus nibh. Ut non molestie lectus\"\n" +
        "        ]\n" +
        "    }\n" +
        "}";
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
