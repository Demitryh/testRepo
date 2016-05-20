
function addRow(n,name,shortname,code,ED,state) {
    var enter=[n,name,shortname,code,ED,state],
        tabContent= "<tr>";
    for (var i=0;i<=10;i++)
    {
        tabContent+="<td>"+enter[i]+"</td> " +
            "<td>"+enter[i]+"</td>" +
            "<td>"+enter[i]+"</td>" +
            "<td>"+enter[i]+"</td>" +
            "<td>"+enter[i]+"</td>" ;
        tabContent+="</tr>";}
        example.innerHTML+=tabContent;
}


