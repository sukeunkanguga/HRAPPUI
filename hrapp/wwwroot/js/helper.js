$(document).ready(function () {

    $.ajax({

        type: "GET",
        url: 'http://localhost:3000/api/employees',
        dataType: 'json',
        success: function (obj, textstatus) {

            $('#employeesTable').DataTable({
                data: obj,
                sDom: 'frtlip',
                searching: false,

                columns: [
                    {
                        title: 'staffID',
                        data: 'id',
                        width: '5%'
                    },
                    {
                        title: 'Name',
                        data: null,
                        render: function (data, type, row) {
                            return data.first_name + ' ' + data.other_names + ' ' +data.last_name ;
                        },
                        width: '25%'
                    },
                    {
                        title: 'Email',
                        data: 'email',
                        width: '15%'
                    },
                    {
                        title: 'Phone',
                        data: 'phone',
                        width: '15%'
                    },
                    {
                        title: 'section',
                        //name: 'Section',
                        width: '20%'
                    },
                    {
                        title: 'unit',
                        //name: 'Unit',
                        width: '20%'
                    }
                ]
            });
        }
    });

    //    var dataSet = [];

    //    function loadDoc(url, cFunction) {
    //        var xhttp;
    //        xhttp = new XMLHttpRequest();
    //        xhttp.onreadystatechange = function () {
    //            if (this.readyState == 4 && this.status == 200) {
    //                cFunction(this);
    //            }
    //        };
    //        xhttp.open("GET", url, true);
    //        xhttp.send();
    //    }
    //    function myFunction(xhttp) {
    //        dataSet = (xhttp.responseText);
    //        console.log(dataSet);

    //    loadDoc('http://localhost:3000/api/employees', myFunction);

    $('ul.nav-tabs > li, #positive').bind('click mousedown mouseup keypress', function (event, ui) {
        var a = ($('.nav-tabs > li:nth-last-child(1)').hasClass('active')) ? 'Save' : 'Next';
        if (a == 'Save') {
            $('#negative').removeClass('disabled');
            console.log(a);
        }
        $('#positive').text(a);

    });


    //var c = ((a < b) ? 'minor' : 'major');
});
