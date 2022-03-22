// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  try {
    const data = "[\n" +
        "    {\n" +
        "        \"key\": \"social\",\n" +
        "        \"translations\": {\n" +
        "            \"en\": \"Social\"\n" +
        "        }\n" +
        "    },\n" +
        "    {\n" +
        "        \"key\": \"professional\",\n" +
        "        \"translations\": {\n" +
        "            \"en\": \"Professional\"\n" +
        "        }\n" +
        "    },\n" +
        "    {\n" +
        "        \"key\": \"male\",\n" +
        "        \"translations\": {\n" +
        "            \"en\": \"Male\"\n" +
        "        }\n" +
        "    },\n" +
        "    {\n" +
        "        \"key\": \"he_him\",\n" +
        "        \"translations\": {\n" +
        "            \"en\": \"(He/Him)\"\n" +
        "        }\n" +
        "    },\n" +
        "    {\n" +
        "        \"key\": \"languages\",\n" +
        "        \"translations\": {\n" +
        "            \"en\": \"Languages\"\n" +
        "        }\n" +
        "    },\n" +
        "    {\n" +
        "        \"key\": \"bio:\",\n" +
        "        \"translations\": {\n" +
        "            \"en\": \"Bio:\"\n" +
        "        }\n" +
        "    },\n" +
        "    {\n" +
        "        \"key\": \"skills:\",\n" +
        "        \"translations\": {\n" +
        "            \"en\": \"Skills:\"\n" +
        "        }\n" +
        "    },\n" +
        "    {\n" +
        "        \"key\": \"technologies\",\n" +
        "        \"translations\": {\n" +
        "            \"en\": \"Technologies\"\n" +
        "        }\n" +
        "    },\n" +
        "    {\n" +
        "        \"key\": \"devops\",\n" +
        "        \"translations\": {\n" +
        "            \"en\": \"DevOps\"\n" +
        "        }\n" +
        "    },\n" +
        "    {\n" +
        "        \"key\": \"cloud_technologies\",\n" +
        "        \"translations\": {\n" +
        "            \"en\": \"Cloud Technologies\"\n" +
        "        }\n" +
        "    }\n" +
        "]";
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
