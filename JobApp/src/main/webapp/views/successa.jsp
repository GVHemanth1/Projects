<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job Post Success</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            margin: 20px;
        }
        .container {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #4CAF50;
        }
        p {
            font-size: 16px;
            line-height: 1.5;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Job Post Submitted Successfully!</h1>
        <p><strong>Post ID:</strong> ${jobPost.postId}</p>
        <p><strong>Profile:</strong> ${jobPost.postProfile}</p>
        <p><strong>Description:</strong> ${jobPost.postDesc}</p>
        <p><strong>Required Experience:</strong> ${jobPost.reqExperience} years</p>
        <p><strong>Tech Stack:</strong>
            <ul>
                <c:forEach var="tech" items="${jobPost.postTechStack}">
                    <li>${tech}</li>
                </c:forEach>
            </ul>
        </p>
        <a href="home">Go Back to Home</a>
    </div>
</body>
</html>
