module.exports = async function (context, req) {
  if (req.method !== "POST") {
    context.res = {
      status: 405,
      body: "Method Not Allowed",
    };
    return;
  }

  const { name, email, phone, projectType, message } = req.body || {};

  if (!name || !email || !projectType) {
    context.res = {
      status: 400,
      headers: { "Content-Type": "application/json" },
      body: { error: "Missing required fields" },
    };
    return;
  }

  // Temporary logging (for testing in Azure Logs)
  context.log("New HiGreenWall contact request", {
    name,
    email,
    phone,
    projectType,
    message,
    time: new Date().toISOString(),
  });

  context.res = {
    status: 200,
    headers: { "Content-Type": "application/json" },
    body: {
      success: true,
      message: "Form received successfully",
    },
  };
};
