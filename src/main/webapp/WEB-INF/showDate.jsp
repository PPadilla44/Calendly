<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<%--
  Created by IntelliJ IDEA.
  User: whosf
  Date: 6/27/2021
  Time: 4:16 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="/css/show.css">
    <title>Confirm Date</title>
</head>
<body>
<div class="container-fluid p-3 d-flex align-items-center flex-column" style="background-color: #E7E0C9; height: 100vh;">
    <div id="card"  class="d-flex p-3 align-items-center ">
        <div class="d-flex align-items-center flex-column">
            <h1>Confirm Appointment for</h1>
            <h1 class="m-0"><c:out value="${month}"/> <c:out value="${day}"/></h1>
            <h3><c:out value="${time}"/>:00</h3>
        </div>
        <form action="/new/event" method="post">
            <input type="hidden" name="date" value="${date}">
            <input id="confirm-app" class="controls" type="submit" value="Confirm">
        </form>
        <a href="/calendar" class="controls" id="go-back" >Go Back</a>
    </div>

</div>

</body>
</html>
