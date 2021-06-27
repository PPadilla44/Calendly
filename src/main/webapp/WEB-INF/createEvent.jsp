<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%--
  Created by IntelliJ IDEA.
  User: whosf
  Date: 6/26/2021
  Time: 4:41 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

  <title>Create Event</title>
</head>
<body>
<h1>Create an event</h1>
<form action="/new/event" method="post">
  <div>
    <label for="startDate">startDate</label>
    <input type="date" name="startDate" id="startDate">
  </div>
  <div>
    <label for="startTime">startDateTime</label>
    <input type="time" name="startTime" id="startTime">
  </div>

  <input type="submit" value="submit">
</form>
</body>
</html>
