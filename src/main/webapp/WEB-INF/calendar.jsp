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
<div class="container-fluid p-3 d-flex justify-content-center" style="background-color: #E7E0C9; height: 100vh;">
    <div class="container p-3 border border-dark  rounded shadow-lg" style="background-color: rgb(193, 207, 192); width: 500px; height: fit-content">
        <div class="container text-center">
            <h2 style="color: #11324D">Thank You For Choosing Pablo's Pizza Palace!</h2>
            <h5 style="color: #11324D" class="mt-2 mb-4">Please select a day for your appointment</h5>
        </div>
        <div class="main sticky-top container border border-2 border-dark p-3 align-items-center d-flex flex-column"
             style="width:425px;">
            <div class="month mt-2 container justify-content-between d-flex">
                <div id="month" style="color: #11324D">
                    <%--            js generated month name--%>
                </div>
                <div class="d-flex" id="buttons">
                    <%---                js generated buttons ---%>
                    <p class="btn btn-secondary" id="prev" onclick="changeMonth(0)"  style="visibility: hidden; margin-right: 20px">Prev</p>

                    <p class="btn btn-secondary" id="next" style="visibility: visible" onclick="changeMonth(1)">Next</p>
                </div>
            </div>
            <table id="calendar" style="width:400px; height:300px">
                <%--       js generated calendar    --%>
            </table>
        </div>
    </div>
    <%--    Hidden until date is clicked--%>
    <div class="mt-5" id="timeDiv" style="visibility: hidden;">
        <h5 style="color: white;">Please Select a time</h5>
        <div id="times">
            <%--            js generate times slots--%>
        </div>
    </div>
</div>
</body>
<script type="text/javascript" src="script/script.js"></script>
</html>
