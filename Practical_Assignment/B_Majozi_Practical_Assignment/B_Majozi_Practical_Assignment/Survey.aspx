<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Survey.aspx.cs" Inherits="B_Majozi_Practical_Assignment.Survey" %>

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
             <asp:HyperLink ID="reports" runat="server">Reports</asp:HyperLink>
            
            <a href="#" >Take Survey</a>
        </nav>
    </header>

    <div class="wrapper">
        <span class="icon-close">
            <ion-icon name="close"></ion-icon>
        </span>

        <div class="form-box survey" >
            <h2>Personal details</h2>
            <form action="#" runat="server">

                <div class="input-box">
                     <label>Full Names </label>
                    <asp:TextBox ID="userName"  type="text" runat="server" required="true" ></asp:TextBox>
                </div>

                <div class="input-box">
                     <label>Email</label>
                    <asp:TextBox ID="email" type="email" runat="server" required="true"></asp:TextBox>
                </div>

                <div class="input-box">
                    <label>Date of birth</label>
                    <asp:TextBox ID="dateOfB" type="date" runat="server" required="true"></asp:TextBox>
               </div>

                <div class="input-box">
                    <label >Contact number</label>
                <asp:TextBox ID="ContNum" runat="server" type="phone" required="true"></asp:TextBox>
                </div>

                

     <table class="rate_table">
     <tr>
       <th scope="col"></th>
       <th scope="col">Strongly Agree</th>
       <th scope="col">Agree</th>
       <th scope="col">Neutral</th>
       <th scope="col">Disagree</th>
       <th scope="col">Strongly Disagree</th>
     </tr>

  <tr>
 <td>I like to watch movies</td>
 <td> <asp:RadioButton GroupName="mov" ID="strongA1" value="1" runat="server"/></td>
 <td> <asp:RadioButton GroupName="mov" ID="agree1" value="2" runat="server" /></td>
 <td> <asp:RadioButton GroupName="mov" ID="neutral1" value="3" runat="server" /></td>
 <td>  <asp:RadioButton GroupName="mov" ID="disagree1" value="4" runat="server"/></td>
 <td>  <asp:RadioButton GroupName="mov" ID="strongDisagree1" value="5" runat="server" /></td>
</tr>
        
 <tr>
 <td>I like to listen to radio</td>
  <td> <asp:RadioButton GroupName="radio" ID="strongA2" value="1" runat="server" /></td>
 <td> <asp:RadioButton GroupName="radio" ID="agree2" value="2" runat="server" /></td>
 <td> <asp:RadioButton GroupName="radio" ID="neutral2" value="3" runat="server" /></td>
 <td>  <asp:RadioButton GroupName="radio" ID="disagree2" value="4" runat="server"/></td>
 <td>  <asp:RadioButton GroupName="radio" ID="strongDisagree2" value="5" runat="server" /></td>
 </tr>

         <tr>
 <td>I like to eat out</td>
 <td> <asp:RadioButton GroupName="eat" ID="strongA3" value="1" runat="server" /></td>
<td> <asp:RadioButton GroupName="eat" ID="agree3" value="2" runat="server" /></td>
<td> <asp:RadioButton GroupName="eat" ID="neutral3" value="3" runat="server" /></td>
<td>  <asp:RadioButton GroupName="eat"  ID="disagree3" value="4" runat="server"/></td>
<td>  <asp:RadioButton GroupName="eat" ID="strongDisagree3" value="5" runat="server" /></td>
 </tr>

         <tr>
 <td>I like to watch Tv</td>
<td> <asp:RadioButton GroupName="tv" ID="strongA4" value="1" runat="server" /></td>
<td> <asp:RadioButton GroupName="tv"  ID="agree4" value="2" runat="server" /></td>
<td> <asp:RadioButton  GroupName="tv" ID="neutral4" value="3" runat="server" /></td>
<td>  <asp:RadioButton GroupName="tv"  ID="disagree4" value="4" runat="server"/></td>
<td>  <asp:RadioButton  GroupName="tv" ID="strongDisagree4" value="5" runat="server" /></td>
         </tr>
  </table> 

                <div class="food_type">
                    <label>What is your favorite food?</label>
                    <label>
                         <asp:CheckBox ID="cbPizza" runat="server" required="true"/> 
                        Pizza</label>
                             
                    <label> <asp:CheckBox ID="cbPasta" placeholder="Pasta" runat="server" />
                        Pasta</label>
                   
                     <label>  <asp:CheckBox ID="cbPapWors" placeholder="Pap & Wors" runat="server" />
                           Pap & Wors</label>
                  
     <label><asp:CheckBox ID="cbOther" placeholder="Other" runat="server" />
                                other</label>
                    
                </div>

                <asp:Button ID="btnSubmit" class="btnSubmit" runat="server" Text="Submit" OnClick="btnSubmit_Click" />
         

     </form>
        </div>
    </div>
</body>
</html>
