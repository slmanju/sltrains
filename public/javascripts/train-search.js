/**
 * Created by manjula on 10/29/17.
 */
(function () {
    var ajax = {};

    ajax.encode = function (data) {
        var result = typeof data === 'string' ? data : Object.keys(data).map(
            function (k) {
                return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
            }
        ).join('&');
        return result;
    };

    ajax.post = function post(params) {
        var data = ajax.encode(params.data);
        var request = new XMLHttpRequest();
        request.open("POST", params.url);
        request.onreadystatechange = function () {
            if (request.readyState > 3 && request.status === 200) {
                params.success(request.responseText);
            } else if (request.readyState > 3 && request.status >= 400) {
                params.error(request.responseText);
            }
        };
        request.onerror = function() {
            params.error(request.responseText);
        };
        request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        request.send(data);
    };

    function validate(values) {
        var errors = [];
        if (values.fromStation < 0) {
            errors.push("From station is required");
        }
        if (values.toStation < 0) {
            errors.push("To station is required");
        }
        if (values.startTime < 0) {
            errors.push("Start time is required");
        }
        if (values.endtime < 0) {
            errors.push("End time is required");
        }
        return errors;
    }

    function search(event) {
        event.preventDefault();
        var errorDiv = document.getElementById("error");
        errorDiv.innerHTML = "";
        function getValue(id) {
            return document.getElementById(id).value;
        }
        function updateResult(result) {
            document.getElementById("result").innerHTML = result;
        }
        var values = {
            fromStation: getValue("fromstation"),
            toStation: getValue("tostation"),
            startTime: getValue("starttime"),
            endtime: getValue("endtime"),
            date: getValue("date")
        };
        var errors = validate(values);
        if (errors.length > 0) {
            var errorHtml = "<ul>";
            errors.forEach(function (error) {
                errorHtml = errorHtml + "<li>" + error + "</li>";
            });
            errorHtml = errorHtml + "</ul>";
            errorDiv.innerHTML = errorHtml;
        } else {
            updateResult("Wait, i'm looking for your train....");
            ajax.post({
                url: "/search",
                data: values,
                success: function (data) {
                    updateResult(data);
                },
                error: function (data) {
                    updateResult(data);
                }
            });
        }
    }

    document.getElementById("search").addEventListener("click", search);
}());