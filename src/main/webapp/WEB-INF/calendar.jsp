<%--
  Created by IntelliJ IDEA.
  User: whosf
  Date: 6/26/2021
  Time: 7:31 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <title>Calendar</title>
</head>
<body>
<div class="main mt-5 container border border-2 border-dark p-3" style="width:400px; height:400px">
    <div class="month mt-2 container justify-content-between d-flex">
        <div id="month"></div>
        <div class="d-flex">
            <p class="btn btn-secondary" onclick="changeMonth(0)" style="margin-right: 20px" >Prev</p>
            <p class="btn btn-secondary" onclick="changeMonth(1)" >Next</p>
        </div>
    </div>
<%--    <div id="calendar"></div>--%>
    <table id="calendar" style="width:380px; height:300px"></table>

</div>
</body>
<script type="text/javascript" src="script/script.js"></script>
</html>
