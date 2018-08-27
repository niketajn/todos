$( document ).ready(function() {
      refreshTable();
    var filterUserID = "";
    $("input[name=userid-number]").on('change',function(){
        filterUserID=$(this).val();
        refreshTable();
    });

    //populate the table using the global todoArray
    function refreshTable(){
            if(filterUserID!==""){

              $('#table-content').empty();

            $.each(todoData, function( index, value ) {
                  
                  if((value.userId) === (parseInt(filterUserID))) {  
                  var tr = $("<tr></tr>"); //generating an empty tr tag

                  var td1 = $("<td></td>");
                  td1.html(value.userId);
                  tr.append(td1);

                  var td2 = $("<td></td>");
                  td2.html(value.title);
                  tr.append(td2);

                  var td3 = $("<td></td>");
                  
                    td3.html(value.id);
                    tr.append(td3);

                  $("#table-content").append(tr);
                }
              });
          }else{
                   $('#table-content').empty();
                   $.each(todoData, function( index, value ) {
                    var tr = $("<tr></tr>"); //generating an empty tr tag

                  var td1 = $("<td></td>");
                  td1.html(value.userId);
                  tr.append(td1);

                  var td2 = $("<td></td>");
                  td2.html(value.title);
                  tr.append(td2);

                  var td3 = $("<td></td>");
                  
                    td3.html(value.id);
                    tr.append(td3);

                  $("#table-content").append(tr);
                });
        }
    }
  refreshTable();
  });