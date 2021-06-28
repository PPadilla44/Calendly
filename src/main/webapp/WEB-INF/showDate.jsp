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
    <title>ShowDate</title>
</head>
<body>
<h1><c:out value="${date}"/></h1>
<form action="/new/event" method="post">
    <input type="hidden" name="date" value="${date}">
    <input type="submit" value="Submit">
</form>
</body>
</html>
