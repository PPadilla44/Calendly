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
<div class="container mt-5 d-flex">
    <div class="container">
        <div class="container text-center">
            <h2>Thank You For Choosing RheShroomz!</h2>
            <h5 class="mt-2 mb-4">Please select a day for your appointment</h5>
        </div>
        <div class="main sticky-top container border border-2 border-dark p-3 align-items-center d-flex flex-column"
             style="width:400px;">
            <div class="month mt-2 container justify-content-between d-flex">
                <div id="month">
                    <%--            js generated month name--%>
                </div>
                <div class="d-flex" id="buttons">
                    <%---                js generated buttons ---%>
                    <p class="btn btn-secondary" onclick="changeMonth(1)">Next</p>
                </div>
            </div>
            <table id="calendar" style="width:380px; height:300px">
                <%--       js generated calendar    --%>
            </table>
        </div>
    </div>
<%--    Hidden until date is clicked--%>
    <div class="container mt-5" id="timeDiv" style="visibility: hidden;" >
        <h5>Please Select a time</h5>
        <div id="times">
<%--            js generate times slots--%>
        </div>
    </div>
</div>
</body>
<script type="text/javascript" src="script/script.js"></script>
</html>
