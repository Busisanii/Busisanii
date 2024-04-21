<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Report.aspx.cs" Inherits="B_Majozi_Practical_Assignment.Report" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE-edge">
    <meta name="viewport" content="width-device-width,initial-scale-1.0">
    <title>Survey</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header>
        <h2 class="logo">Survey</h2>
        <nav class="navigation">
             <asp:HyperLink  href="#" ID="reports" runat="server">Reports</asp:HyperLink>
             <asp:HyperLink  href="#" ID="HyperLink1" runat="server">Take Survey</asp:HyperLink>
            
        </nav>
    </header>

    <div class="wrapper">
        <span class="icon-close">
            <ion-icon name="close"></ion-icon>
        </span>

        <div class="form-box survey" >
           
       
        </div>
    </div>
</body>
</html>
